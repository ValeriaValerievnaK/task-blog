import React from 'react';
import ReactDOM from 'react-dom/client';
import { Blog } from './app/Blog';
import { Provider } from 'react-redux';
import { store } from './src/store';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<Blog />
			</Provider>
		</BrowserRouter>
	</React.StrictMode>,
);
