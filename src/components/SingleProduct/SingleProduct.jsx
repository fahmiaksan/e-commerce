import React, { useState } from 'react';
import { formatPrice } from '../../utils/helpers';
import { useSelector, useDispatch } from 'react-redux';
import { setIsModalVisible } from '../../store/ModalSlice';
import { addToCart } from '../../store/CartSlice';
import { useNavigate } from 'react-router-dom';

const SingleProduct = () => {
    const { data: product } = useSelector(state => state.modal);
    const [qty, setQty] = useState(1);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const increase = () => {
        setQty(prevQty => {
            let newQty = prevQty + 1;
            return newQty
        });
    }

    const decrease = () => {
        setQty(prevQty => {
            let newQty = prevQty - 1;
            if (newQty < 1) {
                newQty = 1;
            }
            return newQty;
        });
    }
    const addToCartHandler = (product) => {
        let totalPrice = qty * product.price;
        const tempProduct = {
            ...product,
            quantity: qty,
            totalPrice
        }
        dispatch(addToCart(tempProduct));
        dispatch(setIsModalVisible(false));
        navigate("/cart");
    }
    return (
        <section className='flex z-50 items-center bg-black/30 justify-center fixed left-0 top-0 right-0 w-full h-full'>
            <div className='w-3/5 lg:flex sm:block p-8 bg-white fixed space-x-4'>

                {/* details left */}
                <div className=''>
                    <div className='flex items-end'>
                        <img src={product.images[0]} alt={product.title} className='h-72 w-96' />
                    </div>
                </div>
                {/* details right */}
                <div>
                    <div className='flex justify-between flex-col space-y-5'>
                        <h3 className='text-blue-950 font-semibold text-2xl tracking-wide'>{product.title}</h3>
                        <p className='text-slate-500'>{product.description}</p>
                        <div className='text-3xl border-b-slate-500 text-blue-950 font-semibold'>Price : {formatPrice(product.price)}
                            <hr className='mt-4' />
                        </div>
                        <div>
                            <span>Qty : </span>
                            <button onClick={() => decrease()}>
                                <i className='fas fa-minus'></i>
                            </button>
                            <span>{qty}</span>
                            <button onClick={() => increase()}>
                                <i className='fas fa-plus'></i>
                            </button>
                        </div>

                        <button className='space-x-2 py-2 px-3 text-white  flex bg-blue-900 items-center justify-center rounded-lg w-48' onClick={() => addToCartHandler(product)}>
                            <span>
                                <i className='fas fa-cart-shopping'></i>
                            </span>
                            <span className='text-xl'>
                                Add To Cart
                            </span>
                        </button>
                    </div>
                </div>
                <button onClick={() => dispatch(setIsModalVisible(false))} className='absolute right-0 top-0 translate-x-1 -translate-y-2 bg-black py-[4px] px-2 rounded-full flex justify-end'>
                    <i className='fas fa-times text-white'></i>
                </button>
            </div>
        </section>
    )
}

export default SingleProduct;