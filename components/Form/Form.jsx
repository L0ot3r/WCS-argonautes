import React from 'react';
import styles from './Form.module.css';
import { useRouter } from 'next/router';

import { useStateContext } from '../../context/StateContext';

const Form = () => {
	const router = useRouter()
	const { newMember, setNewMember, addMember } = useStateContext()

	return (
		<div className={styles.formContainer}>
			<h2>Ajouter un(e) Argonaute</h2>
			<form 
				className={styles.form}
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
