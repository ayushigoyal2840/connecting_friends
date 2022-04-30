import './App.css';
import React  from 'react';
import {
  BrowserRouter,
  Routes,
  Route,

  // Switch
} from "react-router-dom";
import Connect from './component/Join/Connect';
// import { browserHistory } from 'react-router'





function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={ <Connect />} />
     </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
