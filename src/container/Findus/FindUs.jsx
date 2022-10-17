import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import './FindUs.css';

const FindUs = () => {
return(
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className='app__wrapper_info'>
      <SubHeading title="Contact"/>
      <h1 className='headtext__cormorant'>Find Us</h1>
      <div className='app__wrapper-content'>
        <p className='p__opensans'>Urb. Lomas Del Viento, Cond. 2 House 231, The bora Door.</p>
        <p className='p__cormorant'>Opening Hours</p>
        <p className='p__opensans'>Mon - Fri: 10:00 am - 02:00 am</p>
        <p className='p__opensans'>Sat - Sun: 10:00 am - 03:00 am</p>
      </div>
      <button className='custom__button'>Visit Us</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.findus} alt="Find Us" />
    </div>
  </div>
  )
};

export default FindUs;
