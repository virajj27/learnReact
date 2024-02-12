import { Component } from "react";
import UserClass from "./userClass";
import UserContext from "../utils/UserContext";
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
        <div>
          loggedInUser:
          <UserContext.Consumer>
            {({ loggedInUser }) => {
              return <h1 className="font-bold">{loggedInUser}</h1>;
            }}
          </UserContext.Consumer>
        </div>
        <h2>this is the about us section</h2>
        <UserClass
          location={"navi mumbai"}
          contact={"virajpadale27@gmail.com"}
        />
      </div>
    );
  }
}

export default About;
