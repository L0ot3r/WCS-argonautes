import React from 'react';
import styles from './Feed.module.css';
import { useRouter } from 'next/router'

import { MdDeleteForever } from 'react-icons/md';
import { client } from '../../utils/lib/client';


const Feed = ({ members }) => {
	const router = useRouter()

	const deleteMember = async (id) => {
		await client.delete(id);
		router.reload()
	};
	
	return (
		<div className={styles.feedContainer}>
			<h2>Membres de l&apos;équipage</h2>
			<ul>
				{members.map((member) => (
					<li className={styles.list} key={member._id}>
						<div className={styles.card}>
							<h4>{member.name}</h4>
							<button 
								type='button' 
								onClick={() => {
									deleteMember(member._id)
								}}
							>
								<MdDeleteForever />
							</button>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Feed;
