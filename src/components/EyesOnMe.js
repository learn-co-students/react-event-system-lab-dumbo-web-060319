// Code EyesOnMe Component Here
import React, { Component } from 'react';

export default class EyesOnMe extends Component {

    firstEvent = () => {
        console.log("Good!")
    }

    secondEvent = () => {
        console.log("Hey! Eyes on me!")
    }

    render () {
        return (
            <button onFocus={this.firstEvent} onBlur={this.secondEvent}>

            </button>
        )
    }
}