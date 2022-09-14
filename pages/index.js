import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Header, Form, Feed, Footer } from '../components';

const Home = ({ members }) => {
	const [membersArr, setMembersArr] = useState([])

	useEffect(() => {
		setMembersArr(members)
	}, [members])

	return (
		<>
			<Header />
			<div className='main-container'>
				<Form />
				<Feed 
					members={membersArr} 
				/>
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
