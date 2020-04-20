import styled from 'styled-components';

const ContactWrapper = styled.div`
  .formsuccess {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 80px;
  }
  margin-top: 80px;
  width: 100%;
  transition: ${props => props.theme.transition};
  background-color: ${props => props.theme.bgColor};
  min-height: 80vh;
  h1 {
    font-size: 2.7rem;
  }
  a {
    color: #551a8b;
  }

  #contact {
    max-width: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    div {
      display: flex;
      flex-direction: column;
      margin: 5px;

      label {
        font-weight: 600;
        color: ${props => props.theme.textColor};

        span {
          color: #cc0000;
        }
      }

      input,
      textarea {
        font-family: 'Montserrat', sans-serif;
        padding: 5px 10px;
        border: none;
        border-bottom: 3px solid ${props => props.theme.textColor};
        background-color: rgba(0, 0, 0, 0);
      }
      textarea {
        height: 150px;
      }
    }

    button {
      width: 100%;
      max-width: 500px;
      margin: 35px auto;
      padding: 11px;
      background-color: ${props => props.theme.accentColor};
      border: none;
      color: white;
      transition: 0.3s;
    }
    button:hover {
      cursor: pointer;
      box-shadow: 0px 5px 10px #888;
    }
  }
`;

export default ContactWrapper;
