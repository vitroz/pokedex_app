import React, { Component } from 'react';
import styled from 'styled-components'
import PokemonCard from './PokemonCard'
import axios from 'axios'

const Sprite = styled.img`
	width: 5em;
	height: 5em;
`;


export default class Pokemon extends Component {

	state = {
		name: '',
		pokemonindex: '',
		imageUrl: '',
		types: [],
		evolution: '',
		evolution_chain: []
	}

	async componentDidMount(){
		const pokemonIndex = this.props.match.params.id;

		const pokemonUrl = `http://localhost:3000/pokemons/${pokemonIndex}`;

		const pokemonRes = await axios.get(pokemonUrl);

		let pokemon = pokemonRes.data
		let evolutionId = '';
		let evolutionName = '';
		let pkmn_name_chain = [];
		let arrr = [];
		let promises = [];

		const name = pokemon.name;
		const imageUrl = "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/"+name+".png"
        const types = pokemon.types_pokemon.map(type => type.type);
        const evolution_fam = pokemon.evolution_family.map(pkmn => pkmn.pkmn_id);

		console.log(pokemonRes.data);
		if (pokemon.evolutions.length != 0){
			pokemon.evolutions.forEach( function(evo) { 
			   evolutionId = evo.pkmn_id;
			} );
		}

		if (evolutionId != ''){
			const evoUrl = `http://localhost:3000/pokemons/${evolutionId}`;
			const evoRes = await axios.get(evoUrl);
			evolutionName = evoRes.data.name;
		}

		if (evolution_fam.length != 0){
			evolution_fam.forEach( function(evo) { 
			  const pkmnUrl = `http://localhost:3000/pokemons/${evo}`;
			  promises.push(axios.get(pkmnUrl))
			} );
		}

		axios.all(promises).then((results) => {
		    results.forEach(function(response) {
		        pkmn_name_chain.push(response.data.name);
		    })
		 this.setState({name, imageUrl, types, evolution: evolutionName, evolution_chain: pkmn_name_chain});
		});

	}

	render(){

		return(
			<div>
				<h1>{this.state.name}</h1>
			<Sprite className="card-img-top rounded mx-auto mt-2"
			  	 src={this.state.imageUrl}/>				
				<h4>Type(s)</h4>
			    <div>
                  {this.state.types.map(type => (
                    <span
                      key={type}
                      className="badge badge-pill mr-1"
                    >
                      {type
                        .toLowerCase()
                        .split(' ')
                        .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                        .join(' ')}
                    </span>
                  ))}
                </div>
            <h4>Evolution: {this.state.evolution}</h4> 
				<h4>Evolution Family</h4>
			    <div>
                  {this.state.evolution_chain.map(name => (
                    <span
                      key={name}
                      className="badge badge-pill mr-1"
                    >
                      {name
                        .toLowerCase()
                        .split(' ')
                        .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                        .join(' ')}
                    </span>
                  ))}
                </div>			  	 
			</div>

		);
	}

}
