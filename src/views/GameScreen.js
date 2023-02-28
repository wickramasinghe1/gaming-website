import React from 'react';
import GameLeftSidePanel from '../components/GameLeftSidePanel';
import GameRightSidePanel from '../components/GameRightSidePanel';
import TopNavBar from '../components/TopNavBar';
import '../css/GameScreen.css';

export default function GameScreen() {
  return (
    <>
      <TopNavBar/>
      <br/>
      <br/>
      <br/>

      <div className='-main-container'>
        <GameLeftSidePanel/>
        <GameRightSidePanel/>
      </div>

    </>
  )
}
