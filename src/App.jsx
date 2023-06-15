import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarMP from "./components/NavbarMP";
import Home from './pages/Home';
import NotFoundPage from './pages/NotFoundPage';
import Game from './pages/Game';
import { GameProvider } from "./context/GameContext";

const App = () => {
	return (
		<GameProvider>
			<NavbarMP />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/game" element={<Game />} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</BrowserRouter>
		</GameProvider>
	);
};

export default App;
