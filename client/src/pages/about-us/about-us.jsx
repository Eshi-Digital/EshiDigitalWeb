import React from 'react';

import Navbar from '../../components/navbar';
import Banner from '../../components/banner';

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <Banner bannerTitle="About us" routePath="About"></Banner>
    </>
  );
};

export default ContactUs;
