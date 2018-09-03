import React, { Component } from 'react';

import GetInTouch from './GetInTouch/GetInTouch';
import './Contact.css';
import CV from '../../Assets/CV.pdf';
import { Animated } from "react-animated-css";

export default class AboutMe extends Component {

  state = {
    openModal: false
  }

  render() {
    return (
      <div className="contact">
        <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
          <h1>Want to know more about me</h1>
        </Animated>
        <Animated animationIn="bounceInRight" animationOut="fadeOut" isVisible={true}>
          <div className="button-group">
            <form method="get" action={CV}>
              <button className="cv">Download my CV</button>
            </form>
            
            <button className="get-in-touch"
              onClick={() => this.setState({ openModal: !this.state.openModal })}
            >Get In Touch
        </button>
          </div>
        </Animated>
        {this.state.openModal ?
              <GetInTouch closeModal={() => this.setState({ openModal: !this.state.openModal })} />
              : null}
        <Animated animationIn="bounceInUp" animationOut="fadeOut" isVisible={true} style={{zIndex: 2}}>
          <p>Or contact with me on social </p>
          <div className="social">
            <a><i className="fab fa-facebook fb" style={{ fontSize: 60 }}></i></a>
            <a><i className="fab fa-github-square github" style={{ fontSize: 60 }}></i></a>
            <a><i className="fab fa-linkedin linkedin" style={{ fontSize: 60 }}></i></a>
          </div>
        </Animated>
      </div>
    )
  }
}
