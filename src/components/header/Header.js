import React, { Component } from 'react'
import banner from '../../Assets/background.jpg';
import { Route, NavLink, Switch } from 'react-router-dom';

import './Header.css';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';


export default class Header extends Component {

  constructor (props) {
    super(props);
    this.state = {
      buttonList: [
        {
          name:'About Me',
          path:'/',
          animated : false,
        },
        {
          name:'Portfolio',
          path:'/Portfolio',
          animated : false,
        },
        {
          name:'More info',
          path:'/Contact',
          animated : false,
        }
      ]
    }
  }

  hoverHandler = (i) => {
    let cloneBtns = this.state.buttonList;
    cloneBtns[i].animated = !cloneBtns[i].animated;
    this.setState({
      buttonList : cloneBtns
    });
  }

  render() {
    const defaultBtnClass = "nav-btn"
    const buttons = this.state.buttonList.map( (btn, i) => {
      return <a key={i} className={btn.animated ? "bounce" : ""} 
        onMouseEnter={() => this.hoverHandler(i)} 
        onMouseLeave={() => this.hoverHandler(i)}
        ><NavLink className={defaultBtnClass} exact to={btn.path}>{btn.name}</NavLink></a>
    });
    return (
      <div className="header">
        <img src={banner} alt="banner"/>
        <h1 className="banner-title bounce">TusoTR's</h1>
        <div className="navbar">
          {buttons}
        </div>
        <Switch>
          <Route path="/" exact component={AboutMe}/>
          <Route path="/Portfolio" exact component={Portfolio}/>
          <Route path="/Contact" exact component={Contact}/>
        </Switch>
      </div>
    )
  }
}
