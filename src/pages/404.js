import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Layout from '../templates/layout';

const NotFoundWrapper = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  width: 100vw;
  max-width: 700px;
  padding: 15px;
  div {
    width: 100%;
    margin-top: 80px;
    h1 {
      font-size: 3.4rem;
    }
  }
  a {
    color: #551a8b;
  }
`;

const NotFound = () => {
  return (
    <Layout>
      <NotFoundWrapper>
        <div>
          <h1>Page not found.</h1>
          <h4>The page you are looking for has been removed or relocated.</h4>
          <Link to="/">Go back to home page</Link>
        </div>
      </NotFoundWrapper>
    </Layout>
  );
};

export default NotFound;
