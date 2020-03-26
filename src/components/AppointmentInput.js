import React from "react";
import { connect } from "react-redux";
import { addAppointment } from "../actions/addAppointment";

class AppointmentInput extends React.Component {
  state = {
    when: "",
    kind: "",
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
    this.props.addAppointment(this.state, this.props.client.id);
    this.setState({
      when: "",
      kind: "Initial",
      provyder_id: "",
      client_id: this.props.client.id
    });
  };

  render() {
    return (
      <div>
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
            {this.props.providers.map(provider => {
              return <option value={provider.id}>{provider.first_name}</option>;
            })}
          </select>
          <label>When:</label>
          <input
            type="datetime-local"
            name="when"
            value={this.state.when}
            onChange={this.handleChange}
          />
          <label>Type of Appointment:</label>
          <select
            name="kind"
            value={this.state.kind}
            onChange={this.handleChange}
          >
            <option>Initial</option>
            <option>Routine</option>
          </select>
          {/* <div id="provyder-search">

                    </div> */}
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default connect(null, { addAppointment })(AppointmentInput);
