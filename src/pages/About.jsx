import { ScrollToTop } from '../components';
import { FaAward, FaUsers, FaBed, FaUtensils, FaSwimmingPool, FaSpa, FaWifi, FaCar } from 'react-icons/fa';

const About = () => {
  return (
    <div>
      <ScrollToTop />
      
      {/* Hero Section */}
      <section className='h-[60vh] bg-cover bg-center relative flex items-center justify-center' 
               style={{backgroundImage: 'url(/src/assets/img/heroSlider/1.jpg)'}}>
        <div className='absolute inset-0 bg-black/50'></div>
        <div className='relative z-10 text-center text-white'>
          <h1 className='text-4xl md:text-6xl font-primary mb-4'>About Our Hotel</h1>
          <p className='text-xl md:text-2xl font-tertiary tracking-[3px] uppercase'>
            Luxury & Comfort Since 1995
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className='py-24'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            {/* Text Content */}
            <div>
              <h2 className='text-3xl md:text-4xl font-primary mb-6'>Welcome to Hotel & Spa Adina</h2>
              <p className='text-lg mb-6 text-gray-600'>
                Nestled in the heart of the city, Hotel & Spa Adina has been providing exceptional 
                hospitality and luxury accommodations for over 25 years. Our commitment to excellence 
                and attention to detail has made us a preferred destination for travelers worldwide.
              </p>
              <p className='text-lg mb-8 text-gray-600'>
                From our elegant rooms and world-class spa services to our award-winning restaurants 
                and state-of-the-art facilities, we ensure every guest experiences the perfect blend 
                of comfort, luxury, and personalized service.
              </p>
              
              {/* Stats */}
              <div className='grid grid-cols-2 gap-6'>
                <div className='text-center'>
                  <div className='text-3xl font-bold text-accent mb-2'>25+</div>
                  <div className='text-gray-600'>Years of Excellence</div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl font-bold text-accent mb-2'>500+</div>
                  <div className='text-gray-600'>Happy Guests Daily</div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl font-bold text-accent mb-2'>50+</div>
                  <div className='text-gray-600'>Luxury Rooms</div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl font-bold text-accent mb-2'>24/7</div>
                  <div className='text-gray-600'>Concierge Service</div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className='relative'>
              <img 
                src='/src/assets/img/heroSlider/2.jpg' 
                alt='Hotel Interior' 
                className='rounded-lg shadow-xl'
              />
              <div className='absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl'>
                <div className='flex items-center gap-4'>
                  <FaAward className='text-4xl text-accent' />
                  <div>
                    <h3 className='font-bold text-lg'>Award Winning</h3>
                    <p className='text-gray-600'>Best Luxury Hotel 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className='py-24 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
            <div className='text-center'>
              <FaUsers className='text-5xl text-accent mx-auto mb-6' />
              <h3 className='text-2xl font-primary mb-4'>Our Mission</h3>
              <p className='text-gray-600'>
                To provide exceptional hospitality experiences that exceed our guests' expectations 
                through personalized service, luxurious accommodations, and attention to every detail.
              </p>
            </div>
            <div className='text-center'>
              <FaAward className='text-5xl text-accent mx-auto mb-6' />
              <h3 className='text-2xl font-primary mb-4'>Our Vision</h3>
              <p className='text-gray-600'>
                To be the premier luxury hotel destination, recognized globally for our commitment 
                to excellence, innovation, and creating unforgettable memories for our guests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className='py-24'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-primary mb-4'>Meet Our Team</h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              Our dedicated team of hospitality professionals is committed to making your stay 
              memorable and ensuring every detail is perfect.
            </p>
          </div>
          
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='text-center'>
              <div className='w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center'>
                <FaUsers className='text-4xl text-gray-600' />
              </div>
              <h3 className='text-xl font-bold mb-2'>Sarah Johnson</h3>
              <p className='text-accent mb-2'>General Manager</p>
              <p className='text-gray-600 text-sm'>
                With 15 years of experience in luxury hospitality, Sarah ensures every guest 
                receives exceptional service.
              </p>
            </div>
            
            <div className='text-center'>
              <div className='w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center'>
                <FaUtensils className='text-4xl text-gray-600' />
              </div>
              <h3 className='text-xl font-bold mb-2'>Chef Michael Chen</h3>
              <p className='text-accent mb-2'>Executive Chef</p>
              <p className='text-gray-600 text-sm'>
                Award-winning chef specializing in international cuisine and local delicacies 
                with a modern twist.
              </p>
            </div>
            
            <div className='text-center'>
              <div className='w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center'>
                <FaSpa className='text-4xl text-gray-600' />
              </div>
              <h3 className='text-xl font-bold mb-2'>Emma Rodriguez</h3>
              <p className='text-accent mb-2'>Spa Director</p>
              <p className='text-gray-600 text-sm'>
                Certified wellness expert with over 10 years of experience in luxury spa 
                treatments and holistic healing.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
