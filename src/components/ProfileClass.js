import React from "react";

class Profile extends React.Component {
  // creating a state
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div>
        <h2>This is my profile class component</h2>
        <h2>Name : {this.props.name}</h2>
        <h2>Count : {this.state.count}</h2>
        <button
          onClick={() => {
            this.setState({ count: 1 });
          }}
        >Set count</button>
      </div>
    );
  }
}

export default Profile;
