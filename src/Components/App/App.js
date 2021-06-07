import React from 'react';
import './_App.scss';
import NaviBar from '../Nav/NaviBar';
import Caro from '../Homepage/Carousel/Caro';
import Categories from '../Homepage/Categories/Categories';


const App = () => {
  return (
    <div>
      <NaviBar/>
      <Caro />
      <Categories/>
    </div>
  )
}

export default App
