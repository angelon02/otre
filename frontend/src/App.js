import React from 'react';
import AppAppBar from './components/AppAppBar';
import Footer from './components/Footer';
import Latest from './components/Latest';
import Main from './components/MainContent'
import Sitemark from './components/SitemarkIcon';


function App() {
  return (
    <div>
      <AppAppBar />
      <Footer />
      <Latest />
      <Main />
      <Sitemark />
    </div>
  );
}

export default App;
