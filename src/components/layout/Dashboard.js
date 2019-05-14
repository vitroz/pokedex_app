import React, { Component } from 'react';
import styled from 'styled-components';
import PokemonList from '../pokemon/PokemonList';
import CrudCommand from './CrudCommand'


export default class Dashboard extends Component {
	render(){
		return(
			<div>
				<CrudCommand />
				<div className="row">
					<div className="col">
						<PokemonList />
					</div>
				</div>
			</div>
		)
	}
}