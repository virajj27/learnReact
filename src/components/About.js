import { Component } from "react";
import UserClass from "./userClass";
class About extends Component {
  constructor(props) {
    super(props);
    console.log("parent constructor called");
  }
  componentDidMount() {
    console.log("parent component mounted");
  }
  render() {
    console.log("parent render called");
    return (
      <div>
        <h1>About</h1>
        <h2>this is the about us section</h2>
        <UserClass
          name={"viraj padale"}
          location={"navi mumbai"}
          contact={"virajpadale27@gmail.com"}
        />
      </div>
    );
  }
}

export default About;
