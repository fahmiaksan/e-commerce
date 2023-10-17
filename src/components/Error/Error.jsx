import React from 'react'
import { error } from '../../utils/images'

export default function Error() {
    return (
        <div className=' flex flex-col justify-center items-center'>
            <img src={error} alt="error" className='w-60 h-60' />
            <span className='text-3xl font-semibold text-red-600'>ups something was wrong</span>
        </div>
    )
}
