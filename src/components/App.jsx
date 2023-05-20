import React from "react";
import Dropdown from "./Dropdown";
import Footer from "./Footer";
import Gif from "./Gif";
import LoginPage from "./LoginPage";
import EssentialLinks from "./EssentialLinks";



function App() {

  return <div>
    <center>
      <Gif />
      <LoginPage />
    </center>
    <EssentialLinks />
    <center>
      <Dropdown />
      <Footer />
    </center>
   


  </div>;
}

export default App;