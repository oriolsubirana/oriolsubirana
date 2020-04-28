import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../templates/layout';
import StackWrapper from '../styles/stack/StackStyles';
import StackPanel from '../components/stack/StackPanel';
import Laptop from '../images/png/laptop.png';
import ComputerDisk from '../images/png/computer-disk.png';
import Gear from '../images/png/gear.png';
import java from '../images/tech-icons/java.svg';
import spring from '../images/tech-icons/spring.svg';
import javascript from '../images/tech-icons/icons8-javascript.svg';
import react from '../images/tech-icons/react.svg';
import redux from '../images/tech-icons/redux.svg';
import typescript from '../images/tech-icons/typescript.svg';
import css from '../images/tech-icons/css3.svg';
import rabbitmq from '../images/tech-icons/rabbitmq.svg';
import markdown from '../images/tech-icons/markdown.svg';
import gatsby from '../images/tech-icons/Gatsby_Monogram.svg';
import angular from '../images/tech-icons/angularjs.svg';
import mongodb from '../images/tech-icons/mongodb.svg';
import postgresql from '../images/tech-icons/postgresql.svg';
import jest from '../images/tech-icons/jest.svg';
import cucumber from '../images/tech-icons/cucumber.svg';

const Stack = () => {
  const applications = [
    {
      img: java,
      url: 'https://www.java.com/',
      title: 'Java 12',
      alt: 'java',
      level: 'Expert',
    },
    {
      img: spring,
      url: 'https://spring.io/',
      title: 'Spring',
      alt: 'spring',

      level: 'Expert',
    },
    {
      img: cucumber,
      url: 'https://cucumber.io/',
      title: 'Cucumber',
      alt: 'cucumber',

      level: 'Expert',
    },
    {
      img: javascript,
      url: 'https://www.javascript.com/',
      title: 'Javascript',
      alt: 'javascript',
      level: 'Expert',
    },
    {
      img: react,
      url: 'https://es.reactjs.org/',
      title: 'React',
      alt: 'react',
      level: 'Experienced',
    },
    {
      img: redux,
      url: 'https://es.redux.js.org/',
      title: 'Redux',
      alt: 'redux',
      level: 'Experienced',
    },
    {
      img: jest,
      url: 'https://jestjs.io/',
      title: 'Jest',
      alt: 'jest',
      level: 'Experienced',
    },
    {
      img: typescript,
      url: 'https://www.typescriptlang.org/',
      title: 'Typescript',
      alt: 'typescript',
      level: 'Experienced',
    },
    {
      img: angular,
      url: 'https://angular.io/',
      title: 'Angular JS',
      alt: 'angularjs',
      level: 'Skillful',
    },
    {
      img: css,
      url: 'https://www.w3.org/Style/CSS/Overview.en.html',
      title: 'CSS 3',
      alt: 'css3',
      level: 'Experienced',
    },
    {
      img: rabbitmq,
      url: 'https://www.rabbitmq.com/',
      title: 'RabbitMQ',
      alt: 'rabbitmq',
      level: 'Experienced',
    },
    {
      img: markdown,
      url: 'https://markdown.es/',
      title: 'Markdown',
      alt: 'markdown',
      level: 'Experienced',
    },
    {
      img: gatsby,
      url: 'https://www.gatsbyjs.org/',
      title: 'Gatsby',
      alt: 'gatsby',
      level: 'Experienced',
    },
    {
      img: postgresql,
      url: 'https://www.postgresql.org/',
      title: 'PostgreSQL',
      alt: 'postgresql',
      level: 'Expert',
    },
    {
      img: mongodb,
      url: 'https://www.mongodb.com/',
      title: 'MongoDB',
      alt: 'mongodb',
      level: 'Experienced',
    },
  ];

  //const devOps = {};
  return (
    <Layout>
      <StackWrapper>
        <h1>Tech stack</h1>
        <StackPanel
          title={'Application & Data'}
          icon={Laptop}
          message={applications}
        />
        {/* <StackPanel title={'DevOps'} icon={Gear} message={devOps} /> */}
      </StackWrapper>
    </Layout>
  );
};

Stack.propTypes = {
  path: PropTypes.string.isRequired,
};

export default Stack;
