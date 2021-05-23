import React from 'react';
import BannerDashboard from '../../components/BannerDashboard';
import Footer from '../../components/Footer';
import Tabs from './components/Tabs';

const Dashboard = () => {
  return (
    <>
      <BannerDashboard />
      <Tabs />
      <Footer />
    </>
  );
};

export default Dashboard;
