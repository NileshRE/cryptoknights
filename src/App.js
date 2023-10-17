import React from "react";
import {Routes, Route, Link} from "react-router-dom";
import { Navbar, Homepage, Exchanges, CryptoKnights, CryptoDetails, News, Footer } from "./Components"
import './App.css'

const App = () => {
  return (
    <div>
          <Navbar />
            <div>
              <Routes>
                <Route exact path="/" Component={Homepage} />
                <Route exact path="/exchanges" Component={Exchanges} />
                <Route exact path="/cryptoKnights" Component={CryptoKnights} />
                <Route exact path="/cryptoDetails/:coinId" Component={CryptoDetails} /> 
                <Route exact path="/news" Component={News} /> 
              </Routes>
          </div>
          <Footer />
    </div>
  );
}

export default App;
