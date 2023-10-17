import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../store/CategorySlice';
import { getCartTotal } from '../../store/CartSlice';
function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const { data: categories } = useSelector((state) => state.category);
    const { totalItems } = useSelector(state => state.cart);
    useEffect(() => {
        dispatch(fetchCategories());
        dispatch(getCartTotal());
    }, []);

    return (
        <nav className='w-full relative overflow-hidden'>
            <div className=''>
                <div className='flex flex-row py-4'>
                    <div className='flex justify-between w-full lg:px-16 hp:px-8 items-center '>
                        <Link to="/" className='md:text-3xl hp:text-2xl font-semibold'>
                            <span className='text-blue-700'>Shopping</span>
                            <span className='text-yellow-400'>Hub.</span>
                        </Link>

                        <form className='md:flex hp:hidden space-x-3 '>
                            <input type="text" placeholder='search..' className='focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-2 ring-1 ring-slate-200 shadow-sm duration-200' />
                            <button className='px-[10px] py-1 bg-yellow-400'>
                                <i className='fa fa-search'></i>
                            </button>
                        </form>

                        <div className='-translate-x-6 '>
                            <Link to="cart" className='flex relative '>
                                <span className='space-x-2'>
                                    <i className='fas fa-shopping-cart'></i>  cart
                                </span>
                                <div className='relative ml-1'>
                                    <span className='bg-yellow-400 py-1 px-[10px] rounded-full -translate-y-4 absolute'>{totalItems}</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className=' bg-blue-950 lg:px-16 hp:px-8 '>
                    <div className='sm:flex md:hidden '>
                        <ul className={`${isOpen ? "animate-wiggle " : "hide-sidebar"} fixed top-0 -right-48 h-screen bg-white z-50 pl-7 pr-60 py-5 flex flex-col shadow-2xl sm:w-4/6 hp:max-w-5xl border-l-slate-200`}>
                            <div className='flex justify-end'>
                                <i className='fas fa-times text-xl cursor-pointer py-[1px] px-[8px] bg-black text-white rounded-full' onClick={() => setIsOpen(false)}></i>
                            </div>
                            <div className='space-y-3'>
                                {categories.map((category) => {
                                    return (
                                        <li className=' flex flex-col' key={category.id}>
                                            <Link to={`/category/${category.id}`} className=' text-slate-600' onClick={() => setIsOpen(false)}>{category.name}</Link>
                                        </li>)
                                })}
                            </div>
                            {/* <li className='space-y-2 flex flex-col'>
                                <Link className=' text-black' onClick={() => setIsOpen(false)}>demos</Link>
                            </li> */}

                        </ul>
                        <div className='-show-btn w-full text-yellow-400 flex justify-end items-center px-4 py-2'>
                            <i className='fa fa-bars text-xl cursor-pointer' onClick={() => setIsOpen(true)}>
                            </i>
                        </div>

                    </div>
                    <li className='md:flex hp:hidden justify-end text-white space-x-7 text-md py-2'>
                        {
                            categories.map((category) => {
                                return (
                                    <div key={category.id}>
                                        <Link to={`/category/${category.id}`} className='flex'>{category.name}</Link>
                                    </div>
                                )
                            })
                        }
                        {/* <Link className='flex'>demos</Link> */}
                    </li>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;