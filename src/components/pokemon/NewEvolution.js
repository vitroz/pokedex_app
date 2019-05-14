import React, { Component } from 'react';
import TypePokemonOption from './TypePokemonOption'
import axios from 'axios'

export default class NewPokemon extends Component {

	constructor(){
		super();
		this.state = {
			pokemoBaseNumber: '',
			evolutionNumber: ''
		};
	}

	  handleChangeBase = event => {
	    this.setState({ pokemoBaseNumber: event.target.value });
	  }

	  handleChangeEvo = event => {
	    this.setState({ evolutionNumber: event.target.value });
	  }

	  handleSubmit = event => {
	    event.preventDefault();

	    const evolution = {
	      pkmn_base: this.state.pokemoBaseNumber,
	      pkmn_id: this.state.evolutionNumber
	    };

	    axios.post(`http://localhost:3000/evolutions/`, { evolution })
	      .then(res => {
	        console.log(res.data);
	        alert(res.data.message);
	      })
	  }

	render(){
		return(
			<div>
			<form onSubmit={this.handleSubmit}>
				<h1> New Evolution </h1>
				<small> Associate Evolution to a Pokemon </small>
				  <div className="form-group col-md-3">
				    <input type="text" maxLength="20" onChange={this.handleChangeBase} className="form-control" name="pokemonBaseNumber" placeholder="Pokemon Base Number" />
				  </div>
				  <div className="form-group col-md-3">
				    <input type="text" maxLength="20" onChange={this.handleChangeEvo} className="form-control" name="pokemonEvoNumber" placeholder="Pokemon Evolution Number" />
				  </div>							  
				  <div className="form-group col-md-3">
				    <button type="submit" className="btn btn-success">Criar</button>
				  </div>	
			</form>		  						  	
			</div>
		)
	}
}
