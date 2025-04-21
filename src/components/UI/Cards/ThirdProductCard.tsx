import React from 'react'
import Image from 'next/image'

export const ThirdProductCard = () => {

    return (
    <div className='flex h-auto w-auto bg-slate-100 rounded-3xl border-2 border-slate-600'>
        <div>
            ThirdProductCard
        </div>
        <div className='block'>
            <Image
                src='https://images.pexels.com/photos/3885948/pexels-photo-3885948.jpeg'
                alt='cat'
                quality={100}
                width={100}
                height={300}
                // fill
                // sizes='100vw'
                // placeholder='blur'
                className='object-cover'
            />
        </div>
    </div>
  )
}
