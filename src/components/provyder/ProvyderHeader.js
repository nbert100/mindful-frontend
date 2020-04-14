import React from "react";

class ProvyderHeader extends React.Component {
  state = {
    likes: 0,
  };

  handleClick = () => {
    this.setState({
      likes: this.state.likes + 1,
    });
  };

  render() {
    return (
      <li>
        {/* {this.props.provyder.first_name} {this.props.provyder.last_name},{" "}
        {this.props.provyder.title}{" "} */}
        <button onClick={this.handleClick}>Like </button>
        <p>Likes: {this.state.likes}</p>
      </li>
    );
  }
}

export default ProvyderHeader;
