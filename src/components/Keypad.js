import React, { Component } from 'react'

class Keypad extends Component {
  
  password = () => {
    console.log('Entering password...')
  }

  render() {
    return (
      <div>
        <input onKeyUp={this.password} type="password" />
      </div>
    )
  }
}

export default Keypad

