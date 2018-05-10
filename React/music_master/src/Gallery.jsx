import React, { Component } from 'react';
import './App.css';

class Gallery extends Component {

	constructor(props){
		super(props);
	
		this.state = {
			playingUrl: '',
			audio: null,
			playing: false
		}
	}

	playAudio(previewUrl) {
		let audio = new Audio(previewUrl);

		// If nothing is playing
		if (!this.state.playing) {

			// Keep playing last track, if something is paused
	        if (this.state.playingUrl === previewUrl) {
	            this.state.audio.play();
	            this.setState({
	                playing: true
	            });
	 
	        // Choose a track
	        } else {
	            audio.play();
	            this.setState({
	                playing: true,
	                playingUrl: previewUrl,
	                audio
	            });
	        }

		// if something is playing
		} else {

				
			if (this.state.playingUrl === previewUrl) {
				
				// Pause current track
				this.state.audio.pause();
				this.setState({
					playing: false
				}) 
			} else {

				// Switch tracks
				this.state.audio.pause();
				audio.play();
				this.setState({
					playing: true,
						playingUrl: previewUrl,
					audio
				})
			}
		}
	}

	render () {
		const {tracks} = this.props;
		
		return (
			<div>
				{tracks.map((track, k) => {	
					console.log(track);
					const trackImg = track.album.images[0].url;
					
					return (
						<div
							key={k}
							className="track"
							onClick={() => this.playAudio(track.preview_url)}
						>
							<img
								src={trackImg}
								className="track-img"
								alt="track"
							/>
							<div className="track-play">
								<div className="track-play-inner">
									{
										(this.state.playingUrl === track.preview_url && this.state.playing === true)
											? <span>&#9646;&#9646;</span>
											: <span>&#9654;</span>
									}
								</div>
							</div>

							<p className="track-text">
								{track.name}
							</p>
						</div>
					);
				})}
			</div>
		)
	}
}

export default Gallery;
