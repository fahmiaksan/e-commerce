import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { formatPrice } from '../../utils/helpers';
import { clearCart, getCartTotal, removeFromCart, toggleCartQty } from '../../store/CartSlice';
export const CartPage = () => {
    const dispatch = useDispatch();
    const { data: cartProducts, totalItems, totalAmount, deliveryCharge } = useSelector((state) => state.cart);
    useEffect(() => {
        dispatch(getCartTotal());
    }, [useSelector(state => state.cart)]);
    const emptyCartMsg = <h4 className='text-red-500 text-2xl'>No Item Found</h4>
    return (
        <div>
            <div>
                <div className='lg:px-28 sm:px-16 hp:px-12 py-3'>
                    <ul className='flex space-x-2 '>
                        <li>
                            <Link to="/">
                                <i className='fas fa-home mr-2 text-slate-600'>
                                    <span>
                                        <i className='fas fa-chevron-right ml-2 text-slate-600'></i>
                                    </span>
                                </i>
                            </Link>
                        </li>
                        <li>
                            Cart
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <div className='bg-slate-600/20 sm:px-16 hp:px-12 py-3'>
                    <div>
                        <div className='py-10'>
                            <h3 className='text-blue-950 text-3xl font-semibold tracking-wider'>
                                MY CART
                            </h3>
                        </div>
                        <div className='lg:grid lg:grid-cols-2 block'>
                            {
                                cartProducts.length === 0 ? emptyCartMsg : (
                                    <div>
                                        <div>
                                            <div className='w-full lg:px-4'>
                                                {
                                                    cartProducts.map(cartProduct => (
                                                        <div key={cartProduct.id} className='flex gap-7 w-full relative pb-7 border-b-slate-800 border-b mb-5'>
                                                            <div className='flex flex-col justify-center items-center bg-white/95'>
                                                                <img src={cartProduct.images[0]} alt={cartProduct.title} className='h-48 w-48 lg:w-32 lg:h-32' />
                                                                <button type='submit' onClick={() => dispatch(removeFromCart(cartProduct.id))}>
                                                                    <span><i className='fas fa-trash'></i></span>
                                                                </button>
                                                            </div>
                                                            <div className='text-slate-500 space-y-4'>

                                                                <h6>
                                                                    {cartProduct.title}
                                                                </h6>

                                                                <div className='text-slate-500'>
                                                                    <span>Qty : </span>
                                                                    <button onClick={() => dispatch(toggleCartQty({ id: cartProduct.id, type: "DEC" }))}>
                                                                        <i className='fas fa-minus text-slate-500'></i>
                                                                    </button>
                                                                    <span>{cartProduct.quantity}</span>
                                                                    <button onClick={() => dispatch(toggleCartQty({ id: cartProduct.id, type: "INC" }))}>
                                                                        <i className='fas fa-plus text-slate-500'></i>
                                                                    </button>
                                                                </div>

                                                                <div>
                                                                    <div>
                                                                        Price: {formatPrice(cartProduct.price)}
                                                                    </div>
                                                                    <div className='text-blue-950 absolute right-0 '>
                                                                        <span>
                                                                            Sub Total :
                                                                        </span>
                                                                        <span>{formatPrice(cartProduct.totalPrice)}</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                        <div className='px-2 cursor-pointer rounded-lg py-1 bg-red-400 text-lg w-28' onClick={() => dispatch(clearCart())}>
                                            <span>
                                                Clear Cart
                                            </span>
                                        </div>
                                    </div>
                                )
                            }


                            <div className='bg-white/80 lg:mt-0 mt-10 mb-10 text-slate-600 px-6 py-3 font-medium'>
                                <h6 className='border-b text-2xl border-b-slate-700 pb-[4px]'>Order Summary</h6>
                                <div className='text-base mt-5 border-b border-b-slate-700 pb-24'>
                                    <ul className='space-y-2 '>
                                        <li className='flex justify-between'>
                                            <span className='text-base'>selected {totalItems} item(s) price</span>
                                            <span className='font-bold text-lg'>{formatPrice(totalAmount)}</span>
                                        </li>
                                        <li className='flex justify-between'>
                                            <span className='text-base'>Discount</span>
                                            <span className='font-bold text-lg'>
                                                <span>-&nbsp;</span>
                                                {formatPrice(0)}
                                            </span>
                                        </li>
                                        <li className='flex justify-between'>
                                            <span className='text-base'>DeliveryCost</span>
                                            <span className='font-bold text-lg'>
                                                <span>+&nbsp;</span>
                                                {formatPrice(deliveryCharge)}
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div className='flex justify-between mb-2'>
                                    <span className='text-2xl font-medium'>Grand Total:</span>
                                    <span className='text-2xl font-medium'>{formatPrice(totalAmount + deliveryCharge)}</span>
                                </div>
                                <div className=' rounded-lg py-2 bg-yellow-300 text-xl px-3 text-white/80 text-center'>
                                    <button type='button'>Procesed to Checkout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
