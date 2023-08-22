import React from 'react'
import BeachVideo from '../video/intro.mp4'
const Hero = () => {
  return (
    <div className='w-full h-[90vh]'>
        <video autoPlay muted loop src={BeachVideo} 
         className='w-full h-full object-cover'/>
        <div className='max-w-[1140px] m-auto'>
            <div className='absolute top-[40%] w-full md:[-50%] max-w-[600px] h-full flex flex-col text-white p-4'>
                <h1 className='font-bold text-4xl'>Find Your Special Trip</h1>
                <h2 className='text-4x1 py-4 italic'>With  SurfNStay</h2>
                <p>Start planning your dream island vacation today and let us guide you to the ultimate beachfront experiences.Embark on a journey to the world's most breathtaking islands and beaches with us!</p>
            </div>
        </div>
    </div>
  )
}

export default Hero