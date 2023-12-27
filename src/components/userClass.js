import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("child constructor called");
    this.state = {
      userInfo: {
        name: "dummy",
        location: "pune",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/virajj27");
    const json = await data.json();
    console.log(json);
    this.setState({ userInfo: json });
  }
  render() {
    console.log("child render called");
    const { location, contact } = this.props;
    const { name } = this.state.userInfo;
    return (
      <div>
        <h2>name:{name}</h2>
        <h2>Location:{location}</h2>
        <h2>contact:{contact}</h2>
      </div>
    );
  }
}
export default UserClass;
