import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../templates/layout';
import { AboutPageWrapper } from '../styles/about/AboutStyles';

const About = ({ path, data }) => {
  return (
    <Layout path={path}>
      <AboutPageWrapper
        dangerouslySetInnerHTML={{
          __html: data.me.childMarkdownRemark.html,
        }}
      />
    </Layout>
  );
};

About.propTypes = {
  path: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};

export default About;

export const ABOUT_PAGE_QUERY = graphql`
  query ABOUT_PAGE_QUERY {
    me: file(relativePath: { eq: "me.md" }) {
      childMarkdownRemark {
        id
        excerpt(pruneLength: 370)
        html
      }
    }
  }
`;
