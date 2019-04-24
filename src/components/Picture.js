import React, { Fragment } from 'react';

const Picture = props => {
  return (
    <Fragment>
      <button onClick={props.handleClick}>
        <img src={props.image} alt={props.name} />
      </button>
    </Fragment>
  );
};

export default Picture;
