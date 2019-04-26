import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  background-color: ${props => (props.color ? props.color : 'none')};
  width: 8em;
  height: 8em;
  margin: 1em auto;
  padding: 0;
  border: 0.5em solid #e8e8e8;
  border-radius: 5px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
  font-family: 'Work Sans', Arial, Helvetica Neue, Helvetica, sans-serif;

  @media (min-width: 768px) {
    transition: all 0.3s ease;
  }
  &:hover {
    @media (min-width: 768px) {
      transform: scale(1.1);
      box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
    }
  }
  &:focus {
    outline: none;
  }

  img {
    border-radius: 5px;
    height: 100%;
  }
`;

export default Button;
