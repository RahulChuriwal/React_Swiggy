import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestrauntMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';

const RestaurantMenu = () => {

    const { resId } = useParams();

    const resInfo = useRestrauntMenu(resId);

    const [showIndex, setShowIndex] = useState(null);

    if (resInfo == null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage, avgRating } = resInfo?.cards[2]?.card?.card?.info;
    const { itemCards, title } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] == 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory')

    return (
        <div className='text-center'>
            <h1 className='font-bold my-6 text-2xl'>{name}</h1>
            <h3 className='font-bold my-4 text-lg'>{cuisines.join(", ")}</h3>
            {categories.map((category, index) => (
                <RestaurantCategory
                    key={category?.card?.card.title}
                    data={category?.card?.card}
                    showItems={index == showIndex ? true : false}
                    setShowIndex={() => setShowIndex(index)}
                />))}
        </div>
    )
}

export default RestaurantMenu
