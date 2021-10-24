import { Button, Card } from '@components/UI';
import React, { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import classes from './Authorization.module.scss';

interface AuthorizationProps {}

const waveText = (str: string) => {
	return str.split('').map((l, i) => (
		<span key={i} style={{ transitionDelay: `${i * 30}ms` }}>
			{l}
		</span>
	));
};

const Authorization: React.FC<AuthorizationProps> = () => {
	const submitFormHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log('logged');
	};

	return (
		<section className={classes.authorization}>
			<Card className={classes.container}>
				<h3 className={classes.title}>Please Login</h3>
				<form className={classes.form} onSubmit={submitFormHandler}>
					<div className={classes.control}>
						<input id="EmailInput" type="text" required />
						<label htmlFor="EmailInput">{waveText('Email')}</label>
					</div>

					<div className={classes.control}>
						<input id="PasswordInput" type="password" required />
						<label htmlFor="PasswordInput">{waveText('Password')}</label>
					</div>

					<Button highlighted hover type="submit" className={classes.btn}>
						Login
					</Button>

					<p className={classes.text}>
						Don't have an account? <Link to="/registration">Register</Link>
					</p>
				</form>
			</Card>
		</section>
	);
};

export default Authorization;
