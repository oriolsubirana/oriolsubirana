import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../utils/ThemeContext';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

import { LayoutWrapper } from '../styles/layout/LayoutStyles';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import MobileNav from '../components/layout/MobileNav';

const Layout = ({ children, path }) => {
  const theme = useContext(ThemeContext);

  let [mobileNavIsOpen, toggleMobileNav] = useState(false);
  const mobileNavAction = () => {
    toggleMobileNav(
      mobileNavIsOpen ? (mobileNavIsOpen = false) : (mobileNavIsOpen = true)
    );
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      require('smooth-scroll')('a[href*="#"]');
    }
  });

  return (
    <ThemeProvider theme={theme.currentTheme}>
      <LayoutWrapper>
        <div style={{ position: 'absolute', top: '0', zIndex: '1' }}>
          <Header />
          <MobileNav
            mobileNavIsOpen={mobileNavIsOpen}
            action={mobileNavAction}
          />
        </div>
        <main>{children}</main>
      </LayoutWrapper>
      <Footer path={path} />
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Layout;
