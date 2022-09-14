import React, { createContext, useContext, useState, useEffect } from 'react';


const Context = createContext();

export const StateContext = ({ children }) => {
	const [membersList, setMembersList] = useState([]);


	return (
		<Context.Provider
			value={{
				membersList,
        setMembersList,
			}}
		>
			{children}
		</Context.Provider>
	);
};


export const useStateContext = () => useContext(Context);
