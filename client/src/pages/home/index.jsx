import React from 'react';

import Navbar from '../../components/navbar';
import WhyChooseUs from '../../components/whyChooseUs';
import ProfileCard from '../../components/profileCard';
import HappyCustomer from '../../components/happyCustomer';
import Contact from '../../components/contact';
import Banner from '../../components/banner';
import Service from '../../components/services';
import MainBanner from '../../components/banner/banner_main';
import OfferMain from '../../components/offer/offer_main';
import WorkingProcessMain from '../../components/workingProcess/working_process_main';
import TeamMembers from '../../components/team_members';
import FAQ from '../../components/FAQ';
import FooterMain from '../../components/footer/footer_main';

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <MainBanner></MainBanner>
      <OfferMain></OfferMain>
      <WorkingProcessMain></WorkingProcessMain>
      <WhyChooseUs></WhyChooseUs>
      <TeamMembers></TeamMembers>
      <FAQ></FAQ>
      <FooterMain></FooterMain>
      {/* <OfferCard></OfferCard> */}
      {/* <HappyCustomer></HappyCustomer> */}
      {/* <ProfileCard></ProfileCard> */}
      {/* <div className="app">Login</div> */}

      {/* <Contact></Contact> */}
      {/* <Banner></Banner> */}
      {/* <Service></Service> */}
    </>
  );
};

export default Home;
