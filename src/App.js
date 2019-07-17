import React from 'react';
import './App.css';

import Home from './comonents/Home/Home';
import SectionTitle from './comonents/SectionTitle/SectionTitle';
import Footer from './comonents/Footer/Footer';

function App() {
    return (
      	<div className="App">
        	<Home id='Home' slogan='aaaaaaaa' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, assumenda!'/>
			<div id='' className='slider'></div>
			
			<Footer />
		</div>
  	);
}

export default App;
