import React from 'react';
import Container from '../../components/container/Container';
import Bert from '../../img/testimonial-1.jpg'
import Eva from '../../img/testimonial-2.jpg'
import Alan from '../../img/testimonial-3.jpg'
import Fondo from '../../img/fondo.jpg'
import "./testimonialsstyles.css"
import Testimonialitem from './Testimonialitem';

function TestimonialsSection() {
   return (
      <div style={{ background: `url(${Fondo})` }} >
         <Container>
            <section id="testimonial" className="bg-white">,
               <div className='flex'>
                  <h6 className="sub-heading" texAling="center">Our SATISFIED CLIENTS</h6>
                  <h2 texAling="center">Testimonials</h2>
               </div>
               <div className='flex-row'>
                  <Testimonialitem foto={Eva} name='Eva Norris' position='Web Developer'/>
                  <Testimonialitem foto={Bert} name='Bert Graham' position='Web Developer'/>
                  <Testimonialitem foto={Alan} name='Alan Brock' position='Web Developer'/>                 
               </div>

   
            </section >
         </Container >
      </div >
   )
}
export default TestimonialsSection
