import './App.css';
import * as React from 'react';
import Header from "./components/header/header"
import Footer from "./components/footer/footer"
import { Outlet } from 'react-router';


const App = () => {
  return (
    <><meta name="viewport" content="width=device-width, initial-scale=1"></meta><div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div></> 
  );
}

export default App;
