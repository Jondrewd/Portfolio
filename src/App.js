import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

import './App.css'
import Home from './components/pages/Home';
import Skills from './components/pages/Skills';
import Navbar from './components/layout/Navbar';
import Aboutme from './components/pages/Aboutme';
import Projects from './components/pages/Projects';
import Container from './components/layout/Container';
import Footer from './components/layout/Footer';

function App() {
  return (
    <body>
      <div className='planoDeFundo'></div>
        <nav>
            <div className='planeta_1'></div>
            <div className='planeta_2'></div>
            <div className='planeta_3'></div>
            <div className='planeta_4'></div>
            <div className='planeta_5'></div>
            <div className='planeta_6'></div>
            
          </nav>
      <div >
        <Router>
          <Navbar/>
        
          <Container>
            <Routes className='router'>
              <Route path='/' exact element={<Home/>}/>
              <Route path='/skills' exact element={<Skills/>}/>
              <Route path='/aboutme' exact element={<Aboutme/>}/>
              <Route path='/projects' exact element={<Projects/>}/>
            </Routes>
          </Container>
          <Footer/>
        </Router>
      </div>
    </body>
  );
}

export default App;
