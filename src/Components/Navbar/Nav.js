import { useState, useEffect, useCallback } from 'react';
import './Nav.css';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation(); // Access the current location

  // Toggle Navbar state
  const toggleNavbar = () => {
    setIsOpen(prev => !prev); // Optimized toggle using functional state update
  };

  // Debounced scroll handler
  const debounce = (func, wait = 50) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func.apply(this, args);
      }, wait);
    };
  };

  // Handle scroll event to change navbar style on scroll
  const handleScroll = useCallback(
    debounce(() => {
      setIsScrolled(window.scrollY > 50);
    }, 50),
    []
  );

  // Scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup on component unmount
    };
  }, [handleScroll]);

  // Close the navbar when location changes (on route change)
  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0); // Scroll to top when navigating
  }, [location]);

  return (
    <>
      {/* Overlay for mobile nav */}
      <div className={`nav-overlay ${isOpen ? 'active' : ''}`} onClick={toggleNavbar}></div>

      {/* Navbar */}
      <nav className={`fixed top-0 left-0 w-full p-2 transition-colors duration-300 ease-in-out ${isOpen ? 'bg-black' : isScrolled ? 'bg-[#161616cc]' : 'bg-black'} text-white z-50`}>
        <div className="container mx-auto flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center" onClick={() => window.scrollTo(0, 0)}>
            <img src="https://sae-beige.vercel.app/static/media/Logo_final.b75cdbef4fed48981612.png" alt="Logo" className="h-12" />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="nav-link text-lg font-bold hover:text-custom-red" onClick={() => window.scrollTo(0, 0)}>HOME</Link>
            <Link to="/events" className="nav-link text-lg font-bold hover:text-custom-red" onClick={() => window.scrollTo(0, 0)}>EVENTS</Link>
            <Link to="/teams" className="nav-link text-lg font-bold hover:text-custom-red" onClick={() => window.scrollTo(0, 0)}>TEAMS</Link>
            <Link to="/tedx" className="nav-link text-lg font-bold hover:text-custom-red" onClick={() => window.scrollTo(0, 0)}>TEDX</Link>
            <Link to="/arhn" className="nav-link text-lg font-bold hover:text-custom-red" onClick={() => window.scrollTo(0, 0)}>AAROHAN</Link>
            <Link to="/alumni" className="nav-link text-lg font-bold hover:text-custom-red" onClick={() => window.scrollTo(0, 0)}>ALUMNI</Link>
          </div>

          {/* Hamburger Menu Icon */}
          <button className="md:hidden relative z-20" onClick={toggleNavbar}>
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500 transition-transform duration-300 ease-in-out transform rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500 transition-transform duration-300 ease-in-out transform rotate-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {/* Mobile Nav Links */}
          <div
            className={`nav-menu md:hidden fixed top-16 left-0 w-full p-4 rounded-b-md shadow-md z-10 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-y-0 opacity-100 bg-black' : '-translate-y-full opacity-0'}`}
          >
            <div className="flex flex-col space-y-3 ml-12 m-8 justify-center items-center">
              <Link to="/" className="no-underline block text-white hover:text-custom-red text-lg font-bold transition duration-300 ease-in-out" onClick={() => window.scrollTo(0, 0)}>HOME</Link>
              <Link to="/events" className="no-underline block text-white hover:text-custom-red text-lg font-bold transition duration-300 ease-in-out" onClick={() => window.scrollTo(0, 0)}>EVENTS</Link>
              <Link to="/teams" className="no-underline block text-white hover:text-custom-red text-lg font-bold transition duration-300 ease-in-out" onClick={() => window.scrollTo(0, 0)}>TEAMS</Link>
              <Link to="/tedx" className="no-underline block text-white hover:text-custom-red text-lg font-bold transition duration-300 ease-in-out" onClick={() => window.scrollTo(0, 0)}>TEDX</Link>
              <Link to="/arhn" className="no-underline block text-white hover:text-custom-red text-lg font-bold transition duration-300 ease-in-out" onClick={() => window.scrollTo(0, 0)}>AAROHAN</Link>
              <Link to="/alumni" className="no-underline block text-white hover:text-custom-red text-lg font-bold transition duration-300 ease-in-out" onClick={() => window.scrollTo(0, 0)}>ALUMNI</Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
