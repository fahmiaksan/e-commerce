import React from 'react'
import { spinner } from '../../utils/images'

export default function Loader() {
    return (
        <div>
            <div className='flex justify-center pt-9 pb-5'>
                <img src={spinner} alt="spinner" className='w-20 h-20' />
            </div>
        </div>
    )
}
