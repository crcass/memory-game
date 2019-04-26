import styled from 'styled-components';

const Footer = styled.footer`
  background-color: #38003b;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4em;
  font-family: 'Poppins', Arial, Helvetica Neue, Helvetica, sans-serif;
  color: #fff;

  a {
    text-decoration: inherit;
    color: inherit;
    transition: color 0.3s ease;

    &:hover {
      color: #f8b3ff;
    }
  }
`;

export default Footer;
