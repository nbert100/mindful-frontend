import React from 'react';

import ClientsContainer from './containers/ClientsContainer'

class App extends React.Component {

  // componentDidMount() {
  //   this.props.fetchClients()
  // }

  render() {
    return (
      <div className="App">
        <ClientsContainer />
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

export default App;
//we don't care about seeing the state. we just care about updating it