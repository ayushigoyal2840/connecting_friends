import './App.css';
import React  from 'react';
import {
  BrowserRouter,
  Routes,
  Route,

  // Switch
} from "react-router-dom";
// import Connect from './component/Join/Connect';
import Join from './component/Join/Join'
// import { browserHistory } from 'react-router'
import Chat from './component/chat/Chat';





function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route exact path='/' element={ <Join />} />
      <Route exact path='/chat' element={ <Chat />} />

     </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
