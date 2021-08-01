import { useState, useEffect } from 'react';
import classNames from 'classnames';

import { ReactComponent as ArrowIcon } from '../../assets/arrow.svg';

import classes from './Dropdown.module.scss';

const Dropdown = ({
	options,
	className,
	value,
	icon,
	highlighted,
	onChange,
}) => {
	const initialOptions = options ? options : [{ name: 'Empty' }];

	const [isActive, setIsActive] = useState();
	const [selected, setSelected] = useState(initialOptions[0].name);

	const onToggleHandler = () => {
		setIsActive(!isActive);
	};

	useEffect(() => {
		if (value) {
			setSelected(value);
		}
	}, [value]);

	const selectorChangeHandler = (e) => {
		setSelected(e.target.innerText);
		if (onChange) {
			onChange(e);
		}
	};

	const active = isActive ? classes.active : null;
	const highlightClass = highlighted ? classes.highlight : null;

	const dropdownOptions = initialOptions.map((option) => {
		return (
			<button
				key={option.name}
				className={classNames(classes.item)}
				type="button"
				onClick={selectorChangeHandler}
			>
				{option.name}
			</button>
		);
	});

	return (
		<div
			className={classNames(
				classes.dropdown,
				className,
				active,
				highlightClass
			)}
		>
			<button
				onClick={onToggleHandler}
				className={classNames(
					'form-element',
					classes['dropdown-btn'],
					active
				)}
				type="button"
			>
				{icon ? icon : <ArrowIcon />}
				<span>{selected}</span>
			</button>
			<div className={classNames(classes.items)}>{dropdownOptions}</div>
		</div>
	);
};

export default Dropdown;
