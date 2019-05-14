import React, { Component } from 'react';
import TypePokemonOption from './TypePokemonOption'
import axios from 'axios'

export default class NewPokemon extends Component {

	constructor(){
		super();
		this.state = {
			pokemonName: '',
			type: '',
			type2: '',
			evolution: '',
			types: [],
			types2: []
		};
	}

    async componentDidMount() {
    	const res = await axios.get("http://localhost:3000/types");
    	this.setState({types: res.data.data, types2: res.data.data});	
     }

	  handleChange = event => {
	    this.setState({ pokemonName: event.target.value });
	  }

	  handleChangeEvo = event => {
	    this.setState({ evolution: event.target.value });
	  }

	  handleChangeType = event => {
	    this.setState({ type: event.target.value });
	  }

	  handleChangeType2 = event => {
	    this.setState({ type2: event.target.value });
	  }	  

	  handleSubmit = event => {
	    event.preventDefault();

	    const pokemon = {
	      name: this.state.pokemonName,
	      types: [{id: this.state.type}, {id: this.state.type2}],
	      evolutions: [{pkmn_id: this.state.evolution, order: 1}]
	    };

	    axios.post(`http://localhost:3000/pokemons/`, { pokemon })
	      .then(res => {
	      	if(res.data.status == "success"){
	      		alert(res.data.message);
	        	this.props.history.push('/')
	        	return;
	      	}
	        console.log(res.data);
	        alert(res.data.message);
	      })
	  }

	render(){
		return(
			<div>
			<form onSubmit={this.handleSubmit}>
				<h1> New Pokemon </h1>
				  <div className="form-group col-md-3">
				    <input type="text" maxLength="20" onChange={this.handleChange} className="form-control" name="pokemonName" placeholder="Pokemon Name" />
				  </div>
				  <span>Type </span>
				  {this.state.types ? ( <div className="form-group col-md-3"><select onChange={this.handleChangeType}><option name="types" key=""> </option>
					{this.state.types.map(type => (
					<TypePokemonOption
					key={type.id}
					id={type.id}
					typename={type.name}

					/>
					))} </select></div>) : (<h1>Loading Types</h1>)}	
				  <span>Type 2 </span>
				  {this.state.types2 ? ( <div className="form-group col-md-3"><select onChange={this.handleChangeType2}><option name="types2" key=""> </option>
					{this.state.types2.map(type => (
					<TypePokemonOption
					key={type.id}
					id={type.id}
					typename={type.name}

					/>
					))} </select></div>) : (<h1>Loading Types</h1>)}									  
				  <div className="form-group col-md-3">
				    <button type="submit" className="btn btn-success">Criar</button>
				  </div>	
			</form>		  						  	
			</div>
		)
	}
}
