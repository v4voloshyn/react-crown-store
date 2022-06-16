import { Routes, Route } from 'react-router-dom';

import Home from './routes/Home/Home';
import Navigation from './routes/Navigation/Navigation';
import NotFound from './routes/NotFound/NotFound';
import Shop from './routes/Shop/Shop';

import './App.scss';
import Authentification from './routes/Authentification/Authentification';

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path='shop' element={<Shop />} />
				<Route path='auth' element={<Authentification />} />
			</Route>
			<Route path='*' element={<NotFound />} />
		</Routes>
	);
};

export default App;
