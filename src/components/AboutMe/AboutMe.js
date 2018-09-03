import React, { Component } from 'react'
import WOW from 'wow.js';
import { Animated } from 'react-animated-css';

import './AboutMe.css';
import avatar from '../../Assets/avatar.jpg';
import js from '../../Assets/js.png';
import htmlcss from '../../Assets/htmlCss.png';
import react from '../../Assets/react.png';
import bootstrap from '../../Assets/bootstrap.png';

export default class AboutMe extends Component {

  componentDidMount() {
    const wow = new WOW();
    console.log(wow);;
    wow.init();
  }

  render() {
    return (
      <div className="container">
        <div className="about wow slideInLeft" data-wow-delay="0.6s">
          <h3>Hello world!!!</h3>
          <img className="myAvatar" alt="Its Me" src={avatar} />
          <div>
            <p>
              My name is Tran Tuan Song and i am 22. I like to learn and build everything from scratch. Always try to catch up new technologies and want to become a professional developer in the furture. Looking for a suitable developer position with an exciting and innovative company that offers room for progression.
              </p>
          </div>
        </div>
        <div className="about wow slideInRight" data-wow-delay="0.6s">
          <div className="skills">
            <h3>I'm familiar with: </h3>
            <img src={js} alt="bootstrap" />
            <img src={bootstrap} alt="javascript" />
            <img src={react} alt="react" />
            <img src={htmlcss} alt="htmlcss" />
          </div>
        </div>
      </div>
    )
  }
}
