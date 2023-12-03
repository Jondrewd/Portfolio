import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

import './App.css'
import Home from './components/pages/Home';
import Skills from './components/pages/Skills';
import Navbar from './components/layout/Navbar';
import Aboutme from './components/pages/Aboutme';
import Projects from './components/pages/Projects';

function App() {
  return (
    <body>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/skills' exact element={<Skills/>}/>
          <Route path='/aboutme' exact element={<Aboutme/>}/>
          <Route path='/projects' exact element={<Projects/>}/>
        </Routes>
      </Router>
    </body>
  );
}

export default App;
