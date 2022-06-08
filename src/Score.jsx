import React, { Component } from 'react'

class Score extends Component{
    render(){
        return(
            <>
            <p>Date: {this.props.date}</p>
            <p>Score: {this.props.score}</p>
            </>
        )
    }
}

export default Score