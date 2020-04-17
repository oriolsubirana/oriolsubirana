import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../templates/layout';
import ContactWrapper from '../styles/contact/ContactStyles';

const FormSuccess = ({ path }) => {
  return (
    <Layout path={path}>
      <ContactWrapper>
        <h1>Contact</h1>
        <h2>Form successfully sent!</h2>
        <h3>I'll get back to you as soon as possible!</h3>
        <Link to="/">Go back to home page</Link>
      </ContactWrapper>
    </Layout>
  );
};

FormSuccess.propTypes = {
  path: PropTypes.string.isRequired,
};

export default FormSuccess;
