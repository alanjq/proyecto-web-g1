import React from 'react';

   function Testimonialitem({foto, name, position}) {
      return (
        <div>
                  <div className="citem">
                     <img src={foto} alt="images" className='imgRedonda' />
                  </div>
                  <h5>{name}</h5> <span>{position}</span>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
               </div>
      )
   }
export default Testimonialitem
