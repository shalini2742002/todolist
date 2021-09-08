import React from 'react'

function Lists() {
    
    const persons=[
    {
       id:1,
       age:5
    },
    {
        id:2,
        age:10
    },
    {
        id:3,
        age:15
    },
    {
        id:4,
        age:20
    }
    ]
    const personsList = persons.map(person => <h1>{person.id} age is {person.age}</h1>)
    return (
        <div>
            {
               personsList
               
            }
        </div>
    )
}

export default Lists
