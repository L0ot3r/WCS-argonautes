import React from 'react';
import axios from 'axios';
import { Header, Form, Feed, Footer } from '../components';

const Home = ({ members }) => {

	return (
		<>
			<Header />
			<div className='main-container'>
				<Form />
				<Feed 
					members={members} 
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
