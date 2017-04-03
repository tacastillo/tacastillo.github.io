import React, { Component } from 'react';
import './stylesheets/App.css';

import SplashScreen from './SplashScreen';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Projects from './Projects';

class App extends Component {
  render() {
		return (
			<div>
				<SplashScreen></SplashScreen>
				<AboutMe></AboutMe>
				<Projects></Projects>
				<Skills></Skills>
			</div>
		);
  }
}

export default App;
