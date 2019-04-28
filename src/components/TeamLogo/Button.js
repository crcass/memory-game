import styled from 'styled-components';

const Button = styled.button`
  background-color: ${props => (props.color ? props.color : 'none')};
  border-radius: 5px;
  border: 0.5em solid #e8e8e8;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  font-family: 'Poppins', Arial, Helvetica Neue, Helvetica, sans-serif;
  margin: 1em auto;
  padding: 0.5em;
  height: 8em;
  width: 8em;

  @media (min-width: 768px) {
    transition: all 0.3s ease;
  }
  &:hover {
    @media (min-width: 768px) {
      box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
      transform: scale(1.1);
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
