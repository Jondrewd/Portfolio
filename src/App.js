import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

import Home from './components/pages/Home';
import Skills from './components/pages/Skills';

function App() {
  return (
    <Router>
      <ul>
        <Link to='/'> Home</Link>
        <Link to='/skills'> Skills</Link>
      </ul>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/skills' exact element={<Skills/>}/>
      </Routes>
    </Router>
  );
}

export default App;
