import React from 'react';
import './Home.css';


const Home = () => (
   <div id='home' className='home-wrapper'>

      <div className='home-wrapper-text'>

         <div className='home-title'>
            The Dental Ecosystem
         </div>
         <p className='home-paragraph'>
            Toothpick allows you to easily find,order and track all of your dental products in 3 easy steps.

         </p>
         <img className='home-app-image' src='/Images/app-store-black.svg' alt='app store'/>
         <img className='home-app-image' src='/Images/google-play-black.svg' alt='google play'/>
      </div>
      <div className='home-wrapper-image'>
         <img className='home-mobile-image' src='/Images/img_hero_1.png' alt='app store'/>
      </div>


   </div>
   
);

export default Home;