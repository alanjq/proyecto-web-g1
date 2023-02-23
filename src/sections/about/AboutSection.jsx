import React from 'react';
import aboutImage from '../../img/about-image.jpg'

function AboutSection() {
    return (
        <div className='container mx-auto'>
            <div className='flex-row flex'>
                <div>
                    <div>
                        <p>
                            ABOUT US
                            We specialize in transforming your ideas into digital creative desings & digital products
                        </p>
                    </div>
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                    <div className='flex'>
                        <div className='flex-1'>
                            15
                        </div>
                        <div className='flex-1'>
                            1200
                        </div>
                        <div className='flex-1'>
                            1500
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='flex-1'>
                            Years Of Experience
                        </div>
                        <div className='flex-1'>
                            Satisfied Client
                        </div>
                        <div className='flex-1'>
                            Happy Customers
                        </div>
                    </div>
                    <div>
                        <button>READ MORE</button>
                    </div>
                </div>
                <div className='rounded-full border-4'>
                    <img src={aboutImage} alt="Imagen de about" />
                </div>
            </div>
        </div>)
}
export default AboutSection
