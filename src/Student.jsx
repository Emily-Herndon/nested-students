import React, { Component } from 'react'
import Score from './Score.jsx'

class Student extends Component{
    render(){
        const scoreComponents = this.props.scores.map((score, index) => {
            return(
                <Score
                key={`Score-${index}`}
                date={score.date}
                score={score.score}
                />
            )
        })
        return(
            <>
            <h2>{this.props.name}</h2>
            <h3>{this.props.bio}</h3>

            {scoreComponents}
            </>
         )
    }
}

export default Student