import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const Home = () => {
	const router = useRouter();
	useEffect(() => {
		router.push({ pathname: '/home' });
	}, []);

	return <>Welcome to Next React</>;
};

export default Home;
