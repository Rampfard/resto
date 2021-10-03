import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import getCurrentDate from '../../utils/getCurrentDate';
import classNames from 'classnames';
import { fetchProductData } from '../../store/product-actions';

import { Input } from '../UI';
import searchIcon from '../../assets/search-icon.svg';

import classes from './Header.module.scss';
const Header = () => {
	const { date, day, month, year } = getCurrentDate();
	// const dispatch = useDispatch();

	// useEffect(() => {
	// 	dispatch(fetchProductData());
	// }, [dispatch]);

	const products = useSelector((state) => state.products);
	// console.log(products)
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
			/>
		</header>
	);
};

export default Header;
