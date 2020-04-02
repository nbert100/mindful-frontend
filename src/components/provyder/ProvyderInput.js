import React from "react";
import { connect } from "react-redux";
import { addProvyder } from "../../actions/addProvyder";
// import { Redirect } from "react-router-dom";

class ProvyderInput extends React.Component {
  state = {
    first_name: "",
    last_name: "",
    title: "",
    specialty: "",
    phone: "",
    fax: "",
    address: "",
    zipcode: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addProvyder(this.state);
    this.setState({
      first_name: "",
      last_name: "",
      title: "",
      specialty: "",
      phone: "",
      fax: "",
      address: "",
      zipcode: ""
    });
    this.props.history.push("/provyders");
  };

  render() {
    return (
      <div className="provyder-form-container">
        <h4>New Provider:</h4>
        <br></br>
        <form onSubmit={this.handleSubmit}>
          <label>Provider:</label>
          <input
            type="text"
            placeholder="First Name"
            name="first_name"
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="Last Name"
            name="last_name"
            onChange={this.handleChange}
          />
          <br></br>
          <label>Title:</label>
          <select
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          >
            <option selected disabled hidden>
              Select One
            </option>
            <option>MD</option>
            <option>NP</option>
            <option>PA</option>
            <option>DO</option>
            <option>LMSW/LCSW/LMHC</option>
            <option>PhD/PsyD</option>
            <option>Other</option>
          </select>
          {/* <input type='text' placeholder="Title" name="title" value={this.state.title} onChange={this.handleChange} /> */}
          <br></br>
          <label>Specialty:</label>
          <input
            type="text"
            placeholder="Specialty"
            name="specialty"
            value={this.state.specialty}
            onChange={this.handleChange}
          />
          <br></br>
          <label>Phone:</label>
          <input
            type="tel"
            placeholder="Phone Number"
            name="phone"
            value={this.state.phone}
            onChange={this.handleChange}
          />
          <br></br>
          <label>Fax:</label>
          <input
            type="tel"
            placeholder="Fax Number"
            name="fax"
            value={this.state.fax}
            onChange={this.handleChange}
          />
          <br></br>
          <label>Address:</label>
          <input
            type="text"
            placeholder="Address"
            name="address"
            value={this.state.address}
            onChange={this.handleChange}
          />
          <input
            type="number"
            placeholder="Zip Code"
            name="zipcode"
            value={this.state.zipcode}
            onChange={this.handleChange}
          />
          <br></br>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default connect(null, { addProvyder })(ProvyderInput);
