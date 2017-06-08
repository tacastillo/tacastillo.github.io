import React, { Component } from 'react';
import HeaderButton from './HeaderButton';

import './stylesheets/Header.css';

class Header extends Component {

    constructor(props) {
        super(props);

		this.state =  {
			headerLabels: ['Home', 'About Me', 'Skills', 'My Work'],
			active: 0
		};
    }

    _isButtonActive = (buttonId) => {
    	return buttonId === this.state.active;
    };

    _clickHeaderButton = (buttonId) => {
    	this.setState({
    		active: buttonId
    	});
    };

    render() {
    	let headers = this.state.headerLabels.map((headerLabel, i) => (
    		<HeaderButton
	    		label={headerLabel}
                buttonId={i} key={i}
	    		isActive={this._isButtonActive(i)}
	    		clickFunc={this._clickHeaderButton.bind(this, i)}
    		/>));

        return (
			<div className="header ui secondary pointing inverted black menu">
				{headers}
			</div>
        );
    }
}

export default Header;
