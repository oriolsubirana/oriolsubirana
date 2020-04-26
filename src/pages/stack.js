import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../templates/layout';
import StackWrapper from '../styles/stack/StackStyles';
import StackPanel from '../components/stack/StackPanel';
import Laptop from '../images/png/laptop.png';
import ComputerDisk from '../images/png/computer-disk.png';
import Gear from '../images/png/gear.png';
import JavaSVG from '../images/tech-icons/JavaSVG.svg';

const Stack = () => {
  const applications = [
    {
      img: JavaSVG,
      url: 'https://www.java.com/',
      title: 'Java 12',
      alt: 'java',
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
