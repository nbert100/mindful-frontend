import React from "react";
// import Provyder from "./Provyder";

import ProvyderList from "./ProvyderList";

const Provyders = (props) => {
  return (
    <div className="provyder-container">
      <h4>Providers:</h4>
      <br></br>
      <ProvyderList provyders={props.provyders} />
    </div>
  );
};

export default Provyders;
