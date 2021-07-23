import React from 'react';

import Navbar from '../../components/navbar';
import Banner from '../../components/banner';

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <Banner bannerTitle="Contact us" routePath="Contact"></Banner>
    </>
  );
};

export default ContactUs;
