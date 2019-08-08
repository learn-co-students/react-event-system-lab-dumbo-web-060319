// Code EyesOnMe Component Here


import React, { Component } from 'react';

export default class EyesOnMe extends Component {

  blurFunction = () => {
    console.log('Hey! Eyes on me!')
  }

  focusFunction = () => {
    console.log('Good!')
  }

  render () {
    return (<button onBlur={this.blurFunction} onFocus={this.focusFunction}>2pac: all eyez on me</button>)
  }

}