//components
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Personal from './components/Personal/Personal';
import Products from './components/Products/Products';

import './components/Mobile.css'

import './App.css'

function App() {
  return (
    <>
      <div className='App'>
        <Header />
        <Banner />
        <Personal />
        <Products/>
      </div>
    </>
  );
}

export default App;
