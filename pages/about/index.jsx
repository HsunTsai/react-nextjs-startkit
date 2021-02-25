import React from 'react';
import { useRouter } from 'next/router';

import { about } from './about.module.scss';

const About = () => {
	const router = useRouter();
	return (
		<div className={about}>
			<div>I'm About page</div>
			<button onClick={() => router.push({ pathname: '/' })}>Go Home</button>
		</div>
	);
};

export default About;
