import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../templates/layout';
import { IndexPageWrapper } from '../styles/index/IndexStyles';

import Twitter from '../images/svg/TwitterSVG.js';
import Instagram from '../images/svg/InstagramSVG';
import Linkedin from '../images/svg/LinkedinSVG';
import Github from '../images/svg/GithubSVG';
import Resume from '../images/svg/ResumeSVG';
import Hand from '../images/svg/HandSVG';

const Index = ({ data }) => {
  const {
    twitterURL,
    instagramURL,
    githubURL,
    linkedinURL,
  } = data.me.childMarkdownRemark.frontmatter;

  return (
    <Layout>
      <IndexPageWrapper>
        <div className="indexIntro">
          <div className="hellohead">
            <h1 className="helloline">Hey there!</h1>
            <Hand />
          </div>
          <h1 className="headline">
            I'm Oriol, a rookie
            <br />
            Engineering Manager.
          </h1>
          <ul className="introSocialLinks">
            <li>
              <a
                target="_blank"
                href={linkedinURL}
                rel="noopener"
                aria-label="My linkedin profile"
              >
                <Linkedin />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href={data.resume.publicURL}
                rel="noopener"
                aria-label="My Resume"
              >
                <Resume />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href={githubURL}
                rel="noopener"
                aria-label="My Github page"
              >
                <Github />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href={twitterURL}
                rel="noopener"
                aria-label="My twitter profile"
              >
                <Twitter />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href={instagramURL}
                rel="noopener"
                aria-label="My Instagram page"
              >
                <Instagram />
              </a>
            </li>
          </ul>
        </div>
      </IndexPageWrapper>
    </Layout>
  );
};

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const INDEX_PAGE_QUERY = graphql`
  query INDEX_PAGE_QUERY {
    # social links from about markdown file
    me: file(relativePath: { eq: "me.md" }) {
      childMarkdownRemark {
        id
        frontmatter {
          email
          phone
          handle
          miniBio
          username
          twitterURL
          instagramURL
          githubURL
          linkedinURL
        }
      }
    }

    resume: file(
      relativePath: {
        eq: "content/Oriol_Subirana_Perdiguer_-_Senior_Software_Engineer.pdf"
      }
    ) {
      publicURL
    }
  }
`;
