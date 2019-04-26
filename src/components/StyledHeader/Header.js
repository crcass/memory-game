import styled from 'styled-components';

const Header = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background-color: #fff;
  z-index: 100;
  border-bottom: 1px solid black;
  p {
    min-height: 1em;
  }
`;

export default Header;
