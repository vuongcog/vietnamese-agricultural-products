import React from 'react';
import BannerCarousel from '../components/UserHomeCarousel';
import UserHomeAboutUs from '../components/UserHomeAboutUs';
import UserHomeAdvertise from '../components/UserHomeAdvertise';
const Home = () => (
  <div className="pb-5">
    <BannerCarousel></BannerCarousel>
    <UserHomeAboutUs></UserHomeAboutUs>
    <UserHomeAdvertise></UserHomeAdvertise>
  </div>
);

export default Home;
