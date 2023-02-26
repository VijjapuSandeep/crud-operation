import './App.css';
import Header from './Components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import List from './Components/List';
import Details from './Components/Details';
import Edit from './Components/Edit';

function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <hr />
        <Routes>
          <Route exact path='/' element={< List />}></Route>
          <Route exact path='/details' element={< Details />}></Route>
          <Route exact path='/edit' element={< Edit />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
