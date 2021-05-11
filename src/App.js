import React, { useState } from 'react';
import './App.css'
import {BrowserRouter, Route} from 'react-router-dom'
import Footer from './Components/Footer';
import Header from './Components/Header';
import Signin from './Components/Signin';
import Watchlist from './Components/Watchlist';
import Home from './Components/Home'
import Toprated from './Components/TopRated';
import Searchbox from './Components/SearchBox';

function App() {

  

  return (
    <div className="App">
    <BrowserRouter>
     <Header/>
     <Route exact path="/" component={Home} />
    <Route path="/watchlist" component={Watchlist} />
    <Route path="/signin" component={Signin} />
    <Route path="/toprated" component={Toprated} />
     <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
