import './App.scss';

import { Route, Routes } from 'react-router-dom';
import { createUserDocumentFromAuth, onAuthStateChangedListener } from './utils/firebase/firebase';

import Authentification from './routes/Authentification/Authentification';
import Checkout from './routes/Checkout/Checkout';
import Home from './routes/Home/Home';
import Navigation from './routes/Navigation/Navigation';
import NotFound from './routes/NotFound/NotFound';
import Shop from './routes/Shop/Shop';
import { setCurrentUser } from './redux/userStore/user.action';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		// Observe user auth state and rerender components
		const observer = onAuthStateChangedListener((user) => {
			if (user) {
				createUserDocumentFromAuth(user);
			}
			dispatch(setCurrentUser(user));
		});

		return observer;
	}, [dispatch]);

	return (
		<Routes>
			<Route path='/' element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path='shop/*' element={<Shop />} />
				<Route path='checkout' element={<Checkout />} />
				<Route path='auth' element={<Authentification />} />
			</Route>
			<Route path='*' element={<NotFound />} />
		</Routes>
	);
};

export default App;
