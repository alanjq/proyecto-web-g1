import React from 'react';
import Container from '../../components/container/Container';
import design from '../../img/design.png';
import managment from '../../img/managment.png';
import strategy from '../../img/strategy.png';
import ServicesItems from './ServicesItems';





function ServicesSection() {
    return (
<>

            <div className='flex-row mb-20'>
                <div className='flex flex-col'>
                    <p className='text-yellow-500 flex flex-col'><b>WHAT WE DO</b></p>
                    <h1 className='text-gray-500 flex flex-col mb-6' ><b>AMAZING SERVICES</b></h1>
                </div>

                <div className="flex flex-nowrap">
                <ServicesItems img = {design} titulo={'Design & Development'} />
                    {/*<div className='flex flex-col gap-4 px-10'>
                        <img className='rounded-full' src={design} alt="design" />
                        <h1><b>Design & Development</b></h1>
                        <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmad tempar incididunt ut labore. <br />
                            <b> READ MORE</b></p>
                    </div>*/}
                    <ServicesItems img = {strategy} titulo={'Strategy & Research'} />
                    {/*<div className='flex flex-col gap-4 px-8'>
                        <img className='rounded-full' src={strategy} alt="strategy" />
                        <h1><b>Strategy & Research</b></h1>
                        <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmad tempar incididunt ut labore. <br />
                            <b> READ MORE</b></p>
                    </div>*/}
                    <ServicesItems img = {managment} titulo={'Managment & Marketing'} />
                    {/*<div className='flex flex-col gap-4 px-8'>
                        <img className='rounded-full' src={managment} alt="managment" />
                        <h1><b>Managment & Marketing</b></h1>
                        <p className='text-gray-600 mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmad tempar incididunt ut labore. <br />
                            <b> READ MORE</b></p>
                    </div>*/}



        <div style={{backgroundColor:"#F6F6F6", height:"100%" }}>
            <div style={{paddingTop:"50px", color:"#facc15", fontSize:"13px"}}>WHAT WE DO</div>
            <div style={{paddingBottom:"50px", color:"#545454", fontSize:"30px"}}><b>AMAZING SERVICES</b></div>
</div>
         <Container>
           <section className='flex' style={{paddingBottom:"100px"}}>
             <div className='flex flex-col justify-evenly' style={{backgroundColor:"white", padding:'67px 40px 64px', boxShadow:'black, 10px', height:'500px', margin:'15px', overflow:'hidden'}}>
               {/* <div style={{background:'none repeat scroll 0 0 #030D46', height:'300px', width:'300px', borderRadius:'50%', marginLeft:'-150px',position:'absolute', top:'-150px', zIndex:'1'}}></div> */}
                     <img src='https://cdn-icons-png.flaticon.com/512/1474/1474613.png' style={{height:"40px", width:"40px", borderRadius:'50%'}}/>
                         <h1><b>Design & Development</b></h1>
                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmad tempar incididunt ut labore.</p>
                                 <a><b>READ MORE</b></a>

             </div>
                <div className='flex flex-col justify-evenly' style={{backgroundColor:"white", padding:'67px 40px 64px', boxShadow:'black, 10px',  margin:'15px'}}>
                {/* <div style={{background:'none repeat scroll 0 0 #030D46', height:'300px', width:'300px', borderRadius:'50%', position:'absolute', marginLeft:'-150px', top:'-150px'}}></div> */}

                    <img src='https://i.pinimg.com/564x/18/ae/5c/18ae5c865ddf0a5f1a585cc877bfe0fa.jpg' style={{height:"40px", width:"40px", borderRadius:'50%'}} />
                       <h1><b>Strategy & Research</b></h1>
                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmad tempar incididunt ut labore. </p>
                             <a><b>READ MORE</b></a>

                </div>
                <div className='flex flex-col justify-evenly' style={{backgroundColor:"white", padding:'67px 40px 64px', boxShadow:'black, 10px', margin:'15px'}}>
                                   {/* <div style={{background:'none repeat scroll 0 0 #030D46', height:'300px', width:'300px', borderRadius:'50%', position:'absolute', marginLeft:'-150px', top:'-150px'}}></div> */}

                    <img src='https://img.freepik.com/vector-premium/icono-linea-perforacion-pozo-pozo-agua_116137-5955.jpg?w=740' style={{height:"80px", width:"80px", borderRadius:'50%'}}/>
                       <h1><b>Management & Marketing</b></h1>
                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmad tempar incididunt ut labore. </p>
                             <a><b>READ MORE</b></a>
                </div>
            </section>

        </Container>
        </div>
        </div>

</>)
}




export default ServicesSection


