import classNames from 'classnames';
import { FC, FormEvent } from 'react';
import searchIcon from '../../assets/search-icon.svg';
import getCurrentDate from '../../utils/getCurrentDate';
import { Input } from '../UI';
import classes from './Header.module.scss';

interface HeaderProps {
	onSearchChange: (e: FormEvent<HTMLInputElement>) => void;
}

const Header: FC<HeaderProps> = ({ onSearchChange }) => {
	const { date, day, month, year } = getCurrentDate();

	return (
		<header className={classes.header}>
			<div className={classes.info}>
				<h1 className={classNames('title', classes.title)}>Jaegar Resto</h1>
				<p>
					{day}, {date} {month} {year}
				</p>
			</div>
			<Input
				className={classes['search-bar']}
				id="search"
				type="search"
				placeholder="Search for food, coffe, etc..."
				icon={searchIcon}
				onUserInput={onSearchChange}
			/>
		</header>
	);
};

export default Header;
