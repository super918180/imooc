import React, { Component } from 'react';
// import WrapComponent from './component/WrappedComponent'
import LaoSong from './component/Person/LaoSong'
import XiaoJiang from './component/Person/XiaoJiang'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <WrapComponent /> */}
        <LaoSong name="我是老宋" age="25" height="1.85m" />
        <br />
        <XiaoJiang name="我是小蒋" age="24" height="1.60m" />
      </div>
    );
  }
}

export default App;
