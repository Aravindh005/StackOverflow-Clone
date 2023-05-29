import {BrowserRouter as Router} from "react-router-dom"
import React, { useEffect } from "react";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import AllRoutes from "./AllRoutes";
import { fetchAllQuestions } from "./actions/question";
import { useDispatch } from "react-redux";

function App() {

  const dispatch=useDispatch();
  useEffect(()=>{
     dispatch(fetchAllQuestions())
  }, [dispatch ])
  return (
    <div className="App">
    <Router>
       <Navbar/>
       <AllRoutes></AllRoutes>
    </Router>
      
    </div>
  );
}

export default App;
