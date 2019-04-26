import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  background-color: ${props =>
    props.children._owner.memoizedProps.color
      ? props.children._owner.memoizedProps.color
      : 'none'};
  width: 12em;
  height: 12em;
  margin: 1em auto;
  padding: 0;

  @media (min-width: 768px) {
    transition: transform 0.3s ease;
  }
  &:hover {
    @media (min-width: 768px) {
      transform: scale(1.2);
    }
  }
  &:focus {
    outline: none;
  }

  img {
    height: 100%;
  }
`;

export default Button;
