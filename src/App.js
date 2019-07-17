import React from 'react';
import './App.css';

import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';

function App () {
    return (
      	<div className="App">
        	  <Home id='home' slogan='Home' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, assumenda!'/>
            <Portfolio />
            <Services />
			      <Footer />
		    </div>
  	);
}

export default App;
