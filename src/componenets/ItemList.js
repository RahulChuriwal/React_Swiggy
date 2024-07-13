import React from 'react'
import { CDN_URL } from '../utils/constants'
import { useDispatch } from "react-redux";
import { addItem } from '../utils/cartSlice';

const ItemList = ({ items }) => {

    const dispatch = useDispatch();

    const handleAddItems = (item) => {
        dispatch(addItem(item));
    }

    return (
        <div>
            {items.map(item => (
                <div 
                data-testid="fooditems"
                key={items?.card?.info?.id} className='p-2 m-2 border-b-2 text-left flex justify-between'>
                    <div className='w-9/12'>
                        <div className='py-2 my-1 font-mono'>
                            <span>{item.card.info.name}</span><br />
                            <span className=' font-sans text-sm'>₹{item.card.info.price / 100}</span>
                        </div>
                        <p className='text-xs'>
                            {item.card.info.description}
                        </p>
                    </div>
                    <div className='w-4/12 p-4'>
                        <div className='absolute'>
                            <button
                                className='p-2 ml-24 mt-32 bg-white shadow-xl m-2 rounded-md hover:bg-gray-100 text-green-400category?.card?.cardcategory?.card?.card'
                                onClick={() => handleAddItems(item)}>
                                Add +
                            </button>
                        </div>
                        <img className="w-40 h-40 rounded-lg shadow-lg" src={CDN_URL + item.card.info.imageId} />
                    </div>
                </div>
            ))
            }
        </div >
    )
}

export default ItemList
