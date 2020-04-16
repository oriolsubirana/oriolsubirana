import styled from 'styled-components';

const FooterWrapper = styled.footer`
  text-align: center;
  margin: 0 auto;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9f9;

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
            width: 30px;
          }
        }
      }
    }
  }

  .copyright {
    margin-bottom: 10px;
    small {
      color: ${props => props.theme.textColor};
    }
  }
`;

export default FooterWrapper;
