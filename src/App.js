import React, {Component} from 'react';

import './App.css';

import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Footer from './components/Footer';

class App extends Component {
    render () {
        return (
            <div className="App">
              <Home/>
              <Portfolio />
              <Services />
              <Footer />
          </div>
        );
    }
}

export default App;