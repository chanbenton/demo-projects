import React, { Component } from 'react';
import './App.css'
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import Profile from './Profile.jsx'
import Gallery from './Gallery.jsx'


class App extends Component {

	constructor (props){
		super(props);
		this.state = {
			query: '',
			artist: null,
			tracks: []
		};
	}

	search () {
		const BASE_URL = 'https://api.spotify.com/v1/search';
		let FETCH_URL = `${BASE_URL}?q=${this.state.query}&type=artist&limit=1`;
		const ALBUM_URL = 'https://api.spotify.com/v1/artists'
		
		/*
		 * Get the access token either from:
		 * - ./spotify_auth/authorization_code, run 'node app.js' and login
		 * - https://beta.developer.spotify.com/console/get-search-item/
		 */
		const accessToken = 'INSERT_TOKEN_HERE';
		const myOptions = {
	      	method: 'GET',
	    	headers:  {
	    		'Authorization': 'Bearer ' + accessToken
	    	},
	      	mode: 'cors',
	    	cache: 'default'
	    };

	    fetch(FETCH_URL, myOptions)
	      .then(response => response.json())
	      .then(json => {
	      	const artist = json.artists.items[0];
	      	this.setState({artist});

	      	FETCH_URL = `${ALBUM_URL}/${artist.id}/top-tracks?country=US`

	      	fetch (FETCH_URL, myOptions) 
	      		.then(response => response.json())
	      		.then(json => {
	      			console.log("Artist's top tracks: ", json);

	      			const { tracks } = json;
	      			this.setState({tracks});
	      		});
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
				{this.state.artist !== null 
					? 	<div>
							<Profile 
								artist={this.state.artist}
							/>
							<Gallery 
								tracks={this.state.tracks}
							/>
						</div>	
					: <div>Please enter an artist name.</div>
				}
			</div>
		);
	}
}

export default App;
