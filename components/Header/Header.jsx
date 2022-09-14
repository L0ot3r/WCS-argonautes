import React from 'react';
import Image from 'next/image'
import styles from './Header.module.css';

const header = () => {
	return (
		<header className={styles.header}>
			<img
				src='https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png'
				alt='Wild Code School logo'
				className={styles.logo}
			/>
			<div className={styles.title}>
				<h1>Les Argonautes</h1>
			</div>
		</header>
	);
};

export default header;
