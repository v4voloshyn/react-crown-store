import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { appStore } from './redux/appStore';

import { CategoriesProvider } from './context/CategoriesContext';
import { CartProvider } from './context/CartContext';

import App from './App';

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	// <React.StrictMode>
	<Provider store={appStore}>
		<BrowserRouter>
			<CategoriesProvider>
				<CartProvider>
					<App />
				</CartProvider>
			</CategoriesProvider>
		</BrowserRouter>
	</Provider>
	// </React.StrictMode>
);
