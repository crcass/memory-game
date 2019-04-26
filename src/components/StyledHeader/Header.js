import styled from 'styled-components';

const Header = styled.header`
  background-color: #38003b;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
  display: flex;
  font-family: 'Poppins', Arial, Helvetica Neue, Helvetica, sans-serif;
  font-weight: 600;
  height: 5em;
  justify-content: space-between;
  left: 0;
  padding-right: 2em;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;

  a {
    display: contents;
  }

  img {
    height: 100%;
  }
`;

export default Header;
