import React from "react";

class Provyder extends React.Component {
  state = {
    likes: 0,
  };

  handleClick = () => {
    this.setState({
      likes: this.state.likes + 1,
    });
  };

  render() {
    const provyder = this.props.provyders.find(
      (provyder) => provyder.id == this.props.match.params.id
    );

    const formatPhone = (phone) => {
      phone = provyder.phone.replace(/[^\d]/g, "");
      if (phone.length == 10) {
        return phone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
      } else {
        return <p>No phone number</p>;
      }
    };

    return (
      <div>
        <div>
          <h3>
            {provyder.first_name} {provyder.last_name}, {provyder.title} -{" "}
            {provyder.specialty}
          </h3>
          <button onClick={this.handleClick}>Like</button>
          <br></br>
          <p>Likes: {this.state.likes}</p>
          <h5>Contact Information:</h5>
          <p>Phone Number: {formatPhone(provyder.phone)}</p>
          <p>Fax Number: {formatPhone(provyder.fax)}</p>
          <p>
            Address: {provyder.address} {provyder.zipcode}
          </p>
        </div>
      </div>
    );
  }
}
export default Provyder;
