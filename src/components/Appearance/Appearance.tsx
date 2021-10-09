import React from 'react';
import { Button } from '../UI';
import Wrapper from '../Wrapper/Wrapper';
import WrapperHeader from '../Wrapper/WrapperHeader';
import classes from './Appearance.module.scss';

interface AppearanceProps {}

const Appearance: React.FC<AppearanceProps> = () => {
	return (
		<Wrapper className={classes.wrapper}>
			<WrapperHeader title="Appearance" />
			<div className={classes.content}>
				<Button hover outline>
					Change Theme
				</Button>
			</div>
		</Wrapper>
	);
};

export default Appearance;
