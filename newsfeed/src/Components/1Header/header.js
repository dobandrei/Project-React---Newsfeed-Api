import React from 'react';
import './header.css';

import Logo from'./1Logo/logo';

import Tabs from'./2Tabs/tabs';

function header() {
  return (
    <div className="header">
        <Logo />
        <Tabs />
    </div>
  );
}

export default header;