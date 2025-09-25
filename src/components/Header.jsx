// Sticky header with logo and navigation links
import { useRoomContext } from '../context/RoomContext';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { LogoWhite } from '../assets'; // SVG Logo (light)
import { LogoDark } from '../assets'; // SVG Logo (dark)


const Header = () => {

  const { resetRoomFilterData } = useRoomContext();

  const [header, setHeader] = useState(false);

  // Toggle compact header after scrolling
  useEffect(() => {
    window.addEventListener('scroll', () =>
      window.scrollY > 50
        ? setHeader(true)
        : setHeader(false)
    );
  });

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Rooms', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header
      className={`fixed z-50 w-full transition-all duration-300 
      ${header ? 'bg-white py-6 shadow-lg' : 'bg-transparent py-8'}`}
    >

      <div className='container mx-auto flex flex-col lg:flex-row items-center lg:justify-between gap-y-6 lg:gap-y-0'>

        {/* Logo switches between light/dark based on header background */}
        <Link to="/" onClick={resetRoomFilterData}>
          {
            header
              ? <LogoDark className='w-[160px]' /> //<img className='w-[160px]' src={LogoDark} />
              : <LogoWhite className='w-[160px]' /> //<img className='w-[160px]' src={LogoWhite} />
          }
        </Link>

        {/* Navigation links */}
        <nav className={`${header ? 'text-primary' : 'text-white'}
        flex gap-x-4 lg:gap-x-8 font-tertiary tracking-[3px] text-[15px] items-center uppercase`}>
          {
            navLinks.map(link =>
              <Link to={link.path} className='transition hover:text-accent' key={link.name}>
                {link.name}
              </Link>
            )
          }
        </nav>

      </div>

    </header>
  );
};

export default Header;
