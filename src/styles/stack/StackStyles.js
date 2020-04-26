import styled from 'styled-components';

const StackWrapper = styled.div`
  .stackIcons {
    padding: 15px 25px 0px;
    width: 100%;
    max-width: 400px;
    a {
      text-decoration: none;
    }
    ul {
      margin: 0;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      li {
        list-style-type: none;
        display: flex;
        justify-content: center;
        align-items: center;
        a {
          img {
            height: auto;
            width: 50px;
          }
        }
      }
    }
  }
  margin-top: 80px;
  width: 100%;
  transition: ${props => props.theme.transition};
  background-color: ${props => props.theme.bgColor};
  min-height: 80vh;
  .expansionPanel {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 5px;
  }
  h1 {
    font-size: 2.7rem;
  }
  a {
    color: #551a8b;
  }
  .panelTitle {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    img {
      width: 30px;
      margin: 0px;
    }
    h4 {
      padding-left: 10px;
      margin: 0px;
    }
  }
`;

export default StackWrapper;
