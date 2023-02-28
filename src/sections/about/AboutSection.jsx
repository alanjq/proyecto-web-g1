import React from 'react';
import aboutImage from '../../img/about-image.jpg'

function AboutSection() {
    return (
        <div className='container md:mx-auto'>
            <div className='flex-row flex'>
                <div className='flex-1'>
                    <div>
                        <p className='font-medium'> ABOUT US</p>
                        <p className='text-xl font-medium'>
                            We specialize in transforming your ideas into digital creative desings & digital products
                        </p>
                    </div>
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                    <div className='flex'>
                        <div className='flex-1 text-[#ff9800] text-4xl font-bold'>
                            15
                        </div>
                        <div className='flex-1 text-[#ff9800] text-4xl font-bold'>
                            1200
                        </div>
                        <div className='flex-1 text-[#ff9800] text-4xl font-bold'>
                            1500
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='flex-1 text-xs'>
                            Years Of Experience
                        </div>
                        <div className='flex-1  text-xs'>
                            Satisfied Client
                        </div>
                        <div className='flex-1 text-xs font-sans'>
                            Happy Customers
                        </div>
                    </div>
                    <div className=' flex '>
                        <div className='flex-none rounded-full border-8 px-8 '>
                            <button className=''>READ MORE!!</button>
                        </div>
                    </div>
                </div>
                <div className='max-w-sm flex-1'>
                    <img src={aboutImage} alt="Imagen de about" />
                </div>
            </div>
        </div>)
}
export default AboutSection
