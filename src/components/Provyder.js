//kinda the show page

import React from 'react'
import {Redirect} from 'react-router-dom'

const Provyder = (props) => {
    let provyder = props.provyders.filter(provyder => provyder.id == props.match.params.id)[0]

    return (
        <div>
            <h2>
                {provyder ? null : <Redirect to='/provyders' />}
                {provyder ? provyder.first_name : null} {provyder ? provyder.last_name : null}, {provyder ? provyder.title : null}
            </h2>
        </div>
    )
}