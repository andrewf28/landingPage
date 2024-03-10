import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AmplifyProvider } from '@aws-amplify/ui-react'
import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css'



import Home from "./pages/Home";
import Client from "./pages/Client"
import Creator from "./pages/Creator"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Blog from "./pages/Blog"
import Privacy from "./pages/Privacy";

import 
{
  NavBarHeader2,
  MarketingFooterBrand,
  CTASection
} from './ui-components'

function App() {
  
  return (
    <div className="container">
      <NavBarHeader2/>
      

      
      
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/creators" element={<Creator/>}></Route>
          <Route path="/clients" element={<Client/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/Blog" element={<Blog/>}></Route>
          <Route path="/privacy" element={<Privacy/>}></Route>

          
        </Routes>
      </Router>
      
      <MarketingFooterBrand/>
    </div>
  );
}

export default App;
