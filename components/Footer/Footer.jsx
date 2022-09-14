import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<p>Réalisé par Jason en Anthestérion de l&apos;an 515 avant JC</p>
			<p>
				Avec l&apos;aide de
				<a
					href='https://github.com/L0ot3r'
					target='_blank'
					rel='noreferrer noopener'
				>
					Sébastien Léoville
				</a>
			</p>
		</footer>
	);
};

export default Footer;
