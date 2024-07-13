import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemList from './ItemList';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = (item) => {
        dispatch(clearCart());
    }

    return (
        <div className='text-center m-4 p-4 '>
            <h1 className='text-2xl font-bold font-serif'>Cart</h1>
            <div className='w-6/12 m-auto p-4'>
                <ItemList items={cartItems} />
            </div>
            {cartItems.length == 0 && <h1 className='mx-4 p-4 font-semibold '>Cart is Empty!!</h1>}
            <button className='px-4 py-2 bg-green-100 m-2 rounded-lg font-bold font-serif shadow-xl hover:bg-black hover:text-white'
                onClick={handleClearCart}>
                Clear Cart
            </button>
        </div>
    )
}

export default Cart
