import React from 'react'
import Image from 'next/image'
import { BiSearchAlt } from 'react-icons/bi'
import sun from '../../public/sunny-icon-0.png'

const page = () => {
  return (
    <div className='container items-center justify-center md:ml-10'>
        <h2 className='py-10 text-white text-2xl text-center'>Pick a location</h2>
        <div className='container bg-black rounded-3xl px-5 
        md:mx-auto max-w-2xl mb-10 py-3 max-h-5xl'>
            <div className='flex justify-between  items-center text-white'>
                <div className='py-5'>
                    <p className='py-2'>Nairobi, Kenya</p>
                    <p className='py-2'>Lagos, Nigeria</p>
                    <p className='py-2'>Addis Ababa, Ethiopia</p>
                    <p className='py-2'>New York, USA</p>
                    <p className='py-2'>Addis Ababa, Ethiopia</p>
                    <p className='py-2'>New York, USA</p>
                </div>
                <div className='flex flex-row'>
                    <div>
                        <p className='py-2'>25°/17°</p>
                        <p className='py-2'>25°/17°</p>
                        <p className='py-2'>25°/17°</p>
                        <p className='py-2'>25°/17°</p>
                        <p className='py-2'>25°/17°</p>
                        <p className='py-2'>25°/17°</p>
                    </div>
                    <div className='px-2'>
                        <Image className='py-2' src={sun} width={25} height={25}/>
                        <Image className='py-2' src={sun} width={25} height={25}/>
                        <Image className='py-2' src={sun} width={25} height={25}/>
                        <Image className='py-2' src={sun} width={25} height={25}/>
                        <Image className='py-2' src={sun} width={25} height={25}/>
                        <Image className='py-2' src={sun} width={25} height={25}/>
                </div>
                </div>
            </div>
            <div className='flex justify-between 
                bg-white rounded-3xl h-[50px] 
                items-center px-5'>
                <input type='text' className='outline-none border-none w-full' placeholder = 'Search a location'/>
                <a href='/forecast'><BiSearchAlt/></a>
            </div>
        </div>
    </div>
  )
}

export default page