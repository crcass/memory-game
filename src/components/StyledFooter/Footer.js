import styled from 'styled-components';

const Footer = styled.footer`
  align-items: center;
  background-color: #38003b;
  bottom: 0;
  color: #fff;
  display: flex;
  font-family: 'Poppins', Arial, Helvetica Neue, Helvetica, sans-serif;
  height: 4em;
  left: 0;
  justify-content: center;
  width: 100%;

  a {
    color: inherit;
    text-decoration: inherit;
    transition: color 0.3s ease;

    &:hover {
      color: #f8b3ff;
    }
  }
`;

export default Footer;
