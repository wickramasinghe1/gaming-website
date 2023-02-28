import React from 'react';
import { Route, Routes } from 'react-router-dom';

import HomeScreen from '../views/HomeScreen';
import LoginScreen from '../views/LoginScreen';
import GameScreen from '../views/GameScreen';

export default function RootRouter() {
  return (
    <Routes>
      <Route path='/' element={<HomeScreen/>}/>
      <Route path='/login' element={<LoginScreen/>}/>
      <Route path='/games' element={<GameScreen/>}/>
    </Routes>
  )
}
