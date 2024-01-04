import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home';
import Skills from './components/pages/Skills';
import Navbar from './components/layout/Navbar';
import Aboutme from './components/pages/Aboutme';
import Projects from './components/pages/Projects';
import Container from './components/layout/Container';
import Contato from './components/pages/Contato';

function App() {
  return (
    <body>
        <div className='container'>
          <Router>
            <Navbar/>
            <Container>
              <Routes className='router'>
                <Route path='/' exact element={<Home/>}/>
                <Route path='/skills' exact element={<Skills/>}/>
                <Route path='/aboutme' exact element={<Aboutme/>}/>
                <Route path='/projects' exact element={<Projects/>}/>
                <Route path='/contato' exact element={<Contato/>}/>
              </Routes>
            </Container>
          </Router>
        </div>
    </body>
);}

export default App;
