import React from 'react';
import aboutImage from '../../img/about-image.jpg'
import Container from '../../components/container/Container';

function AboutSection() {
    return (
        <Container>
            <div className='container md:mx-auto'>
                <div className='flex-col lg:flex-row gap-6 flex'>
                    <div className='flex-1 px-4'>
                        <div>
                            <p className='text-[24px] font-normal'> ABOUT US</p>
                            <p className='text-[25px] font-medium mb-2 '>
                                We specialize in transforming your ideas into digital creative desings & digital products
                            </p>
                        </div>
                        <div className='mb-6'>
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
                            <div className='flex-1 text-sm font-medium'>
                                Years Of Experience
                            </div>
                            <div className='flex-1  text-sm font-medium'>
                                Satisfied Client
                            </div>
                            <div className='flex-1 text-sm font-medium'>
                                Happy Customers
                            </div>
                        </div>
                        <div className=' flex '>
                            <div className='flex-none rounded-full border-2 my-6 border-black  hover:bg-[#ff9800] transition duration-500 '>
                                <button className='py-2.5 px-9 font-semibold'>READ MORE</button>
                            </div>
                        </div>
                    </div>
                    <div className='max-w-sm flex-1'>
                        <img src={aboutImage} alt="Imagen de about" />
                    </div>
                </div>
            </div>
        </Container>)
}
export default AboutSection
