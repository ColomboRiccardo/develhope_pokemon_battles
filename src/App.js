import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import ActionMenu from './Components/ActionMenu';
import { Monster } from './Components/Monster';

const Container = styled.div`
	background-color: whitesmoke;
	border: 3px solid black;
	border-radius: 5px;
	position: absolute;
	height: 600px;
	width: 600px;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

function App() {
	//https://pokeapi.co/api/v2/pokemon/{id or name}/

	const [pkm, setPkm] = useState({});
	const [myPkm, setMyPkm] = useState({});

	const FetchPokemon = async () => {
		const randomNumber = Math.floor(Math.random() * 800);
		const newPokemon = await fetch(
			`https://pokeapi.co/api/v2/pokemon/${randomNumber}/`
		);
		const response = await newPokemon.json();

		return response;
	};

	useEffect(() => {
		FetchPokemon().then(res => setPkm(res));
		FetchPokemon().then(res => setMyPkm(res));
	}, [setPkm]);

	return (
		<Container className='App'>
			<Monster image={pkm?.sprites?.front_default} name={pkm?.name} />
			<Monster
				image={myPkm?.sprites?.back_default}
				name={myPkm?.name}
				ismine={true}
			/>

			{console.log(pkm)}
			<ActionMenu />
		</Container>
	);
}

export default App;
