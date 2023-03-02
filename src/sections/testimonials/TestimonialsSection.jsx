import React from 'react';
import Container from '../../components/container/Container';
import Bert from '../../img/testimonial-1.jpg'
import Eva from '../../img/testimonial-2.jpg'
import Alan from '../../img/testimonial-3.jpg'
import Fondo from '../../img/fondo.jpg'

function TestimonialsSection() {
   return (
      <div style={{
          
            background: "#0d0f10",
            position: "relative",
            background: `url(${Fondo})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover;",
            backgroundPosition: "center center",
            zIndex: "1"
        
      }}>
         <div class="flex-row">
            <h1>Our SATISFIED CLIENTS</h1>
            <h2>Testimonials</h2>
         </div>
         <Container>

            <div class="flex flex-nowrap">
               <div>
                  <img src={Bert} alt="" />
                  <h1>Bert Graham</h1>
                  <h2>Web Developer</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmad tempar incididunt ut labore.</p>
               </div>
               <div>
                  <img src={Eva} alt="" />
                  <h1>Eva Norris</h1>
                  <h2>Web Developer</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmad tempar incididunt ut labore.</p>
               </div>
               <div>
                  <img src={Alan} alt="" />
                  <h1>Alan Brock</h1>
                  <h2>Web Developer</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmad tempar incididunt ut labore.</p>
               </div>
            </div>
         </Container>
      </div>
   )
}
export default TestimonialsSection
