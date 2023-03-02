import aboutImage from '../../img/about-image.jpg'
import Container from '../../components/container/Container';
import Counter from './Counter';


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
                        <div className='flex gap-8'>
                            <Counter number={15} text="year of experience" />
                            <Counter number={1200} text="Satisfied Client" />
                            <Counter number={1500} text="Happy Customers" />
                        </div>
                        <div className=' flex '>
                            <div className='flex-none rounded-full border-2 my-6 border-black  hover:bg-[#ff9800] transition duration-500 '>
                                <button className='py-2.5 px-9 font-semibold'>READ MORE</button>
                            </div>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <img className='max-w-lg ' src={aboutImage} alt="Imagen de about" />
                    </div>
                </div>
            </div>
        </Container >)
}
export default AboutSection
