import React from 'react';
import Header from './Header';
import Spacer from "./Spacer";
import Title from './Title';
import Video from './Video';
import Text from './Text'; 
import Table from './Table';
import CallToAction from './CallToAction';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Spacer />
      <Title title="First About Mest"/>
      <Video />
      <Spacer />
      <section className="section blue about-pre-mest">
        <Title title="What is PreMEST?" />
        <Text isAbout="premest"/>
        <Table />
      </section>
      <Spacer />
      <CallToAction />
      <Spacer/>
    </div>
  );
}

export default App;
