import React, { Component } from 'react';
import './App.css'
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import Profile from './Profile.jsx'

class App extends Component {

	constructor (props){
		super(props);
		this.state = {
			query: '',
			artist: null
		};
	}

	search () {
		const BASE_URL = 'https://api.spotify.com/v1/search?';
		const FETCH_URL = `${BASE_URL}q=${this.state.query}&type=artist&limit=1`;

		/*
		 * Get the access token either from the spotify_auth folder
		 * or from: https://beta.developer.spotify.com/console/get-search-item/
		 */
		const access_token = 'YOUR_ACCESS_TOKEN';

		const myHeaders = new Headers();

		const myOptions = {
	      	method: 'GET',
	    	headers:  {
	    		'Authorization': 'Bearer ' + accessToken
	    	},
	      	mode: 'cors',
	    	cache: 'default'
	    };

		fetch (FETCH_URL, {
			method: 'GET'
		})
			.then(response => response.json)
			.then(json => {
				const artist = json.artist.items[0];
				this.setState({artist});
			});
	}
	render() {
		return (
			<div className="App">
				<div className="app-title">Music Master</div>
				<FormGroup>
					<InputGroup>
						<FormControl 
							type="text" 
							placeholder="Find an artist"
							query={this.state.query}
							onChange={event => {this.setState({query:event.target.value})}}
							onKeyPress={event => {
								if (event.key === 'Enter'){
									this.search()
								}
							}}
						/>
						<InputGroup.Addon onClick={() => this.search()}>
							<Glyphicon glyph="search"></Glyphicon>
						</InputGroup.Addon>
					</InputGroup>
				</FormGroup>
				<Profile 
					artist={this.state.artist}
				/>	
				<div className="gallery">
					Gallery
				</div>
			</div>
		);
	}
}

export default App;
