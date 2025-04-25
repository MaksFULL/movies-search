import React from 'react';

class BaseComponent extends React.Component {
  log(message) {
    console.log(`[BaseComponent]: ${message}`);
  }

  render() {
    return null;
  }
}

export default BaseComponent;
