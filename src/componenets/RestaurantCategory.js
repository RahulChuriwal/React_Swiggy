import React, { useState } from 'react'
import ItemList from './ItemList'

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {

  const [show, setshow] = useState(false);

  const handleClick = () => {
    setShowIndex();
    setshow(!show);
  };

  return (
    <div className='w-6/12 mx-auto my-4 shadow-md rounded-lg'>
      <div className=' bg-gray-100 shadow-lg p-4 flex justify-between cursor-pointer' onClick={handleClick}>
        <span className='font-bold text=lg'>{data.title} ({data.itemCards.length})</span>
        <span className='font-extrabold text=2xl'>⬇️</span>
      </div>
      <div className="bg-gray-50 my-2">
        {show && showItems && <ItemList items={data.itemCards}></ItemList>}
      </div>
    </div>
  )
}

export default RestaurantCategory
