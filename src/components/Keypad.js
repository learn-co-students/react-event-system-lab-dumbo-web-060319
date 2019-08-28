// Code Keypad Component Here
import React from 'react';
 class Keypad extends React.Component{
   keyUpEvent= () => {
 console.log('Entering password...')
   }
   render(){
     return(
      <div>
        Keypad
        <input type='password' onKeyUp={this.keyUpEvent}></input>
      </div>
     )
   }

 }
 export default Keypad
