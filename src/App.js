import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './App.css';
import './style.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Login from './NEW PROJ/Login';
import Signup from './NEW PROJ/Signup';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={< Login />}></Route>
          <Route exact path='/Login' element={< Login />}></Route>
          <Route exact path='/Signup' element={< Signup />}></Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
