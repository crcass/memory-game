import React, { Fragment } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  background: none;
  height: 10em;
  min-width: 10em;

  img {
    height: 100%;
  }
`;

const Picture = props => {
  return (
    <Fragment>
      <Button onClick={props.handleClick}>
        <img src={props.image} alt={props.name} />
      </Button>
    </Fragment>
  );
};

export default Picture;
