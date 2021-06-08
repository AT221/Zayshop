import React from 'react';
import './_App.scss';
import NaviBar from '../Nav/NaviBar';
import Caro from '../Homepage/Carousel/Caro';
import Categories from '../Homepage/Categories/Categories';
import Products from '../Homepage/Products/Products';
import Footer from '../Footer/Footer';

const App = () => {
  return (
    <div>
      <NaviBar/>
      <Caro />
      <Categories/>
      <Products/>
      <Footer/>
    </div>
  )
}

export default App;
