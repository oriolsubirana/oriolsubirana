import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../templates/layout';
import ContactWrapper from '../styles/contact/ContactStyles';
import ContactForm from '../components/contact/ContactForm';

const Contact = ({ path }) => {
  return (
    <Layout path={path}>
      <ContactWrapper>
        <h1>Contact</h1>
        <p>
          Please don't hesitate to contact me via{' '}
          <a href="mailto: subi.cat@gmail.com">email</a> or any of my social
          media accounts.
        </p>
        <ContactForm />
      </ContactWrapper>
    </Layout>
  );
};

Contact.propTypes = {
  path: PropTypes.string.isRequired,
};

export default Contact;
