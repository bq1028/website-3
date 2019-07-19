import React from 'react';
import './App.css';

import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';
import Slider from './components/Services/Slider';

function App () {
    return (
      	<div className="App">
			  <Slider />
        	{/* <Home/>
            <Portfolio />
            <Services />
            <Footer /> */}
        </div>
  	);
}

export default App;
