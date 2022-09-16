import React, { useEffect } from 'react';
import axios from 'axios';

import { Header, Form, Feed, Footer } from '../components';

import { useStateContext } from '../context/StateContext';

const Home = ({ members }) => {
	const { membersList, setMembersList } = useStateContext()

	useEffect(() => {
		setMembersList(members)
	}, [members, setMembersList])

	return (
		<>
			<Header />
			<div className='main-container'>
				<Form />
				<Feed members={membersList} />
			</div>
			<Footer />
		</>
	);
};

export const getServerSideProps = async () => {
	const { data } = await axios.get('http://localhost:3000/api/member')
	
	return {
		props: {
			members: data,
		},
	}
}

export default Home
