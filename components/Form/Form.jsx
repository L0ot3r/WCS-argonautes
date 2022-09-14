import React, { useEffect, useState } from 'react';
import styles from './Form.module.css';

import { useStateContext } from '../../context/StateContext';

const Form = () => {
	const { newMember, setNewMember, addMember } = useStateContext()

	// const addMember = async (member) => {
	// 	const document = {
	// 		_type: 'members',
	// 		name: newMember,
	// 	};
	// 	if (newMember && newMember !== '') {
	// 		await client.create(document);
	// 	} else {
	// 		return;
	// 	}
	// };

	return (
		<div className={styles.formContainer}>
			<h2>Ajouter un(e) Argonaute</h2>
			<form className={styles.form}
				onSubmit={() => addMember(newMember)}
			>
				<label htmlFor='argonautes'>Nom de l&apos;Argonautes</label>
				<div className={styles.inputContainer}>
					<input
						type='text'
						name='argonautes'
						id='argonautes'
						placeholder='Charalampos'
						onChange={(e) => setNewMember(e.target.value)}
					/>
					<button type='submit'>Envoyer</button>
				</div>
			</form>
		</div>
	);
};

export default Form;
