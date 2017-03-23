import React, { Component } from 'react';
import './stylesheets/App.css';

import SplashScreen from './SplashScreen';
import AboutMe from './AboutMe';
import Skills from './Skills';

class App extends Component {
  render() {
		return (
			<div>
				<SplashScreen></SplashScreen>
				<AboutMe></AboutMe>
				<Skills></Skills>
			</div>
		);
  }
}

export default App;
