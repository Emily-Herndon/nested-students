import React, { Component } from 'react'
import Student from './Student.jsx'

class Roster extends Component{
    render(){
        const studentComponents = this.props.students.map((student, index) => {
            return (
                <Student 
                key={`Student-${index}`}
                name={student.name}
                bio={student.bio}
                scores={student.scores}
                />
            )
        })
        return(
           <>
            <h1>Roster</h1>

            {studentComponents}
            </>
        )
    }
}

export default Roster