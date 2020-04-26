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

const Stack = () => {
  const applications = [
    {
      img: java,
      url: 'https://www.java.com/',
      title: 'Java 12',
      alt: 'java',
    },
    {
      img: spring,
      url: 'https://spring.io/',
      title: 'Spring',
      alt: 'spring',
    },
  ];

  const data = {};
  const devOps = {};
  return (
    <Layout>
      <StackWrapper>
        <h1>Tech stack</h1>
        <StackPanel
          title={'Applications'}
          icon={Laptop}
          message={applications}
        />
        {/* <StackPanel title={'Data'} icon={ComputerDisk} message={data} /> */}
        {/* <StackPanel title={'DevOps'} icon={Gear} message={devOps} /> */}
      </StackWrapper>
    </Layout>
  );
};

Stack.propTypes = {
  path: PropTypes.string.isRequired,
};

export default Stack;
