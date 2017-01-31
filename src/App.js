import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import theme from './toolbox/theme';
import './toolbox/theme.css';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider'
import DropdownDemo from './DropdownDemo';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <div style={{ width: '300px', padding: '30px' }}>
            <DropdownDemo />
          </div>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
