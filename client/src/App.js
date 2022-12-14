
import './App.css';
import React, { useState, useEffect } from 'react';
import MovieForm from './components/MovieForm';
import MovieList from './components/MovieList';
import OneMovie from './components/OneMovie';
import Update from './components/Update';
import NavBar from './components/NavBar';
import Register from './components/Register';
import Login from './components/Login';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { io } from 'socket.io-client'
function App() {
  const [socket] = useState(() => io(':8000'))
  useEffect(() => {
    socket.on('connection', () => {
      console.log('connected to server!')
    })
    return () => socket.disconnect(true)
  }, [])
  return (
    <div className="App">
      {/* <MovieForm/>
      <MovieList/> */}
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/form' element={<MovieForm />} />
          <Route path='/list' element={<MovieList socket={socket} />} />
          <Route path='/onemovie/:_id' element={<OneMovie socket={socket} />} />
          <Route path='/edit/movie/:_id' element={<Update />} />
          <Route path='/register' element={<Register />} />
          <Route path='/' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
//What really brole my mind was that I didn't need to pass and lift state technically. Which in one sense makes sense because through the http request I'm grabbing that data, so I don't need to update it/left it if I'm pulling that data from somewhere else. In other words, the data is built in my component, but through it. I don't know what is industry standard, but the LMS has us doing lift
export default App;
