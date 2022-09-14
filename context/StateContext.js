import React, { createContext, useContext, useState, useEffect } from 'react';
import { client } from '../utils/lib/client';
import { useRouter } from 'next/router';


const Context = createContext();

export const StateContext = ({ children }) => {
	const router = useRouter()
	const [membersList, setMembersList] = useState([]);
	const [newMember, setNewMember] = useState('');

	const addMember = async (member) => {
		const document = {
			_type: 'members',
			name: newMember,
		};
		if (newMember && newMember !== '') {
			const query = `*[_type == 'members']`
			await client.create(document);
			const updatedMembers = await client.fetch(query)
			setMembersList(updatedMembers)
		} else {
			return;
		}
		router.reload()
	};

	return (
		<Context.Provider
			value={{
				membersList,
        setMembersList,
				addMember,
				newMember,
				setNewMember,
			}}
		>
			{children}
		</Context.Provider>
	);
};


export const useStateContext = () => useContext(Context);
