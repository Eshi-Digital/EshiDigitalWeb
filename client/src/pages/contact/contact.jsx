import React from 'react';

import Navbar from '../../components/navbar';
import Banner from '../../components/banner';
import Contact from '../../components/contact';
import FooterMain from '../../components/footer/footer_main';

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <Banner bannerTitle="Contact us" routePath="Contact"></Banner>
      <Contact></Contact>
      <FooterMain></FooterMain>
    </>
  );
};

export default ContactUs;
