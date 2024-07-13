import { useState } from "react";

const User = (props) => {
    const [count] = useState(0);
    return (<div className="user-card">
        <h1>Count = {count}</h1>
        <h2>Name: {props.name}</h2>
        <h3>Location: Howrah</h3>
        <h4>Contact: rahulchuriwal7@gmail.com</h4>
    </div>);
}

export default User;