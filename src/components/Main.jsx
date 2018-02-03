import React, { } from 'react';
import styled, {ThemeProvider} from 'styled-components';
import Global from './Global.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Work from './pages/Work.jsx';

class Main extends React.Component {

  render() {
    return (
      <main className="main">
          <About></About>
          <Work></Work>
          <Contact></Contact>
      </main>
    );
  }
};

export default Main;