import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../templates/layout';
import ContactWrapper from '../styles/contact/ContactStyles';

const FormSuccess = ({ path }) => {
  return (
    <Layout path={path}>
      <ContactWrapper>
        <div className="formsuccess">
          <h1>Thank you!</h1>
          <h3>I'll answer you as soon as possible.</h3>
          <Link to="/">Go back to home page</Link>
        </div>
      </ContactWrapper>
    </Layout>
  );
};

FormSuccess.propTypes = {
  path: PropTypes.string.isRequired,
};

export default FormSuccess;
