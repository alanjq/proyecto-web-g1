import React from 'react';
import Container from '../../components/container/Container';
import design from '../../img/design.png';
import managment from '../../img/managment.png';
import strategy from '../../img/strategy.png';


function ServicesSection() {
    return (
        <Container>
            <div className='flex-row mb-20'>
                <div className='flex flex-col'>
                    <p className='text-yellow-500 flex flex-col'><b>WHAT WE DO</b></p>
                    <h1 className='text-gray-500 flex flex-col mb-6' ><b>AMAZING SERVICES</b></h1>
                </div>


                <div className="flex flex-nowrap">
                    <div className='flex flex-col gap-4'>
                        <img className='rounded-full' src={design} alt="design" />
                        <h1><b>Design & Development</b></h1>
                        <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmad tempar incididunt ut labore. <br />
                            <b> READ MORE</b></p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <img className='rounded-full' src={strategy} alt="strategy" />
                        <h1><b>Strategy & Research</b></h1>
                        <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmad tempar incididunt ut labore. <br />
                            <b> READ MORE</b></p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <img className='rounded-full' src={managment} alt="managment" />
                        <h1><b>Managment & Marketing</b></h1>
                        <p className='text-gray-600 mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmad tempar incididunt ut labore. <br />
                            <b> READ MORE</b></p>
                    </div>
                </div>
            </div>
        </Container>
    )
}
export default ServicesSection
