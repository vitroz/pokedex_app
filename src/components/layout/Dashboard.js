import React, { Component } from 'react';
import styled from 'styled-components';
import PokemonList from '../pokemon/PokemonList';


export default class Dashboard extends Component {
	render(){
		return(
			<div className="row">
				<div className="col">
					<PokemonList />
				</div>
			</div>
		)
	}
}