import React, { Component } from 'react'
import ReactSiema from 'react-siema';
import { Animated } from 'react-animated-css';

import moviedb from '../../Assets/portfolio/moviedb.png';
import stripe from '../../Assets/portfolio/stripe.png';
import bussy from '../../Assets/portfolio/Bussy.png';
import giftedChat from '../../Assets/portfolio/giftedChat.png';
import minTweet from '../../Assets/portfolio/minTweet.PNG';
import OldPortfolio from '../../Assets/portfolio/OldPortfolio.PNG';
import color from '../../Assets/portfolio/color.PNG';
import blog from '../../Assets/portfolio/blog.PNG';
import TSArchitect from '../../Assets/portfolio/TSArchitect.PNG';

import './Portfolio.css';

export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        {
          name: 'Flexie/Flick',
          src: moviedb,
          description: '#React #ReactNative #moviedbAPI',
          github: 'https://github.com/tuansong/MyFlixie',
          showing: false
        },
        {
          name: 'S-payment',
          src: stripe,
          description: '#Payment #StripeApi #React',
          github: 'https://github.com/tuansong/MyStripeCentral',
          showing: false
        },
        {
          name: 'Bussy',
          src: 'https://images.unsplash.com/photo-1529341987681-6f1e13a54ba0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bbc32af5245544d51eb77d77f4ae76db&auto=format&fit=crop&w=1952&q=80',
          description: '#React #Redux',
          github: 'https://github.com/VuMinhHieu/Bussy/tree/master',
          showing: false
        },
        {
          name: 'iMess',
          src: giftedChat,
          description: '#giftedChat #ReactNative #ReactRouter',
          github: 'https://github.com/tuansong/iMess-RN',
          showing: false
        },
        {
          name: 'miniTweet',
          src: minTweet,
          description: '#React #ReactStrap',
          github: 'https://github.com/tuansong/mini-tweetbox',
          showing: false
        },
        {
          name: 'My old portfolio',
          src: OldPortfolio,
          description: '#HTML #CSS #Particle.js',
          github: 'https://tuansong.github.io/',
          showing: false
        },
        {
          name: 'Color game',
          src: color,
          description: '#JSonly',
          github: 'https://tuansong.github.io/colorGame/',
          showing: false
        },
        {
          name: 'Sample blog',
          src: blog,
          description: '#HTML #CSS #Bootstrap',
          github: 'https://tuansong.github.io/Blog_week2.github.io/#',
          showing: false
        },
        {
          name: 'TSArchitect',
          src: TSArchitect,
          description: '#HTML #CSS #Bootstrap',
          github: 'https://tuansong.github.io/ts_architect/',
          showing: false
        },
      ]
    }
  }

  render() {
    const imgs = this.state.images.map((img, i) => {
      return (
        <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
          <div class="flipper">
            <div class="front" style={{ background: `url(${img.src})` }}>
              <div className="pj-name"></div>
            </div>
            <div class="back">
              <h1>{img.name}</h1>
              <p>{img.description}</p>
              <a href={img.github} target="_blank"><i class="fab fa-github" style={{ fontSize: 40 }}></i></a>
            </div>
          </div>
        </div>
      )
    });
    return (
      <div className="img-container">
        <div className="wow zoomInDown" data-wow-delay="0.5s">
          {imgs}
        </div>
      </div>
    )
  }
}
