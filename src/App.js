import React from "react";
import "./App.css";
import ClientsContainer from "./containers/ClientsContainer";
import ProvydersContainer from "./containers/ProvydersContainer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";

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
          <Header />
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/clients" component={ClientsContainer} />
            <Route path="/provyders" component={ProvydersContainer} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default connect(null, { fetchProvyders })(App);

