import styled from 'styled-components';

const AboutPageWrapper = styled.div`
  margin-top: 100px;
  min-height: 70vh;
  text-align: justify;
  text-justify: inter-word;
  h1 {
    font-size: 2.7rem;
    color: ${props => props.theme.textColor};
  }

  @media (min-width: 800) {
    h1 {
      font-size: 3rem;
    }
  }
`;

export { AboutPageWrapper };
