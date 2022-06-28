import './index.scss';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { appStore } from './redux/appStore';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	//<React.StrictMode>
	<Provider store={appStore}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
	//</React.StrictMode>
);
