import React, { createContext, useContext, useState, useEffect } from 'react';

import { client } from '../utils/lib/client';


const Context = createContext();

export const StateContext = ({ children }) => {
	const [membersList, setMembersList] = useState([]);
	const [newMember, setNewMember] = useState('');
	const query = `*[_type == 'members']`

	const getAllMembers = async () => {
		const updatedMembers = await client.fetch(query)
		setMembersList(updatedMembers)
		console.log(membersList);
	}

	const addMember = async (member) => {
		const document = {
			_type: 'members',
			name: newMember,
		};
		if (newMember && newMember !== '') {
			await client.create(document);
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
