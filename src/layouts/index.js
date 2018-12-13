import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SubFooter from '../components/SubFooter';
import MenuMobile from '../components/MenuMobile';
import '../scss/style.scss';

const Layout = (props) => {
  console.log(props);
  return (
    <div className={`page${props.bodyClass ? ` ${props.bodyClass}` : ''}`}>
      <MenuMobile />
      <div id="wrapper" className="wrapper">
        <Header />
        {props.children}
      </div>
      <Footer />
      <SubFooter />
    </div>
  );
};

export default Layout;
