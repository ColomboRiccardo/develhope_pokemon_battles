import React from 'react';
import styled, { css } from 'styled-components';

import ChoiceComponent from './ChoiceComponent';

const StyledMenu = styled.div`
	background-color: lightgray;
	position: absolute;
	border: 1px solid black;
	border-radius: 5px;
	width: 560px;
	height: 150px;
	bottom: 20px;
	left: 50%;
	transform: translateX(-50%);
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr;
`;

const ActionMenu = () => {
	return (
		<StyledMenu>
			<ChoiceComponent action='Attacca' />
			<ChoiceComponent action='Zaino' />
			<ChoiceComponent action='Pokemon' />
			<ChoiceComponent action='Fuggi' />
		</StyledMenu>
	);
};

export default ActionMenu;
