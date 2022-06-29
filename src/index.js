import './index.scss';

import { appStore, persistor } from './redux/appStore';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	//<React.StrictMode>
	<Provider store={appStore}>
		<BrowserRouter>
			<PersistGate loading={<h2>LOADING....</h2>} persistor={persistor}>
				<App />
			</PersistGate>
		</BrowserRouter>
	</Provider>
	//</React.StrictMode>
);
