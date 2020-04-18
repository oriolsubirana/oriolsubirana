import styled from 'styled-components';
import fadeInUpward from '../animations/fadeInUpward.js';

const IndexPageWrapper = styled.div`
  transition: ${props => props.theme.transition};
  .indexIntro {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto 0;
    .headline {
      animation: ${fadeInUpward} 1s;
      color: ${props => props.theme.textColor};
      letter-spacing: 0.5px;
    }
    .helloline {
      animation: ${fadeInUpward} 1s;
      letter-spacing: 0.5px;
      color: #5d5b5b;
      font-size: 4.5rem;
    }
    .introSocialLinks {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
      animation: ${fadeInUpward} 1s;
      width: 90vw;
      max-width: 350px;
      margin: 0;
      li {
        list-style-type: none;
        height: 45px;
        width: 45px;
        transition: 0.2s;
        background-color: ${props => props.theme.bgColor};
        transition: ${props => props.theme.transition};
      }
      li:hover {
        transform: translateY(-10px);
      }
      .icon {
        transition: ${props => props.theme.transition};
        height: 15px;
        width: auto;
        background-color: ${props => props.theme.bgColor};
        fill: ${props => props.theme.textColor};
      }
    }
  }
  @media (min-width: 550px) {
    .helloline {
      font-size: 3rem;
    }
    .headline {
      h1 {
        font-size: 2.6rem;
      }
    }
  }
  @media (min-width: 880px) {
    .indexIntro {
      position: relative;
      left: 0px;
      max-width: 1000px;
      .helloline {
        font-size: 4.5rem;
      }
      .headline {
        font-size: 3rem;
      }
      .introSocialLinks {
        margin-bottom: 25px;
        li {
          height: 55px;
          width: 55px;
        }
        .icon {
          height: 25px;
        }
      }
    }
  }
`;

export { IndexPageWrapper };
