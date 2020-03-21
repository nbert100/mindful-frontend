import React from 'react'
// import { Provyder } from 'react-redux'
import { Route, Link } from 'react-router-dom'


const Provyders = (props) => {
    
    return (
        <div>
           {props.provyders.map(provyder =>
            <li key={provyder.id}>
                <Link to={`/provyders/${provyder.id}`}>
                    {provyder.first_name} {provyder.last_name}, {provyder.title} 
                </Link>
            </li>)} 
        </div>
        
    )
 }

export default Provyders