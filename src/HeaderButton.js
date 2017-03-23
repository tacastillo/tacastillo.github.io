import React, { Component, PropTypes } from 'react';

class HeaderButton extends Component {
    static propTypes = {
        className: PropTypes.string,
        isActive: PropTypes.bool,
        clickFunc: PropTypes.func,
        label: PropTypes.string,
        buttonId: PropTypes.number
    };

    render() {
        return (
            <a
                id="about-me-link"
				onClick={this.props.clickFunc}
				className={this.props.isActive ? "active item" : "item"} >
				{this.props.label}
			</a>
        );
    }
}

export default HeaderButton;
