import React from 'react';
import Header from './Header';
import Spacer from "./Spacer";
import Title from './Title';
import Image from './Image';
import Video from './Video';
import Text from './Text'; 
import Table from './Table';
import CallToAction from './CallToAction';
import Footer from './Footer';
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
        <Image />
        <Text isAbout="premest"/>
        <Table />
      </section>
      <Spacer />
      <div className="cta-section">
        <CallToAction />
      </div>
      <Spacer/>
      <Footer />
    </div>
  );
}

export default App;
