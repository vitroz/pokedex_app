import React, { Component } from 'react';

export default class TypePokemonOption extends Component {

	state =  {
		name: '',
		id: '',
		typename: ''
	};

	componentDidMount(){
		const { name, id, typename } = this.props;
		this.setState({ name, id, typename })
	}

	render(){

		return(
			<React.Fragment>
				 <option name="types" value={this.state.id}>{this.state.typename}</option>
			</React.Fragment>
		)
	}
}
