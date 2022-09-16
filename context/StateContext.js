import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';


const Context = createContext();

export const StateContext = ({ children }) => {
	const [membersList, setMembersList] = useState([]);
	const [newMember, setNewMember] = useState('');

	const getAllMembers = async () => {
		const updatedMembers = await axios.get('http://localhost:3000/api/member')
		setMembersList(updatedMembers)
		console.log(membersList);
	}

	const addMember = async (member) => {
		const document = {
			_type: 'members',
			name: newMember,
		};
		if (newMember && newMember !== '') {
			await axios.post('http://localhost:3000/api/member', document);
		}
		getAllMembers()
	};



	return (
		<Context.Provider
			value={{
				membersList,
        setMembersList,
				addMember,
				newMember,
				setNewMember,
				getAllMembers,
			}}
		>
			{children}
		</Context.Provider>
	);
};


export const useStateContext = () => useContext(Context);
