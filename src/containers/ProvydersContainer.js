//render other components and pass them data if they require data
//also have other functions inside of them
//typically are class components because they typically need state
//class component must have a render

import React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { fetchProvyders } from "../actions/fetchProvyders";
import Provyders from "../components/Provyders";
import ProvyderInput from "../components/ProvyderInput";
import Provyder from "../components/Provyder";

class ProvydersContainer extends React.Component {
  componentDidMount() {
    this.props.fetchProvyders();
  }

  render() {
    console.log(this.props);
    return (
      <div>
        {/* {this.props.provyders.provyders.length > 0 ? ( */}
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
        {/* // ) : ( // <p>Loading...</p>
        // )} */}
        {/* <ProvyderInput /> */}
        {/* <ProvyderInput client={this.props.client}/> */}
        {/* <Provyders provyders={this.props.client && this.props.client.provyders}/> */}
        {/* <Provyders provyders={this.props.provyders} /> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    provyders: state.provyders
  };
};

export default connect(mapStateToProps, { fetchProvyders })(ProvydersContainer);
