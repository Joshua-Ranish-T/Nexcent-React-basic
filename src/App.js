import React from "react";
import Header from "./Components/Header";
import "./Style.scss";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import "./Responsive.scss";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Footer/>
    </>
  );
};

export default App;
