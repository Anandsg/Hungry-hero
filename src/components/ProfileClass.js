import React from "react";
class Profile extends React.Component {
  // creating a state
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy name",
        location: "dummy loc",
      },
    };
    console.log("child constructor"); // 3rd this will be called
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Anandsg");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
    // Best place to make API calls
    console.log("child componentdidamout"); // 5th this will be called
  }
  render() {
    console.log("child render"); // 4th this will be called
    return (
      <div>
        <h2>This is my profile class component</h2>
        <img src={this.state.userInfo.avatar_url} />
        <h2>Name : {this.state.userInfo.name}</h2>
        <h2>location : {this.state.userInfo.location}</h2>
      </div>
    );
  }
}

export default Profile;
