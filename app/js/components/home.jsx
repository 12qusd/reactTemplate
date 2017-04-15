import React from 'react';

import Navbar from './navbar.jsx';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <Navbar/>
      </div>
    );
  }
}
