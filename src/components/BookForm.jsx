// Booking form: date pickers, guest selectors, filter + WhatsApp CTA
import { AdultsDropdown, CheckIn, CheckOut, KidsDropdown } from '.';
import { useRoomContext } from '../context/RoomContext';


const BookForm = () => {

  // Actions and state from context
  const { handleCheck, adults, kids } = useRoomContext();

  // Replace with your phone number in international format without spaces or dashes
  // Example: Sri Lanka +94 77 123 4567 -> '94771234567'
  const WHATSAPP_NUMBER = 'YOUR_NUMBER_WITH_COUNTRY_CODE';

  // Build WhatsApp deeplink with a prefilled message
  const buildWhatsAppLink = () => {
    const message = `Hello, I would like to inquire about a booking.\nAdults: ${adults}\nKids: ${kids}\n(Please note: dates are not included yet)`;
    const encoded = encodeURIComponent(message);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
  };


  return (
    <form className='h-[300px] lg:h-[70px] w-full'>
      <div className='flex flex-col w-full h-full lg:flex-row'>

        <div className='flex-1 border-r'>
          <CheckIn />
        </div>

        <div className='flex-1 border-r'>
          <CheckOut />
        </div>

        <div className='flex-1 border-r'>
          <AdultsDropdown />
        </div>

        <div className='flex-1 border-r'>
          <KidsDropdown />
        </div>

        {/* Filter rooms based on selected guests */}
        <button
          type='submit'
          className='btn btn-primary'
          onClick={(e) => handleCheck(e)}
        >
          Check Now
        </button>

        {/* Contact hotel via WhatsApp with the current selections */}
        <a
          href={buildWhatsAppLink()}
          target='_blank'
          rel='noreferrer'
          className='btn btn-secondary'
          style={{ display: 'grid', placeItems: 'center' }}
        >
          WhatsApp Us
        </a>

      </div>
    </form>
  );
};

export default BookForm;
