import React,{useState, useEffect} from 'react';
import Banner from '../components/Banner';
import Catalog from '../components/Catalog';
import Services from '../components/Services';
import Work from '../components/Work';
import Comment from '../components/Comment';
import Our from '../components/Our';
import Reviews from '../components/Reviews';
import Contact from '../components/Contact';

const HomePages = () => {

  return (
    <div>
      <Banner />
      <Catalog />
      <Services />
      <Work />
      <Comment />
      <Our />
      <Reviews />
      <Contact />
    </div>
  );
};

export default HomePages;