import { createContext, useState } from 'react';

export const StoreContext = createContext();

const StoreProvider = ({ children }) => {
	const [count, setCount] = useState(0);

	const handleOnCLick = () => {
		setCount(count + 1);
	};

	return (
		<>
			<StoreContext.Provider value={{ count, handleOnCLick }}>
				{children}
			</StoreContext.Provider>
		</>
	);
};

export default StoreProvider;
