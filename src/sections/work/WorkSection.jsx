import React from "react";

function WorkSection() {
  return (
    <main className="flex flex-col">
      <div className="flex-row flex items-center justify-center">
        <h2 className="text-yellow-500">WE MAKE CREATIVE</h2>
      </div>
      <div className="flex-row flex justify-center">
        <h1 className="text-black text-2xl font-bold">OUR RECENT WORK</h1>
      </div>

      <div className='flex-row flex mt-16'>
        <a href="#"><p className='flex-initial w-20 font-semibold'>ALL</p></a>
        <a href="#"><p className='flex-initial w-20 font-semibold'>BRAND</p></a>
        <a href="#"><p className='flex-initial w-20 font-semibold'>DESIGN</p></a>
        <a href="#"><p className='flex-initial w-20 font-semibold'>GRAPHIC</p></a>
      </div>

      <div className="grid grid-rows-3 grid-flow-col gap-4">
      <div>01</div>
      <div>02</div>
      </div>
    </main>
  );
}
export default WorkSection;
