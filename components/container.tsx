import React from 'react';
import '../styles/container.module.scss';

const Container = ({ value }) => {

return (
  <div className="container-outer">
    <div className="container-inner">
      <div className="container-main">
      {
        value
      }
      </div>
    </div>
  </div>
)
}
export default Container;
