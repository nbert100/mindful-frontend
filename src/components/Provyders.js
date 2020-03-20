import React from 'react'


const Provyders = (props) => {
    
        return (
           <div>
               {props.provyders && props.provyders.map(provyder =>
               <li key={provyder.id}>
                   {provyder.first_name} {provyder.last_name}, {provyder.title} - {provyder.specialty}
                </li> 
                )}
           </div> 
        )
    }

export default Provyders