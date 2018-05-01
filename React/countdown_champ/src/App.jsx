import React, {Component} from 'react';
import './App.css';

class App extends Component{

	constructor(props) {
		super(props);
		this.state = {
			deadline: 'December 25, 2018'
		}
	}

	changeDeadline() {
		this.setState({
			deadline: 'November 25, 2018'
		});

	}

	render(){
		return(
			<div className="App">
				<div className="App-title">Countdown to {this.state.deadline}</div>
				<div>
					<div className="clock-days">14 days </div>
					<div className="clock-hours">30 hours </div>
					<div className="clock-minutes">15 minutes </div>
					<div className="clock-seconds">20 seconds</div>
				</div>
				<div>
					<button onClick={() => this.changeDeadline()}>Change countdown target</button>
				</div>
			</div>
		);
	}
}

export default App;