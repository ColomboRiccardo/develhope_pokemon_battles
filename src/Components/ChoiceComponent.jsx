import styled, { css } from 'styled-components';

const Button = styled.button`
	border: none;
	background-color: transparent;
	font-size: 2.5rem;
`;

function ChoiceComponent(prop) {
	return <Button>{prop.action}</Button>;
}

export default ChoiceComponent;
