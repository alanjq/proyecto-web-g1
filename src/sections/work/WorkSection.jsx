import React from "react";
import Container from "../../components/container/Container";

function WorkSection() {
  return (
    <Container>
      <div className='flex-row mb-20 max-w-fit'>
        <div className='flex flex-col'>
          <p className='text-yellow-500 flex flex-col items-center'><b>WE MAKE CREATIVE</b></p>
          <h1 className='text-black text-2xl flex flex-col font-bold items-center'><b>OUR RECENT WORK</b></h1>
        </div>


        <div className="flex mt-14 flex-row">
          <div className='flex flex-row'>
            <a href="#"><p className='flex-initial w-20 font-semibold'>ALL</p></a>
            <a href="#"><p className='flex-initial w-20 font-semibold'>BRAND</p></a>
            <a href="#"><p className='flex-initial w-20 font-semibold'>DESIGN</p></a>
            <a href="#"><p className='flex-initial w-20 font-semibold'>GRAPHIC</p></a>
          </div>
        </div>
        <div className='flex flex-row mt-8'>
            <img className='h-fill w-1/4' src="https://cry.extrascripts.xyz/img/portfolio/1.jpg" alt="img1" />
            <img className='ml-10 h-max w-3/4' src="https://cry.extrascripts.xyz/img/portfolio/2.jpg" alt="img2" />
        </div>
        <div className='flex mt-8'>
            <img className='h-fill w-1/3' src="https://cry.extrascripts.xyz/img/portfolio/3.jpg" alt="img3" />
            <img className='ml-10 w-1/3' src="https://cry.extrascripts.xyz/img/portfolio/4.jpg" alt="img4" />
            <img className='ml-10 w-1/3' src="https://cry.extrascripts.xyz/img/portfolio/5.jpg" alt="img5" />
        </div>
        </div>
    </Container>
  );
}
export default WorkSection;
