import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SubFooter from '../components/SubFooter';
import MenuMobile from '../components/MenuMobile';
import '../scss/style.scss';

const Layout = ({ children }) => (
  <div>
    <MenuMobile />
    <div id="wrapper" className="wrapper">
      <Header />
      {children}
    </div>
    <Footer />
    <SubFooter />
  </div>
);

export default Layout;
