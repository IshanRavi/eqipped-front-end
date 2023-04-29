
import React from 'react'
import HomePageSlider from '../../pages/view/HomePageSlider';
import HomeCategory from '../../pages/view/HomeCategory';
const Home = () => {





  const imgCollection = [
    {
      image: 'eqippedImg3.png',

    }, {
      image: 'eqippedImg4.jpg',

    }, {
      image: 'Labequipment.png',

    }
  ];


  return (
    <>
      <HomeCategory/>      
      <HomePageSlider/>     

    </>
  )

}
export default Home;
