import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../templates/layout';
import StackWrapper from '../styles/stack/StackStyles';
import StackPanel from '../components/stack/StackPanel';
import Laptop from '../images/png/laptop.png';
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
import nifi from '../images/tech-icons/nifi.svg';
import vscode from '../images/tech-icons/vscode.svg';
import intellij from '../images/tech-icons/intellij.svg';
import git from '../images/tech-icons/git.svg';
import mvn from '../images/tech-icons/mvn.svg';
import npm from '../images/tech-icons/npm.svg';
import docker from '../images/tech-icons/docker.svg';
import jenkins from '../images/tech-icons/jenkins.svg';
import slack from '../images/tech-icons/slack.svg';
import jira from '../images/tech-icons/jira.svg';
import confluence from '../images/tech-icons/confluence.svg';
import docusaurus from '../images/tech-icons/docusaurus.svg';
import scrum from '../images/tech-icons/scrum.svg';
import graphql from '../images/tech-icons/graphql.svg';
import kotlin from '../images/tech-icons/kotlin.svg';
import groovy from '../images/tech-icons/groovy.svg';
import github from '../images/tech-icons/github.svg';
import junit from '../images/tech-icons/junit.svg';

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
      img: kotlin,
      url: 'https://kotlinlang.org/',
      title: 'Kotlin',
      alt: 'kotlin',
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
      img: junit,
      url: 'https://junit.org/junit5',
      title: 'JUnit',
      alt: 'junit',
      level: 'Expert',
    },
    {
      img: groovy,
      url: 'https://groovy-lang.org/index.html',
      title: 'Groovy',
      alt: 'groovy',
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
    {
      img: graphql,
      url: 'https://graphql.org/',
      title: 'GraphQL',
      alt: 'graphql',
      level: 'Skillful',
    },
    {
      img: nifi,
      url: 'https://nifi.apache.org/',
      title: 'Nifi',
      alt: 'nifi',
      level: 'Experienced',
    },
  ];

  const devOps = [
    {
      img: vscode,
      url: 'https://code.visualstudio.com/',
      title: 'VSCode',
      alt: 'vscode',
      level: 'Expert',
    },
    {
      img: intellij,
      url: 'https://www.jetbrains.com/es-es/idea/',
      title: 'IntelliJ',
      alt: 'intellij',
      level: 'Expert',
    },
    {
      img: git,
      url: 'https://git-scm.com/',
      title: 'Git',
      alt: 'git',
      level: 'Expert',
    },
    {
      img: github,
      url: 'https://github.com/',
      title: 'GitHub',
      alt: 'github',
      level: 'Expert',
    },
    {
      img: mvn,
      url: 'http://maven.apache.org/',
      title: 'Maven',
      alt: 'mvn',
      level: 'Expert',
    },
    {
      img: npm,
      url: 'https://www.npmjs.com/',
      title: 'NPM',
      alt: 'npm',
      level: 'Expert',
    },
    {
      img: docker,
      url: 'https://www.docker.com/',
      title: 'Docker',
      alt: 'docker',
      level: 'Expert',
    },
    {
      img: jenkins,
      url: 'https://www.jenkins.io/',
      title: 'Jenkins',
      alt: 'jenkins',
      level: 'Expert',
    },
    {
      img: slack,
      url: 'https://slack.com',
      title: 'Slack',
      alt: 'slack',
      level: 'Experienced',
    },
    {
      img: jira,
      url: 'https://www.atlassian.com/es/software/jira',
      title: 'Jira',
      alt: 'jira',
      level: 'Expert',
    },
    {
      img: confluence,
      url: 'https://www.atlassian.com/es/software/confluence',
      title: 'Confluence',
      alt: 'confluence',
      level: 'Expert',
    },
    {
      img: docusaurus,
      url: 'https://docusaurus.io/',
      title: 'Docusarus',
      alt: 'docusaurus',
      level: 'Experienced',
    },
    {
      img: scrum,
      url: 'https://www.scrum.org/',
      title: 'Scrum',
      alt: 'scrum',
      level: 'Expert',
    },
  ];
  return (
    <Layout>
      <StackWrapper>
        <h1>Stack</h1>
        <StackPanel
          title={'Application & Data'}
          icon={Laptop}
          message={applications}
        />
        <StackPanel title={'DevOps & Process'} icon={Gear} message={devOps} />
      </StackWrapper>
    </Layout>
  );
};

Stack.propTypes = {
  path: PropTypes.string.isRequired,
};

export default Stack;
