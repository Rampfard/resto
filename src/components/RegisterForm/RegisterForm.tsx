import { Button } from '@components/UI';
import React, { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import classes from './Register.module.scss';

interface RegisterProps {
	onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const waveText = (str: string) => {
	return str.split('').map((l, i) => (
		<span key={i} style={{ transitionDelay: `${i * 30}ms` }}>
			{l}
		</span>
	));
};

const Register: React.FC<RegisterProps> = ({ onSubmit }) => {
	return (
		<>
			<h2 className={classes.title}>Please Login</h2>
			<form className={classes.form} onSubmit={onSubmit}>
				<div className={classes.control}>
					<input id="nameInput" type="text" required />
					<label htmlFor="nameInput">{waveText('Name')}</label>
				</div>

				<div className={classes.control}>
					<input id="surNameInput" type="text" required />
					<label htmlFor="surNameInput">{waveText('Surname')}</label>
				</div>

				<div className={classes.control}>
					<input id="emailInput" type="text" required />
					<label htmlFor="emailInput">{waveText('Email')}</label>
				</div>

				<div className={classes.control}>
					<input id="passwordInput" type="password" required />
					<label htmlFor="passwordInput">{waveText('Password')}</label>
				</div>

				<Button highlighted hover type="submit" className={classes.btn}>
					Register
				</Button>
			</form>

			<p className={classes.text}>
				Have an account? <Link to="/authorization/login">Log In</Link>
			</p>
		</>
	);
};

export default Register;
