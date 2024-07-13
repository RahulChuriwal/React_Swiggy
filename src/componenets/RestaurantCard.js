import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;

    const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId, } = resData?.info;
    return (
        <div data-testid="resCards"
            className="m-2 p-4 w-[236px] h-auto bg-gray-200 rounded-lg hover:bg-gray-300">
            <img className="res-logo rounded-xl h-[150px] w-[236px] " src={CDN_URL + cloudinaryImageId} />
            <h3 className="font-bold py-3 text-lg">{name}</h3>
            <h4 className="font-mono">{cuisines.join(", ")}</h4>
            <h4 className="font-mono">{costForTwo}</h4>
            <h4 className="font-mono">{sla?.slaString}</h4>
            <h4 className="font-serif text-green-600">{avgRating} stars</h4>
        </div>
    )
}

export default RestaurantCard;