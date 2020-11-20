import React from 'react';
import Homescreen from './pages/Homescreen';
import './App.css';
import 'tachyons';
import './styles.css'
const App = (props)=> {
  return (
    <div className="App background">
      <Homescreen/>
    </div>
  );
}

export default App;
