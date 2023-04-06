import { useState, useEffect, useRef } from 'react';
import Hero from "./components/Hero";
import About from "./components/Services";
import Services from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);
  const [activeLink, setActiveLink] = useState('');

  const handleScroll = () => {
    if (contactRef.current && window.scrollY >= contactRef.current.offsetTop) {
      setActiveLink('contact');
    } else if (servicesRef.current && window.scrollY >= servicesRef.current.offsetTop) {
      setActiveLink('services');
    } else if (aboutRef.current && window.scrollY >= aboutRef.current.offsetTop) {
      setActiveLink('about');
    } else {
      setActiveLink('');
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
    setActiveLink(ref.current.id);
  }

  return (
    <div>
     <div className="flex flex-col text-xl">
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center bg-green-500 shadow-lg px-3 py-3">
        <div className="flex items-center lg:ml-5 font-bold">
          <a href="/">
          <h1 className='text-black hover:text-green-200 text-lg'>COMPANY LOGO</h1>
          </a>
        </div>
        <div className="flex flex-grow items-center justify-center ml-5">
          <ul className="flex">
            <li className={`lg:mr-20 mr-10 text-sm lg:text-lg font-medium ${activeLink === 'about' ? 'text-green-200' : 'text-black'} hover:text-green-200 cursor-pointer`} onClick={() => handleNavClick(aboutRef)}>
              <span id="about">Services</span>
            </li>
            <li className={`lg:mr-20 mr-10 text-sm lg:text-lg font-medium ${activeLink === 'services' ? 'text-green-200' : 'text-black'} hover:text-green-200 cursor-pointer`} onClick={() => handleNavClick(servicesRef)}>
              <span id="services">Team</span>
            </li>
            <li className={`lg:mr-20 mr-10 text-sm lg:text-lg font-medium ${activeLink === 'contact' ? 'text-green-200' : 'text-black'} hover:text-green-200 cursor-pointer`} onClick={() => handleNavClick(contactRef)}>
              <span id="contact">Contact</span>
            </li>
          </ul>
        </div>
      </nav>
    </div>
     <Hero />
     <div ref={aboutRef}>
       <About />
     </div>
     <div ref={servicesRef}>
       <Services />
     </div>
     <div ref={contactRef}>
       <Contact />
     </div>
     <Footer />
    </div>
  );
}
export default App;
