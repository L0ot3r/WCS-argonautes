import React, { useEffect } from 'react';

import { Header, Form, Feed, Footer } from '../components';
import { client } from '../utils/lib/client';
import { useStateContext } from '../context/StateContext';

const Home = ({ members }) => {
	const { membersList, setMembersList } = useStateContext()

	useEffect(() => {
		setMembersList(members)
	}, [members, setMembersList])

	console.log(membersList);

	return (
		<>
			<Header />
			<div className='main-container'>
				<Form />
				<Feed 
					members={membersList} 
				/>
			</div>
			<Footer />
		</>
	);
};

export const getServerSideProps = async () => {
	const query = `*[_type == 'members']`
	const data = await client.fetch(query)
	return {
		props: {
			members: data,
		},
	}
}

export default Home
