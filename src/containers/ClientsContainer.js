//this is where we render the components
//will contain other components for our clients
//if we want to fetch the accounts from our backend and use those accounts from our backend
//how do we do that? connect to store
// to see something we mapstatetoprops
//set up nested route within clientscontainer
import React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { fetchClients } from "../actions/fetchClients";
import Clients from "../components/client/Clients";
import ClientInput from "../components/client/ClientInput";
import Client from "../components/client/Client";

class ClientsContainer extends React.Component {
  componentDidMount() {
    this.props.fetchClients();
  }

  render() {
    return (
      <div>
        {this.props.clients.length > 0 ? (
          <Switch>
            <Route exact path="/clients/new" component={ClientInput} />
            <Route
              path="/clients/:id"
              render={() => (
                <Client
                  clients={this.props.clients}
                  provyders={this.props.provyders}
                />
              )}
            />
            <Route
              exact
              path="/clients"
              render={() => <Clients clients={this.props.clients} />}
            />
          </Switch>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
}

//give this component access through props to the clients inside our state
const mapStateToProps = (state) => {
  return {
    clients: state.clients,
    provyders: state.provyders,
  };
};

export default connect(mapStateToProps, { fetchClients })(ClientsContainer);
