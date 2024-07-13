/**
 * <div id="parent">
 *      <div id="child">
 *          <h1></h1>
 *          <h2></h2>
 *      </div>
 * </div>
 */ const parent = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, [
    React.createElement("h1", {}, "H1 Tag"),
    React.createElement("h2", {}, "H2 Tag")
]));
// const heading = React.createElement("h1", { id: "hd" }, "Welcome to React!!!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=index.6bd02f5a.js.map
