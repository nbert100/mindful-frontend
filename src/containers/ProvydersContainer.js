//render other components and pass them data if they require data
//also have other functions inside of them
//typically are class components because they typically need state
//class component must have a render

import React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
// import { fetchProvyders } from "../actions/fetchProvyders";
import Provyders from "../components/provyder/Provyders";
import ProvyderInput from "../components/provyder/ProvyderInput";
import Provyder from "../components/provyder/Provyder";

class ProvydersContainer extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.provyders.length > 0 ? (
          <Switch>
            <Route path="/provyders/new" component={ProvyderInput} />
            <Route
              path="/provyders/:id"
              render={routerProps => (
                <Provyder {...routerProps} provyders={this.props.provyders} />
              )}
            />
            <Route
              exact
              path="/provyders"
              render={routerProps => (
                <Provyders {...routerProps} provyders={this.props.provyders} />
              )}
            />
          </Switch>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    provyders: state.provyders
  };
};

export default connect(mapStateToProps)(ProvydersContainer);
