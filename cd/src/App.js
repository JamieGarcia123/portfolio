import './App.css';
import * as React from 'react';
import Header from "./components/header/header"
import Footer from "./components/footer/footer"
import { Outlet } from 'react-router';
import { Helmet, HelmetProvider } from 'react-helmet';
import ogImage from "./assests/images/cooltechbg.webp";

const App = () => {
  return (
    <>
      <Helmet>
      <meta property="og:image" content={ogImage}/>
      </Helmet>
      <div className="App">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
