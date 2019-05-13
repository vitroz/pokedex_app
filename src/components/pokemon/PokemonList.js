import React, { Component } from 'react';
import styled from 'styled-components'
import PokemonCard from './PokemonCard'
import axios from 'axios'



export default class PokemonList extends Component {

	constructor(){
		super();
		this.state = {
			search: '',
			url: "http://localhost:3000/pokemons/",
			pokemons: [],
			store: []
		};
	}

	filterNames(e){
	  this.setState({pokemons: this.state.store.filter(pokemon => pokemon.name.toLowerCase().includes(e.target.value.toLowerCase()))})
	}

	async componentDidMount(){
		const res = await axios.get(this.state.url);
		this.setState({pokemons: res.data, store: res.data});
	}

	render(){
		return(
			<React.Fragment>
			  <div className="form-group">
			    <input type="text" onChange={this.filterNames.bind(this)} className="form-control" id="pkmn_search" placeholder="Enter pokemon name"></input>
			  </div>
			  {this.state.pokemons ? (<div className="row">
				{this.state.pokemons.map(pokemon => (
					<PokemonCard
						key={pokemon.id}
						id={pokemon.id}
						name={pokemon.name}

					 />
				))}
				</div>) : (<h1>Loading Pokemon</h1>)}
			</React.Fragment>
		);
	}

}
