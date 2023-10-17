import React from 'react'

export default function Footer() {
    return (
        <footer className='bg-slate-900 w-full hp:space-y-9 md:space-y-0 text-white  hp:justify-center'>
            <div className='flex hp:flex-col hp:text-center md:text-left md:justify-between md:items-start md:flex-row py-5 md:px-16 hp:space-y-6 md:space-y-0 md:tracking-wide hp:items-center hp:justify-center '>
                <div className='flex flex-col space-y-3'>
                    <h6 className='text-md font-semibold'>Links</h6>
                    <ul className='text-base text-slate-400 space-y-3'>
                        <li>About Us</li>
                        <li>Contact</li>
                        <li>Blog</li>
                        <li>FAQ's</li>
                    </ul>
                </div>
                <div className='flex flex-col space-y-3'>
                    <h6 className='text-md font-semibold '>Policies</h6>
                    <ul className='text-base text-slate-400 space-y-3'>
                        <li>Terms & Condition's</li>
                        <li>Cookies Policy</li>
                        <li>Data Policy</li>
                    </ul>
                </div>

                <div className='flex flex-col space-y-3'>
                    <h6 className='text-md font-semibold'>About Shooping Hub</h6>
                    <ul className='text-base text-slate-400 space-y-3'>
                        <li>Company Info</li>
                        <li>Branches</li>
                        <li>Store</li>
                    </ul>
                </div>

                <div className='flex flex-col space-y-3'>
                    <h6 className='text-md font-semibold'>Contact</h6>
                    <ul className='text-base text-slate-400 space-y-3'>
                        <li className='space-x-2'>
                            <span><i className='fas fa-phone'></i></span>
                            <span>+1234 5678</span>
                        </li>
                        <li className='space-x-2'>
                            <span><i className='fas fa-envelope'></i></span>
                            <span>info@shophub</span>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
