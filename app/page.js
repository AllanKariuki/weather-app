import Image from 'next/image'
import Footer from './components/Footer'

export default function Home() {
  return (
    <section className="flex mx-auto md:ml-20 flex-col items-center">
      {/* 
      // {/* Introductory text */}
      <Image src='/logo.png' className='mt-20' width={300} height={300}/>
      <div className='text-center text-white mt-9 px-10 md:mt-15'>
        <h1 className='text-3xl font-medium'>
          Discover the Weather in any location
        </h1>
        <p className='py-4  leading-8'>
          Search a location and get to know the 
          forecastand a five day prediction.
        </p>
      </div>
      <button className="rounded-full bg-gradient-to-r from-blue-600
       text- to-blue-300 w-[400px] mt-5 mb-10 p-5 items-center text-white md:mt-10">
        Get Started
      </button>
    </section>
  )
}
