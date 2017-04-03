import React, { Component } from 'react';

import './stylesheets/SplashScreen.css';

import debugpls from './assets/lolohgod.jpg';


class SplashScreen extends Component {

	constructor(props) {
		super(props);
		this.state = {
			trades: ['Software Developer', 'Data Scientist'],
			passions: ['Chef', 'Powerlifter', 'Wanderlust']
		}
	}

    render() {
    	let tradeList = this.state.trades.map((trade, i) => (<li className="trade" key={i}>{trade}</li>));
    	let passionList = this.state.passions.map((passion, i) => (<li className="passion" key={i}>{passion}</li>));

        return (
	    	<div className="bg-container">
			    <img alt="itsa meface" src={debugpls}></img>
				<div className="overlay">
					<h1 id="name">Timothy Castillo</h1>
						<div id="whoami">
							<h3>
								<ul>
									{tradeList}
								</ul>
								<ul>
									{passionList}
								</ul>
							</h3>
						</div>
				</div>
			</div>
        );
    }
}

export default SplashScreen;
