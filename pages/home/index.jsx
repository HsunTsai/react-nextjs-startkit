import React from 'react';
import { useRouter } from 'next/router';
import config from '../../utils/config';

import { home } from './home.module.scss';

const Home = ({ apple, banana }) => {
	const router = useRouter();
	return (
		<div className={home}>
			<div>ASD的頁面</div>
			<img src={`${config.basePath}/images/profile.jpg`} alt="Your Name" />
			<div>{`Apple: ${apple}`}</div>
			<div>{`Banana: ${banana}`}</div>
			<button onClick={() => router.push({ pathname: '/about' })}>Go About</button>
			<button onClick={() => router.push({ pathname: '/home/topic' })}>Go Topic</button>
		</div>
	);
};

export default Home;

export const getStaticProps = () => ({ props: { apple: 40, banana: 50 } });
