import { ScrollToTop } from '../components';
import { 
  FaWifi, 
  FaSwimmingPool, 
  FaUtensils, 
  FaSpa, 
  FaCar, 
  FaDumbbell, 
  FaConciergeBell, 
  FaPlane,
  FaShieldAlt,
  FaClock,
  FaUsers,
  FaGift
} from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: FaUtensils,
      title: 'Fine Dining',
      description: 'Experience world-class cuisine at our award-winning restaurants featuring international and local delicacies.',
      features: ['24/7 Room Service', 'Multiple Restaurants', 'Wine Cellar', 'Chef Specialties']
    },
    {
      icon: FaSpa,
      title: 'Spa & Wellness',
      description: 'Rejuvenate your mind and body with our luxury spa treatments and wellness programs.',
      features: ['Massage Therapy', 'Beauty Treatments', 'Sauna & Steam', 'Yoga Classes']
    },
    {
      icon: FaSwimmingPool,
      title: 'Recreation',
      description: 'Enjoy our state-of-the-art recreational facilities including pools, fitness center, and outdoor activities.',
      features: ['Olympic Pool', 'Fitness Center', 'Tennis Court', 'Golf Course']
    },
    {
      icon: FaConciergeBell,
      title: 'Concierge Service',
      description: 'Our dedicated concierge team is available 24/7 to assist with all your needs and requests.',
      features: ['24/7 Availability', 'Tour Bookings', 'Restaurant Reservations', 'Transportation']
    },
    {
      icon: FaCar,
      title: 'Transportation',
      description: 'Complimentary airport transfers and luxury vehicle services for your convenience.',
      features: ['Airport Shuttle', 'Luxury Cars', 'City Tours', 'Valet Parking']
    },
    {
      icon: FaWifi,
      title: 'Business Center',
      description: 'Fully equipped business facilities for meetings, conferences, and corporate events.',
      features: ['Meeting Rooms', 'High-Speed WiFi', 'Audio/Visual Equipment', 'Secretarial Services']
    }
  ];

  const additionalServices = [
    {
      icon: FaShieldAlt,
      title: 'Security',
      description: '24/7 security surveillance and professional security personnel ensure your safety.'
    },
    {
      icon: FaClock,
      title: 'Laundry Service',
      description: 'Same-day laundry and dry cleaning services available for all guests.'
    },
    {
      icon: FaUsers,
      title: 'Childcare',
      description: 'Professional childcare services and kids\' activities to keep your little ones entertained.'
    },
    {
      icon: FaGift,
      title: 'Gift Shop',
      description: 'Curated selection of local souvenirs, luxury items, and travel essentials.'
    },
    {
      icon: FaPlane,
      title: 'Travel Desk',
      description: 'Assistance with flight bookings, visa applications, and travel arrangements.'
    },
    {
      icon: FaDumbbell,
      title: 'Personal Training',
      description: 'Certified personal trainers available for one-on-one fitness sessions.'
    }
  ];

  return (
    <div>
      <ScrollToTop />
      
      {/* Hero Section */}
      <section className='h-[60vh] bg-cover bg-center relative flex items-center justify-center' 
               style={{backgroundImage: 'url(/src/assets/img/heroSlider/3.jpg)'}}>
        <div className='absolute inset-0 bg-black/50'></div>
        <div className='relative z-10 text-center text-white'>
          <h1 className='text-4xl md:text-6xl font-primary mb-4'>Our Services</h1>
          <p className='text-xl md:text-2xl font-tertiary tracking-[3px] uppercase'>
            Luxury & Convenience at Your Fingertips
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className='py-24'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-primary mb-4'>Premium Services</h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              Discover our comprehensive range of luxury services designed to make your stay 
              unforgettable. From fine dining to wellness, we cater to every aspect of your comfort.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {services.map((service, index) => (
              <div key={index} className='bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300'>
                <div className='text-center mb-6'>
                  <service.icon className='text-5xl text-accent mx-auto mb-4' />
                  <h3 className='text-2xl font-primary mb-3'>{service.title}</h3>
                  <p className='text-gray-600 mb-6'>{service.description}</p>
                </div>
                
                <ul className='space-y-2'>
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className='flex items-center text-sm text-gray-600'>
                      <div className='w-2 h-2 bg-accent rounded-full mr-3'></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className='py-24 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-primary mb-4'>Additional Services</h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              We go above and beyond to ensure your comfort and convenience with these 
              additional services available throughout your stay.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {additionalServices.map((service, index) => (
              <div key={index} className='bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300'>
                <div className='flex items-start gap-4'>
                  <service.icon className='text-3xl text-accent mt-1 flex-shrink-0' />
                  <div>
                    <h3 className='text-xl font-bold mb-2'>{service.title}</h3>
                    <p className='text-gray-600 text-sm'>{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Hours */}
      <section className='py-24'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto'>
            <h2 className='text-3xl md:text-4xl font-primary text-center mb-12'>Service Hours</h2>
            
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <div className='bg-white rounded-lg shadow-lg p-8'>
                <h3 className='text-2xl font-bold mb-6 text-center'>Restaurant & Dining</h3>
                <div className='space-y-3'>
                  <div className='flex justify-between items-center py-2 border-b border-gray-200'>
                    <span className='font-medium'>Main Restaurant</span>
                    <span className='text-gray-600'>6:00 AM - 11:00 PM</span>
                  </div>
                  <div className='flex justify-between items-center py-2 border-b border-gray-200'>
                    <span className='font-medium'>Room Service</span>
                    <span className='text-gray-600'>24 Hours</span>
                  </div>
                  <div className='flex justify-between items-center py-2 border-b border-gray-200'>
                    <span className='font-medium'>Poolside Bar</span>
                    <span className='text-gray-600'>10:00 AM - 10:00 PM</span>
                  </div>
                  <div className='flex justify-between items-center py-2'>
                    <span className='font-medium'>Lobby Café</span>
                    <span className='text-gray-600'>5:00 AM - 12:00 AM</span>
                  </div>
                </div>
              </div>

              <div className='bg-white rounded-lg shadow-lg p-8'>
                <h3 className='text-2xl font-bold mb-6 text-center'>Wellness & Recreation</h3>
                <div className='space-y-3'>
                  <div className='flex justify-between items-center py-2 border-b border-gray-200'>
                    <span className='font-medium'>Spa Services</span>
                    <span className='text-gray-600'>8:00 AM - 10:00 PM</span>
                  </div>
                  <div className='flex justify-between items-center py-2 border-b border-gray-200'>
                    <span className='font-medium'>Fitness Center</span>
                    <span className='text-gray-600'>5:00 AM - 11:00 PM</span>
                  </div>
                  <div className='flex justify-between items-center py-2 border-b border-gray-200'>
                    <span className='font-medium'>Swimming Pool</span>
                    <span className='text-gray-600'>6:00 AM - 10:00 PM</span>
                  </div>
                  <div className='flex justify-between items-center py-2'>
                    <span className='font-medium'>Concierge</span>
                    <span className='text-gray-600'>24 Hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Services */}
      <section className='py-24 bg-accent/10'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-3xl md:text-4xl font-primary mb-6'>Need Special Services?</h2>
          <p className='text-lg text-gray-600 mb-8 max-w-2xl mx-auto'>
            Our team is ready to accommodate any special requests or requirements you may have. 
            Contact our concierge for personalized assistance.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <button className='bg-accent text-white px-8 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors'>
              Contact Concierge
            </button>
            <button className='border border-accent text-accent px-8 py-3 rounded-lg font-medium hover:bg-accent hover:text-white transition-colors'>
              View All Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
