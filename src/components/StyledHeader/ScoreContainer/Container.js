import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  p,
  span {
    font-size: 0.8em;
    min-height: 1em;
    margin: 0.5em 1em;

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
  }

  @media (min-width: 576px) {
    min-width: 0;
  }
`;

export default Container;
