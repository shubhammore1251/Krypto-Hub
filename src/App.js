import "./_App.scss";
import React, { useEffect,useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout} from "antd";

import {
  Navbar,
  HomePage,
  News,
  Footer,
  CryptoCurrencies,
  CryptoDetails,
} from "./components";


const App = () => {
  

  const [menu, setMenu] = useState(true);
  
  
  useEffect(() => {
    const media = window.matchMedia("(max-width: 992px)");
    
    if (media.matches) {
      setMenu(false);
    }
    else{
      setMenu(true);
    }
  }, [])


  // const handleToggle = () => setMenu(value => !value);

  return (
    <div className="app">
      <div className="app-navbar">
        <Navbar menu={menu} setMenu={setMenu}/>
      </div>

      <div className="app-mainbdy">
        <Layout>
          <div className="routes">
            <Routes>
              <Route exact path="/" element={<HomePage />} />

          
              <Route
                exact path="/cryptocurrencies"
                element={<CryptoCurrencies/>}
              />

              <Route exact path="/crypto/:coinId" element={<CryptoDetails/>} />

              <Route exact path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>

        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
