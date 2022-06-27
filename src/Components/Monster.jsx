import styled, { css } from 'styled-components';

const MonsterDiv = styled.div`
	position: absolute;
	top: 0px;
	right: -10px;
	display: flex;
	align-items: center;
	flex-direction: ${props => {
		console.log(props);
		return props.ismine === true ? 'row-reverse' : 'row';
	}};
`;

const MonsterImg = styled.img`
	width: 250px;
	height: 250px;
`;

export function Monster({ image, name, ismine }) {
	return (
		<MonsterDiv className={`${ismine && 'isMine'}`}>
			<MonsterImg src={image} alt='pokemon' />
			<p>{name}</p>
		</MonsterDiv>
	);
}
