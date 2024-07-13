import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer.js";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Body = () => {

    const [listres, setlistres] = useState([]);
    const [filterlistres, setfilterlistres] = useState([]);

    const [searchText, setsearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.3567316&lng=85.8201246&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();

        setlistres(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilterlistres(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);


    };

    const onlineStatus = useOnlineStatus();

    if (onlineStatus == false) {
        return <h1>Looks Like you are Offline!! Please Check Your internet connection</h1>
    }

    const { loggedInUser, setuserName } = useContext(UserContext);

    if (listres.length == 0) {
        return <Shimmer />;
    }

    return (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input data-testid="searchInput"
                        type="text" className="search-box border m-4 px-2 border-black font-serif"
                        value={searchText}
                        onChange={(e) => { setsearchText(e.target.value) }} />
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg font-bold font-serif"
                        onClick={() => {
                            const filtered = listres.filter(
                                (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setfilterlistres(filtered);
                        }}>Search</button>
                </div>
                <div className="m-4 p-4 flex align-center">
                    <button data-testid="top" className="px-4 py-2 bg-green-100 m-4  rounded-lg font-bold font-serif"
                        onClick={() => {
                            const filtered = listres.filter(
                                (res) => res.info.avgRating > 4
                            );
                            setfilterlistres(filtered);
                        }}>
                        Top-Rated-Restaurant
                    </button>
                </div>
                <div className="m-4 p-4 flex items-center font-serif">
                    <label className="font-bold">User:  </label>
                    <input
                        className=" m-4 pl-2 border border-black"
                        value={loggedInUser}
                        onChange={(e) => setuserName(e.target.value)} />
                </div>
            </div>
            <div className="flex flex-wrap">
                {
                    filterlistres.map((restaurant) =>
                        (<Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}><RestaurantCard key={restaurant.info.id} resData={restaurant} /></Link>))}
            </div>
        </div>
    )
}

export default Body;