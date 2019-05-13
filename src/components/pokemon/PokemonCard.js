import React, { Component } from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Sprite = styled.img`
	width: 5em;
	height: 5em;
`;

const Card = styled.div`
  opacity: 0.95;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  -moz-user-select: none;
  -website-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -o-user-select: none;
`;



export default class PokeonCard extends Component {
	state =  {
		name: '',
		imageUrl: '',
		pokemonIndex: '',
	};

	componentDidMount(){
		const { name, url, id } = this.props;
		const imageUrl = "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/"+name+".png"
		this.setState({ name, imageUrl, pokemonIndex: id })
	}


	render(){
		return(
			<div className="col-md-3 col-sm-6 mb-5">
        	<Link to={`pokemon/${this.state.pokemonIndex}`}>
			  <div className="card">
			  	<h5 className="card-header">{this.state.id}</h5>
			  	<Sprite className="card-img-top rounded mx-auto mt-2"
			  	 src={this.state.imageUrl}
			  	/>
			  	<div className="card-body mx-auto">
			  	  <h6 className="card-title">{this.state.name}</h6>
			  	</div>
			  </div>
			  </Link>
			</div>
		)
	}
}