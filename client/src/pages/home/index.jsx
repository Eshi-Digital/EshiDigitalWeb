import React from 'react';

import MainBanner from '../../components/banner/banner_main';
import OfferMain from '../../components/offer/offer_main';
import WorkingProcessMain from '../../components/workingProcess/working_process_main';
import WhyChooseUs from '../../components/whyChooseUs';
import TeamMembers from '../../components/team_members';
import FAQ from '../../components/FAQ';
import FooterMain from '../../components/footer/footer_main';
import NavbarCustom from '../../components/navbar';

const Home = () => {
  return (
    <>
      <NavbarCustom></NavbarCustom>
      <MainBanner></MainBanner>
      <WorkingProcessMain></WorkingProcessMain>
      <OfferMain></OfferMain>
      <WhyChooseUs></WhyChooseUs>
      <TeamMembers></TeamMembers>
      <FAQ></FAQ>
      <FooterMain></FooterMain>
    </>
  );
};

export default Home;
