import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [btnNameReact, setbtnNameReact] = useState("Login");

    const onlineStatus = useOnlineStatus();

    const data = useContext(UserContext);

    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className="flex justify-between bg-pink-100 shadow-lg m-2">
            <div className="logo-cont">
                <img className="p-4 m-4 w-36"
                    src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className=" px-4">
                        Online Status:{onlineStatus ? "✅" : "🔴"}
                    </li>
                    <li className=" px-4">
                        <Link className="font-bold hover:text-red-600 shadow-inner" to="/" >Home</Link>
                    </li>
                    <li className=" px-4">
                        <Link className="font-bold hover:text-red-600 shadow-inner" to="/about" >About Us</Link>
                    </li>
                    <li className=" px-4">
                        <Link className="font-bold hover:text-red-600 shadow-inner" to="/contact" >Contact</Link>
                    </li>
                    <li className=" px-4 ">
                        <Link className="font-bold hover:text-red-600 shadow-inner" to="/grocery" >Grocery</Link>
                    </li>
                    <li className=" px-4 ">
                        <Link className="font-bold hover:text-red-600 shadow-inner" to="/cart" >Cart - ({cartItems.length} Items)</Link>
                    </li>
                    <button className="px-4 bg-green-100 rounded-lg font-bold shadow-xl" onClick={() => { btnNameReact == "Login" ? setbtnNameReact("Logout") : setbtnNameReact("Login") }}>{btnNameReact}</button>
                    <li className="px-4 font-bold">{data.loggedInUser}</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;