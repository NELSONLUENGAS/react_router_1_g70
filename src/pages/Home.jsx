import React, { useContext } from 'react';
import { StoreContext } from '../context/StoreProvider';

const Home = () => {
	const { count } = useContext(StoreContext);
	return <div>Home: {count}</div>;
};

export default Home;
