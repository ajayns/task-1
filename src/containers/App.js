import React, { Component } from 'react'

import Form from './Form'

class App extends Component {
  render() {
    return (
      <div>
        <div className="bar"></div>
        <div style={{margin: '120px'}}>
          <div style={{maxWidth: '640px', minWidth: '640px'}}>
            <h2>What are your skills?</h2>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec</p>
            <br />
            <Form />
          </div>
        </div>
      </div>
    );
  }
}

export default App
