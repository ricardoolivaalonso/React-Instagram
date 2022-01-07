import React from 'react';
import ReactDOM from 'react-dom';
import App from './jsx/App';
import { IGProvider } from "./context/store"

ReactDOM.render(
	<React.StrictMode>
		<IGProvider>
			<App />
		</IGProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
