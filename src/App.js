import React from 'react';
import Header from './Header';
import Spacer from "./Spacer";
import Title from './Title';
import Video from './Video';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Spacer />
      <Title title="First About Mest"/>
      <Video />
    </div>
  );
}

export default App;
