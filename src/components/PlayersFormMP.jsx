import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from 'react';
import GameContext from '../context/GameContext';

const PlayersFormMP = () => {
	const navigate = useNavigate(); 
	const {namePlayer, setNamePlayer, startGame} = useContext(GameContext);
	const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleInputChange = (event) => {
		setNamePlayer(event.target.value);
  };

	useEffect(() => {
    setIsButtonDisabled(namePlayer.length < 4);
  }, [namePlayer]);

	const handleClick  = ({ target }) =>{
		startGame();
		navigate("/game");
	};

	return (
		<div>
			<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
				<Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
					<SportsEsportsIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
					<TextField id="player" label="Player Name" variant="standard" onChange={handleInputChange} />
				</Box>
			</div>
			<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
				<Button sx={{ marginTop: 5}} variant="contained" onClick={handleClick} disabled={isButtonDisabled}>Login</Button>
			</div>
		</div>
	);
};

export default PlayersFormMP;