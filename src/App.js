import './App.css';
import Dashboard from './Dashboard';
// import Navbar from './Navbar';
import {Routes, Route} from 'react-router-dom'
import Orders from './Orders';


function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path='/' element={<Navbar/>}></Route> */}
        <Route path='/' element={<Dashboard/>}></Route>
        <Route path='/order' element={<Orders/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
