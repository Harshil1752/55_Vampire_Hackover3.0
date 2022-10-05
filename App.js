import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cards from "./components/Cards";
import Pricing from "./components/Pricing";
import  Header  from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import New from "./components/New";
function App() {
  return (
   <div>
   <Navbar />
   <Header />
   <Cards />
   <Pricing />
   <Footer />
   </div>
  );
}

export default App;
