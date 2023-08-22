import React from 'react'

const Activities = () => {
  return (
    <div className='max-w-[1140px] m-auto w-full md:flex mt-[-75px]'>
    <div className='relative p-4 w-full md:w-1/3' style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h3 className='absolute z-10 text-white text-2xl font-bold'>Resorts</h3>
        <img src="https://cdn.architecturendesign.net/wp-content/uploads/2014/07/8-Ayada-Resort-Maldives.jpeg" alt=""
        className='w-full h-full object-cover relative border-4 border-white shadow-lg' />
    </div>
    <div className='relative p-4 w-full md:w-1/3' style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h3 className='absolute z-10 text-white text-2xl font-bold'>Cruise</h3>
        <img src="https://www.rd.com/wp-content/uploads/2019/06/cruise-ship.jpg" alt=""
        className='w-full h-full object-cover relative border-4 border-white shadow-lg' />
    </div>
    <div className='relative p-4 w-full md:w-1/3' style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h3 className='absolute z-10 text-white text-2xl font-bold'>Scuba</h3>
        <img src="https://cdn.wallpapersafari.com/14/70/xzFOEq.jpg" alt=""
        className='w-full h-full object-cover relative border-4 border-white shadow-lg' />
    </div>
</div>


  )
}

export default Activities