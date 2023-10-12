import Display from "./components/Display"
import React from "react"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import DisplayForm from "./components/DisplayForm"

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Display />}/>
        <Route path="/display" element={<DisplayForm/>}/>
      </Routes>
    </Router>
      </>
  );
}

export default App;
