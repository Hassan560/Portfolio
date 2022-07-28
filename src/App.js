//components
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Personal from './components/Personal/Personal';
import Products from './components/Products/Products';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

// icons
import { HiChevronUp } from 'react-icons/hi'

// mobile css
import './components/Mobile.css'

import { Link } from 'react-scroll';

// app css
import './App.css'

function App() {
  return (
    <>
      <div className='App'>
        <Link
          to="Home"
          activeClass='active'
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
          className='transition-all duration-300 arrowUp'
        >
          <HiChevronUp size={30} />
        </Link>
        <Header />
        <Banner />
        <Personal />
        <Products />
        <Contact />
        <hr className='breakline' />
        <Footer />
      </div>
    </>
  );
}

export default App;
