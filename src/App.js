import React from 'react';
import './App.css';

import { BrowserRouter, Link, Route} from "react-router-dom"
import Header from "./zoom/Header"
import HomePage from "./zoom/Home"
import MeetingPage from "./zoom/Meeting"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header/>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/meeting/:id" component={MeetingPage}/>
      </div>
    </BrowserRouter>
  
  );
}

export default App;
