/**
 * <div id="parent">
 *      <div id="child">
 *          <h1></h1>
 *          <h2></h2>
 *      </div>
 * </div>
 */

/*
const parent =
React.createElement("div",
        { id: "parent" },
        React.createElement("div",
            { id: "child" },
            [React.createElement("h1", {}, "H1 this Tag"),
            React.createElement("h2", {}, "H2 Tag")]
        ) 
    );
    
// const heading = React.createElement("h1", { id: "hd" }, "Welcome to React!!!🚀");

*/

import React from "react";
import ReactDOM from "react-dom/client";

// JSX - is not HTML in JS(is like html)
// React Element
const jsxHeading = (
    <h1 id="hd" className="head">
        React using JSX 🚀🚀
    </h1>
);

// const HeadingComponent=()=>{
//     return <h1>React Functional Component 🧑‍💻</h1>
// } same as below done

const Title = () => (
    <h1>React Functional Component Title🧑‍💻</h1>
)
// React Functional Component
const HeadingComponent = () => (
    <div>
        {jsxHeading}
        {Title()}
        <Title />
        <Title></Title>
        <h1>React Functional Component 🧑‍💻</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
root.render(<HeadingComponent />);
