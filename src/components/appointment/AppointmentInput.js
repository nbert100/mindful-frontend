import React from "react";
import { connect } from "react-redux";
import { addAppointmentToClient } from "../../actions/addAppointmentToClient";
import { Form } from "react-bootstrap";

class AppointmentInput extends React.Component {
  state = {
    when: "",
    kind: "Initial",
    provyder_id: "",
    client_id: this.props.client.id
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addAppointmentToClient(this.state, this.props.client.id);
    this.setState({
      when: "",
      kind: "",
      provyder_id: "",
      client_id: this.props.client.id
    });
  };

  render() {
    return (
      <div className="appointment-form-container">
        <form onSubmit={this.handleSubmit}>
          <label>Provider:</label>
          <select
            name="provyder_id"
            value={this.state.provyder_id}
            onChange={this.handleChange}
            required
          >
            <option value="" selected disabled hidden>
              Select Provider
            </option>
            {this.props.provyders.map(provider => {
              return (
                <option value={provider.id}>
                  {provider.first_name} {provider.last_name} {provider.title}
                </option>
              );
            })}
          </select>
          <label> Date and Time: </label>
          <input
            type="datetime-local"
            name="when"
            value={this.state.when}
            onChange={this.handleChange}
          />
          <label> Type of Appointment: </label>
          <select
            name="kind"
            value={this.state.kind}
            onChange={this.handleChange}
          >
            <option>Initial</option>
            <option>Routine</option>
          </select>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    provyders: state.provyders
  };
};

export default connect(mapStateToProps, { addAppointmentToClient })(
  AppointmentInput
);
