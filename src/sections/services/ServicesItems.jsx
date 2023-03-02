import React from 'react';

function ServicesItems({img, titulo}) {
    return (
        <div className='flex flex-col gap-4 px-10'>
            <img className='rounded-full' src={img} alt="design" />
            <h1><b>{titulo}</b></h1>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmad tempar incididunt ut labore. <br />
                <b> READ MORE</b></p>
        </div>
    )
}
export default ServicesItems

