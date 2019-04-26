import styled from 'styled-components';

const Header = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background-color: #38003b;
  z-index: 100;
  height: 5em;
  padding-right: 2em;
  font-family: 'Poppins', Arial, Helvetica Neue, Helvetica, sans-serif;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);

  a {
    display: contents;
  }

  img {
    height: 100%;
  }
`;

export default Header;
