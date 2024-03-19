import logo from './logo.svg';
import './App.css';
import { ObstacleDetection } from './components/ObstacleDetection';
import {ObstacleDetails} from './pages/ObstacleDetails';
import { MyContextProvider } from './context/MyContext';


import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import { HomePage } from "./pages/Homepage";

import { NavigationBar } from "./components/NavigationBar";


function App() {
  return (
    <Router>
          <MyContextProvider>
            <ObstacleDetection />
            <NavigationBar />
            <Routes>
              <Route element={<HomePage />} path="/" />
              <Route element={<ObstacleDetails/>} path="/obstacle_details/:id"/>
            </Routes>
          </MyContextProvider>
    </Router>
  );
}

export default App;
