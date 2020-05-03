import styled from 'styled-components';

const StackWrapper = styled.div`
  .stackIcons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 15px 15px 0px;
    width: 100%;
    .boxStack {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      box-sizing: content-box;
      border: solid 1px rgba(60, 60, 60, 0.2);
      border-radius: 5px;
      width: 75px;
      padding: 20px 20px 20px 20px;
      margin: 0px 10px 10px 10px;
      img {
        margin-bottom: 10px;
        width: 48px;
        height: 48px;
      }
      h5 {
        font-size: 0.8rem;
        margin-bottom: 10px;
      }
      h6 {
        font-size: 0.7rem;
        font-style: italic;
        font-weight: normal;
        margin-bottom: 10px;
      }
      a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }
    a {
      text-decoration: none;
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
