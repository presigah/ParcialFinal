import { createContext, useEffect, useState } from 'react';
import { GameApi } from '../api/GameApi';
import { useNavigate } from "react-router-dom";

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [namePlayer, setNamePlayer] = useState("");
  const [cardPlayer, setCardPlayer] = useState([]);
  const [antiCardPlayer, setAntiCardPlayer] = useState([]);
  const [obteingCard, setObteingCard] = useState("");
  const [gameId, setGameId] = useState("");
  const [playerWin, setPlayerWin] = useState(false);

  const startGame = async () => {
    const { data } = await GameApi.get(`/new/shuffle/?deck_count=1`);
    setGameId(data.deck_id);
  };

  const getCards = async (cant) => {
    const { data } = await GameApi.get(`/${gameId}/draw/?count=${cant}`);
    return data.cards;
  };

  useEffect(() => {
    const gameInicialization = async () => {
      if (gameId) { 
        const initialCard = await getCards(1);
        setCardPlayer(initialCard[0]);
      }
    };
    gameInicialization();
  }, [gameId]); 

  const addCards = async () => {
    const getCard = await getCards(1);
    const randomCard = getCard[0];
    setObteingCard("Ramdom Card: " + randomCard.value + " " + randomCard.suit);
    let result = false;
    const suitsMapping = {
      CLUBS: "DIAMONDS",
      DIAMONDS: "CLUBS",
      HEARTS: "SPADES",
      SPADES: "HEARTS",
    };
    if (cardPlayer.value == randomCard.value && suitsMapping[randomCard.suit] == cardPlayer.suit) result = true;
    if(result){
      setAntiCardPlayer(randomCard);
      setPlayerWin(true);
    };
  };

  return (
    <GameContext.Provider
      value={{
        namePlayer,
        setNamePlayer,
        startGame,
        cardPlayer,
        addCards,
        playerWin,
        antiCardPlayer,
        obteingCard
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
export { GameProvider };
export default GameContext;