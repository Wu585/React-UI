import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './icon';

ReactDOM.render(
  <Icon onClick={(e) =>
    console.log((e.target as SVGUseElement).href)}
        onMouseLeave={()=> console.log('leave')}
        name="alipay"/>,
  document.getElementById('root')
);
