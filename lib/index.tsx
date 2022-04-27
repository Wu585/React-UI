import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './icon';

ReactDOM.render(
  <Icon onClick={()=>console.log('hi')} name="alipay"/>,
  document.getElementById('root')
);
