import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Overview from './Components/Overview';
import Order_placed from './Components/Order_placed';
import Guide from './Components/Guide';
import Travellers from './Components/Traveller';
import GuideDetails from './Components/GuideDetails';
// import Hook from './Hook'

function App() {


  return (
    <div className='App'>
      <div className='flex'>
        <div className=' bg-[#363740]'><Navbar /></div>
        <div className='w-full'>
          <Header />
          <Router>
            <Routes>
              <Route exact path='/' element={<Overview />} />
              <Route exact path='/Orders' element={<Order_placed />} />
              <Route exact path='/Guides' element={<Guide />} />
              <Route exact path='/Travellers' element={<Travellers />} />
            </Routes>
          </Router>
        </div>
      </div>


      {/* <GuideDetails/> */}

    </div>
  );
}

export default App;
