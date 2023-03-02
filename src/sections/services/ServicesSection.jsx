import React from 'react';
import Container from '../../components/container/Container';

function ServicesSection() {
    return (
        <Container>
        <div className='flex-row'>
          <div className='flex flex-col'>
                <p className ='text-yellow-500 flex flex-col'><b>WHAT WE DO</b></p>
                <h1 className = 'text-gray-500 flex flex-col'><b>AMAZING SERVICES</b></h1>
            </div>


            <div className="flex flex-nowrap">
                <div>
                    <h1><b>Design & Development</b></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmad tempar incididunt ut labore.
                    <b>READ MORE</b></p>
                </div>
                <div>
                    <h1><b>Strategy & Research</b></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmad tempar incididunt ut labore. 
                    <b>READ MORE</b></p>
                </div>
                <div>
                    <h1><b>Managment & Marketing</b></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmad tempar incididunt ut labore. 
                    <b>READ MORE</b></p>
                </div>
            </div>
            </div>
        </Container>
    )
}
export default ServicesSection
