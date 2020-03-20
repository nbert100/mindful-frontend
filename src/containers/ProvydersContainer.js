//render other components and pass them data if they require data
//also have other functions inside of them
//typically are class components because they typically need state
//class component must have a render

import React from 'react'
import ProvyderInput from '../components/ProvyderInput'
import Provyders from '../components/Provyders'

class ProvydersContainer extends React.Component {

    render() {
        return (
            <div>
                <ProvyderInput />
                <Provyders provyders={this.props.client && this.props.client.provyders}/>
            </div>
        )
    }
}

export default ProvydersContainer