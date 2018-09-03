import React, { Component } from 'react';

import './GetInTouch.css';
// library.add(faFacebook);

class GetInTouch extends Component {
    render() {
        return (
            <div className="Modal">
                <a onClick={this.props.closeModal} className="btn-close">X</a>
                <div className="Input-form">
                    <h4>Name</h4>
                    <input className="input" placeholder="Your name" type="text"></input>
                    <h4>Email</h4>
                    <input className="input" placeholder="Email" type="mail"></input>
                </div>
                <div className="button">
                    <button>Sent now</button>
                </div>
            </div>
        )
    }
}

export default GetInTouch;