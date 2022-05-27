import { useState, createContext, useContext } from "react";

const globalContext = createContext();
const useGlobal = () => useContext(globalContext);

const GlobalProvider = ({ children }) => {
	const [globalState, setGlobalState] = useState({
		isModalOpen: false,
		currAddress: {
			name: "",
			street: "",
			city: "",
			state: "",
			country: "",
			zipCode: "",
			mobile: "",
		},
	});
	return (
		<globalContext.Provider value={{ globalState, setGlobalState }}>
			{children}
		</globalContext.Provider>
	);
};

export { useGlobal, GlobalProvider };