import React, { useContext, useEffect } from 'react';
import { ThemeContext } from '../utils/ThemeContext';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

import { LayoutWrapper } from '../styles/layout/LayoutStyles';
import Header from '../components/layout/Header';

const Layout = ({ children }) => {
  const theme = useContext(ThemeContext);
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
        </div>
        <main>{children}</main>
      </LayoutWrapper>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Layout;
