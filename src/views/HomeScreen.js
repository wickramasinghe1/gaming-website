import React from 'react'
import GameCard from '../components/GameCard';
import ImageSlider from '../components/ImageSlider'
import TopCustomNavBar from '../components/TopCustomNavBar'
import '../css/HomeScreen.css';

export default function HomeScreen() {
  return (
    <>
      <TopCustomNavBar />
      <div className='--main-container'>
        <ImageSlider/>
        <br/>

        <h2 style={{textAlign: 'center'}}>Welcome to the latest game platform in Srilanka.</h2>
        <br/>

        <h3 style={{color: 'blue'}}>Upcoming Games</h3>


        <div className='--grid-container'>
            <GameCard  name={'Game Name 01 I have a functional react component with text that is displayed from a mapped array. How can I limit the character count of {item.description} to 250 characters? I have a functional react component with text that is displayed from a mapped array. How can I limit the character count of {item.description} to 250 characters?'} date={'2023-02-28'}/>
            <GameCard  name={'Game Name 01'} date={'2023-02-28'}/>
            <GameCard  name={'Game Name 02'} date={'2023-02-27'}/>
            <GameCard  name={'Game Name 03'} date={'2023-02-26'}/>
            <GameCard  name={'Game Name 04'} date={'2023-02-25'}/>
            <GameCard  name={'Game Name 05'} date={'2023-02-24'}/>
            <GameCard  name={'Game Name 06'} date={'2023-02-23'}/>
            <GameCard  name={'Game Name 07'} date={'2023-02-22'}/>
        </div>
      </div>
    </>
  )
}
