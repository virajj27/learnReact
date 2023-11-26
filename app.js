import React from "react";
import ReactDOM from "react-dom";
const heading = React.createElement("h1", {}, "react code using createElement");
const jsxheading = <h1>react code using jsx syntax!</h1>; //a react element

// const fn=()=>true   === const fn=()=>{return true} KEEP NOTE OF THIS
const root = ReactDOM.createRoot(document.getElementById("root"));

//functional components
const Title = () => <h1>this is the title</h1>;

const FunctionalHeader = () => (
  <div>
    {/* {Title()}  */}
    <Title />
    <h1 className="heading">react code using functional component</h1>
  </div>
);
// root.render(heading);
//root.render(<FunctionalHeader/>) this is how babel understands this syntax is to be rendered
root.render(<FunctionalHeader />); //replacing the code inside root div in html
