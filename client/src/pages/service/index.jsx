import React from 'react';

import Navbar from '../../components/navbar';
import Banner from '../../components/banner';
import { default as ServiceComponent } from '../../components/services';
import FooterMain from '../../components/footer/footer_main';

const Service = () => {
  return (
    <>
      <Navbar />
      <Banner bannerTitle="Services" routePath="Services"></Banner>
      <ServiceComponent />
      <FooterMain />
    </>
  );
};

export default Service;
