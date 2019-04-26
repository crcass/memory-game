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

  p {
    color: #fff;
    @media (min-width: 576px) {
      width: 130px;
    }
  }

  span {
    color: ${props =>
      props.children[1]._owner.memoizedProps.message === 'Good Guess!'
        ? '#05FF86'
        : '#E90052'};
  }

  p,
  span {
    font-size: 0.8em;
    min-height: 1em;
    margin: 0.5em 1em;

    @media (min-width: 576px) {
      font-size: 1.25em;
    }
  }

  img {
    height: 100%;
  }
`;

export default Header;
