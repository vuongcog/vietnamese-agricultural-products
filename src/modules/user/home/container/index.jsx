import React from 'react';
import BannerCarousel from '../components/UserHomeCarousel';
import UserHomeAboutUs from '../components/UserHomeAboutUs';
import UserHomeAdvertise from '../components/UserHomeAdvertise';
console.log(Cookies.get('accsessToken'));
const Home = () => (
  <div>
    <BannerCarousel></BannerCarousel>
    <UserHomeAboutUs></UserHomeAboutUs>
    <UserHomeAdvertise></UserHomeAdvertise>
  </div>
);

export default Home;
