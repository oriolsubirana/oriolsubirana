import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import FooterWrapper from '../../styles/layout/FooterStyles';

import gatsbyImg from '../../images/tech-icons/Gatsby_Monogram.svg';
import javascriptImg from '../../images/tech-icons/javascript.svg';
import mdImg from '../../images/tech-icons/markdown.svg';
import netlifyImg from '../../images/tech-icons/netlify.svg';
import reactImg from '../../images/tech-icons/react.svg';
import icons8 from '../../images/tech-icons/icons8.svg';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      styledImg: file(
        relativePath: { eq: "tech-icons/styled-components.png" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);

  const images = [
    {
      img: javascriptImg,
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      title: 'Javascript',
      alt: 'unofficial javascript logo',
    },
    {
      img: reactImg,
      url: 'https://reactjs.org/',
      title: 'React',
      alt: 'react atom logo',
    },
    {
      img: gatsbyImg,
      url: 'https://gatsbyjs.org/',
      title: 'GatsbyJS',
      alt: 'gatsbyjs logo',
    },
    {
      img: data.styledImg.childImageSharp.fluid,
      url: 'https://www.styled-components.com/',
      title: 'styled-components',
      alt: 'nail painting emoji as styled components logo',
    },
    {
      img: mdImg,
      url: 'https://www.markdownguide.org/',
      title: 'Markdown',
      alt: 'markdown logo',
    },
    {
      img: netlifyImg,
      url: 'https://netlify.com/',
      title: 'Netlify',
      alt: 'netlify logo',
    },
    {
      img: icons8,
      url: 'https://iconos8.es/',
      title: 'Icons8',
      alt: 'icons8 logo',
    },
  ];

  return (
    <FooterWrapper>
      <div className="stackIcons">
        <h6>
          Developed by Oriol Subirana. Built with{' '}
          <a href="https://reactjs.org/">React</a> and{' '}
          <a href="https://www.gatsbyjs.org/">Gatsby.js</a>
        </h6>
        <ul>
          {images.map((m, i) => {
            const { img, url, title, alt } = m;
            return (
              <li key={i}>
                <a href={url} target="_blank" rel="noopener" aria-label={title}>
                  {title === 'styled-components' ? (
                    <Img
                      fluid={img}
                      title={title}
                      alt={alt}
                      style={{ height: '15px', width: '15px' }}
                    />
                  ) : (
                    <img src={img} title={title} alt={alt} />
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="copyright">
        <small>
          Copyright &copy; Oriol Subirana Perdiguer · {new Date().getFullYear()}{' '}
          All rights reserved.
        </small>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
