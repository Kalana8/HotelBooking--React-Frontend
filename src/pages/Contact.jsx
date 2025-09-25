import { ScrollToTop } from '../components';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const Contact = () => {
  return (
    <div>
      <ScrollToTop />
      
      {/* Hero Section */}
      <section className='h-[60vh] bg-cover bg-center relative flex items-center justify-center' 
               style={{backgroundImage: 'url(/src/assets/img/heroSlider/1.jpg)'}}>
        <div className='absolute inset-0 bg-black/50'></div>
        <div className='relative z-10 text-center text-white'>
          <h1 className='text-4xl md:text-6xl font-primary mb-4'>Contact Us</h1>
          <p className='text-xl md:text-2xl font-tertiary tracking-[3px] uppercase'>
            We're Here to Help
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className='py-24'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            {/* Contact Form */}
            <div>
              <h2 className='text-3xl font-primary mb-6'>Send us a Message</h2>
              <form className='space-y-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>First Name</label>
                    <input 
                      type='text' 
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent'
                      placeholder='Your first name'
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>Last Name</label>
                    <input 
                      type='text' 
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent'
                      placeholder='Your last name'
                    />
                  </div>
                </div>
                
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>Email</label>
                  <input 
                    type='email' 
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent'
                    placeholder='your.email@example.com'
                  />
                </div>
                
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>Subject</label>
                  <input 
                    type='text' 
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent'
                    placeholder='How can we help you?'
                  />
                </div>
                
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>Message</label>
                  <textarea 
                    rows={6}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent'
                    placeholder='Tell us more about your inquiry...'
                  ></textarea>
                </div>
                
                <button 
                  type='submit'
                  className='w-full bg-accent text-white py-3 px-6 rounded-lg font-medium hover:bg-accent/90 transition-colors'
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className='text-3xl font-primary mb-6'>Get in Touch</h2>
              <div className='space-y-8'>
                <div className='flex items-start gap-4'>
                  <FaMapMarkerAlt className='text-2xl text-accent mt-1' />
                  <div>
                    <h3 className='text-xl font-bold mb-2'>Address</h3>
                    <p className='text-gray-600'>
                      123 Luxury Street<br />
                      Downtown District<br />
                      City, State 12345<br />
                      Country
                    </p>
                  </div>
                </div>

                <div className='flex items-start gap-4'>
                  <FaPhone className='text-2xl text-accent mt-1' />
                  <div>
                    <h3 className='text-xl font-bold mb-2'>Phone</h3>
                    <p className='text-gray-600'>
                      +1 (555) 123-4567<br />
                      +1 (555) 987-6543
                    </p>
                  </div>
                </div>

                <div className='flex items-start gap-4'>
                  <FaEnvelope className='text-2xl text-accent mt-1' />
                  <div>
                    <h3 className='text-xl font-bold mb-2'>Email</h3>
                    <p className='text-gray-600'>
                      info@hoteladina.com<br />
                      reservations@hoteladina.com
                    </p>
                  </div>
                </div>

                <div className='flex items-start gap-4'>
                  <FaClock className='text-2xl text-accent mt-1' />
                  <div>
                    <h3 className='text-xl font-bold mb-2'>Reception Hours</h3>
                    <p className='text-gray-600'>
                      Monday - Friday: 6:00 AM - 11:00 PM<br />
                      Saturday - Sunday: 7:00 AM - 10:00 PM<br />
                      <span className='text-accent font-medium'>24/7 Emergency Contact Available</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className='mt-8'>
                <h3 className='text-xl font-bold mb-4'>Find Us</h3>
                <div className='w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center'>
                  <p className='text-gray-500'>Interactive Map Would Go Here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='py-24 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto'>
            <h2 className='text-3xl font-primary text-center mb-12'>Frequently Asked Questions</h2>
            
            <div className='space-y-6'>
              <div className='bg-white rounded-lg p-6 shadow-md'>
                <h3 className='text-xl font-bold mb-3'>What are your check-in and check-out times?</h3>
                <p className='text-gray-600'>
                  Check-in is available from 3:00 PM onwards, and check-out is until 10:30 AM. 
                  Early check-in and late check-out may be available upon request and subject to availability.
                </p>
              </div>

              <div className='bg-white rounded-lg p-6 shadow-md'>
                <h3 className='text-xl font-bold mb-3'>Do you offer airport transportation?</h3>
                <p className='text-gray-600'>
                  Yes, we provide complimentary airport shuttle service for our guests. 
                  Please contact our concierge to arrange pickup and drop-off times.
                </p>
              </div>

              <div className='bg-white rounded-lg p-6 shadow-md'>
                <h3 className='text-xl font-bold mb-3'>Is parking available?</h3>
                <p className='text-gray-600'>
                  We offer valet parking services for all guests. Self-parking is also available 
                  in our secure underground parking facility.
                </p>
              </div>

              <div className='bg-white rounded-lg p-6 shadow-md'>
                <h3 className='text-xl font-bold mb-3'>Are pets allowed?</h3>
                <p className='text-gray-600'>
                  We welcome well-behaved pets in designated pet-friendly rooms. 
                  Please inform us at the time of booking and note that additional fees may apply.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
