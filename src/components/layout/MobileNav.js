import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import MobileNavWrapper from '../../styles/layout/MobileNavStyles';
import Hamburger from './Hamburger';

const MobileNav = ({ mobileNavIsOpen, action }) => {
  return (
    <MobileNavWrapper isOpen={mobileNavIsOpen}>
      <Hamburger mobileNavIsOpen={mobileNavIsOpen} action={action} />

      <div className="mobileNav" data-testid="mobileNav">
        <div className="darkLayer" onClick={action} />
        <div id="mobileMenu">
          <nav>
            <ul>
              <li>
                <Link activeClassName="activePage" to="/blog">
                  blog
                </Link>
              </li>
              <li>
                <Link activeClassName="activePage" to="/stack">
                  tech stack
                </Link>
              </li>
              <li>
                <Link activeClassName="activePage" to="/about">
                  about me
                </Link>
              </li>
              <li>
                <Link activeClassName="activePage" to="/contact">
                  contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </MobileNavWrapper>
  );
};

MobileNav.propTypes = {
  mobileNavIsOpen: PropTypes.bool.isRequired,
  action: PropTypes.func.isRequired,
};

export default MobileNav;
