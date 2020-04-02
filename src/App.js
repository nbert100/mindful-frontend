import React from "react";

import ClientsContainer from "./containers/ClientsContainer";
import ProvydersContainer from "./containers/ProvydersContainer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Navigation } from "./components/Navigation";
import { fetchProvyders } from "./actions/fetchProvyders";
import { connect } from "react-redux";
class App extends React.Component {
  componentDidMount() {
    this.props.fetchProvyders();
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Navigation />
          <h2 className="m-3 d-flex justify-content-center">Mindful</h2>
          <Switch>
            <Route path="/clients" component={ClientsContainer} />
            <Route path="/provyders" component={ProvydersContainer} />
          </Switch>
        </Router>
      </div>
    );
  }
}

//mapstatetoprops is the way of accessing values in our store as props
// const mapStateToProps = (state) => {
//   return (
//     clients: state.clients
//   )
// }

export default connect(null, { fetchProvyders })(App);
//we don't care about seeing the state. we just care about updating it
