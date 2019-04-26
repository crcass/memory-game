import styled from 'styled-components';

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  p,
  span {
    font-size: 0.8em;
    margin: 0.5em 1em;
    min-height: 1em;

    @media (min-width: 576px) {
      font-size: 1.25em;
    }
  }

  p {
    color: #fff;
    @media (min-width: 576px) {
      width: 130px;
    }
  }

  span {
    color: ${props =>
      props.message === 'Good Guess!' ? '#05FF86' : '#E90052'};
    flex: 1;
  }

  @media (min-width: 576px) {
    min-width: 0;
  }
`;

export default Container;
