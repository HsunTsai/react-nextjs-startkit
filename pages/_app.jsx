import { useEffect } from 'react';

import './_app.scss';

export default function App({ Component, pageProps }) {
	useEffect(() => {
		console.log('hahaha');
	}, []);
	return (
		<div className="app">
			<Component {...pageProps} />
		</div>
	);
}
