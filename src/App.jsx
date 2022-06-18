import { Routes, Route } from 'react-router-dom';

import { CartProvider } from './context/CartContext';

import Home from './routes/Home/Home';
import Navigation from './routes/Navigation/Navigation';
import Authentification from './routes/Authentification/Authentification';
import Shop from './routes/Shop/Shop';
import NotFound from './routes/NotFound/NotFound';

import './App.scss';

const App = () => {
	return (
		<Routes>
			<Route
				path='/'
				element={
					<CartProvider>
						<Navigation />
					</CartProvider>
				}
			>
				<Route index element={<Home />} />
				<Route path='shop' element={<Shop />} />
				<Route path='auth' element={<Authentification />} />
			</Route>
			<Route path='*' element={<NotFound />} />
		</Routes>
	);
};

export default App;
