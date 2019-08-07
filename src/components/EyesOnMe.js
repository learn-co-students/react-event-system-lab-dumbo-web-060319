import React, { Component } from 'react';


export default class EyesOnMe extends Component {

  foucsOnMe = () => {
    console.log('Good!')
  }
  
  blurOnMe = () => {
    console.log('Hey! Eyes on me!')
  }

  render() {
    return (
      <div>
        <button type="button" onFocus={this.foucsOnMe} onBlur={this.blurOnMe}>Focus</button>
      </div>
    )
  }
}