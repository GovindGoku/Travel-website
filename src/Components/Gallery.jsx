import React from 'react'

const Gallery = () => {
  return (
    <div id='gallery' className='max-w-[1140px] m-auto w-full px-4 py-16'>
        <h2 className='text-center text-gray-700 p-4'>Gallery</h2>
        <div className='grid sm:grid-cols-5 gap-4'>
            <div className='sm:col-span-3 row-span-2'>
                <img className='w-full h-full object-cover' src="https://d3ba08y2c5j5cf.cloudfront.net/wp-content/uploads/2018/09/11142931/The-Nautilus-Maldives-Beach-Residence-exterior-1-1920x1281.jpg" alt="" />
            </div>
            <div>
              <img className='w-full h-full object-cover' src="https://www.reelluxe.com/wp-content/uploads/2020/10/031-The-Nautilus-Maldives-Luxury-Resort-Thiladhoo-Island-Maldives-Ocean-Residence-Bedroom.jpg" alt="" />
            </div>
            <div>
              <img className='w-full h-full object-cover' src="https://i.pinimg.com/originals/c5/dd/cd/c5ddcd912e69ff12be13682f76fa8691.jpg" alt="" />
            </div>
            <div>
              <img className='w-full h-full object-cover' src="https://www.travelplusstyle.com/wp-content/gallery/cache/23936__940x_laamu_water_villa_with_pool_interior_6036-original.jpg" alt="" />
            </div>
            <div>
              <img className='w-full h-full object-cover' src="https://www.resortbeds.com/imgfly/images/FYNVdj8tpYtuNIX3xx46EkfAiX2P7GfNeERxKvbC.jpeg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Gallery