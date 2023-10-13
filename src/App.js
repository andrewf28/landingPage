import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AmplifyProvider } from '@aws-amplify/ui-react'
import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css'



import Home from "./pages/Home";
import ClientForm from "./pages/ClientForm"
import CreatorForm from "./pages/CreatorForm"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/creator_form" element={<CreatorForm/>}></Route>
        <Route path="/client_form" element={<ClientForm/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
