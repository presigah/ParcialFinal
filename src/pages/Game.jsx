import { useState, useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import GameContext from "../context/GameContext";
import ImageMP from '../components/ImageMP';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Margin } from '@mui/icons-material';

const Game = () => {
	const { namePlayer, cardPlayer, addCards, playerWin, antiCardPlayer, obteingCard} = useContext(GameContext);
	const navigate = useNavigate();

	const handleClick = () => {
		navigate("/", { replace: true });
		window.location.reload();
	}

	return (
		<>
			<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
				{
					playerWin ?
						<Button variant="contained" onClick={handleClick} sx={{ paddingX: '15%', marginBottom: '5px' }} >Home</Button>
					:
						<Button variant="contained" onClick={addCards} sx={{ paddingX: '15%', marginBottom: '5px' }} >Get Card</Button>
				}
			</div>
			<br/>
			<center><h3>{obteingCard}</h3></center>
			<br/>
			
			<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
				<Box sx={{ display: 'flex', alignItems: 'flex-end'}}>
					<ImageMP card={cardPlayer} />
					<ImageMP card={antiCardPlayer} />
				</Box>
			</div>
		</>
	);
}

export default Game;