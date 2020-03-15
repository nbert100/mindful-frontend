import React from 'react';
import {connect} from 'react-redux'
import {fetchClients} from './actions/fetchClients'

class App extends React.Component {

  componentDidMount() {
    
  }

  render() {
    return (
      <div className="App">
      App
      </div>
      )
  }
}

//mapstatetoprops is the way of accessing values in our store as props
// const mapStateToProps = (state) => {
//   return (
//     clients: state.clients
//   )
// }

export default connect(null, {fetchClients}) (App);
