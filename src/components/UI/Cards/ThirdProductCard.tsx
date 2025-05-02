import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const ThirdProductCard = () => {

    return (
    <div className='flex items-center justify-center'>
        <div className='relative flex w-full max-w-[48rem] flex-row rounded-xl bg-slate-100 bg-clip-border text-gray-700 shadow-md'>
            <div className='relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700'>
                <Image
                    src='https://images.pexels.com/photos/3885948/pexels-photo-3885948.jpeg'
                    alt='cat'
                    quality={100}
                    width={100}
                    height={300}
                    // fill
                    // sizes='100vw'
                    // placeholder='blur'
                    className='h-full w-full object-cover'
                />
            </div>
            <div className='p-6'>
                <h6 className='mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-purple-900 antialiased'>
                    Third Product Card
                </h6>
                <h4 className='mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-900 antialiased'>
                    Horizontal Card with image 
                </h4>
                <p className='mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased'>
                    This card showcases a sleek and modern design with a horizontal layout, featuring a captivating image on the left and descriptive content on the right. Perfect for highlighting products or services, it combines aesthetics with functionality, ensuring your message is delivered effectively while maintaining a visually appealing presentation.
                </p>
                <Link href='#' className='inline-block'>
                    <button className='flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-purple-500 transition-all hover:bg-purple-500/10 active:bg-purple-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none' type='button'>
                        Learn More
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            aria-hidden="true"
                            className="h-4 w-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                            ></path>
                        </svg>
                    </button>
                
                </Link>
            </div>


        </div>
    </div>
  )
}
