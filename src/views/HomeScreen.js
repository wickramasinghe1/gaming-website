import React, {useEffect, useState} from 'react'
import GameCard from '../components/GameCard';
import ImageSlider from '../components/ImageSlider'
import Loader from '../components/LoaderConfig';
import TopCustomNavBar from '../components/TopCustomNavBar'
import '../css/HomeScreen.css';
import axios from "axios";
import {baseUrl, getAllGameUrl} from "../Config/urlConfig";
import moment from "moment/moment";

export default function HomeScreen() {

    const [value, setValue] = useState([]);

    useEffect( () => {
        getAllGamesHandler()
    }, [])

    const getAllGamesHandler = () => {
        axios.get(baseUrl + getAllGameUrl)
            .then(function (response) {
                // handle success
                console.log(response);
                if (!response.data.result) {
                    alert("Games not Found! Please try again laser.")
                } else {
                    console.log("\n\n");
                    console.log(response.data.result);
                    setValue(response.data.result)
                }
            })
            .catch(function (error) {
                // handle error
                alert("[500] Internal Server Error! - " + error)
            })
    }

  return (
    <>
      <TopCustomNavBar />
      <br/>
      <br/>
      <br/>
      <div className='--main-container'>
        <ImageSlider/>
        <br/>

        <h2 style={{textAlign: 'center'}}>Welcome to the latest game platform in Srilanka.</h2>
        <br/>

        <h3 style={{color: 'blue'}}>Upcoming Games</h3>


        <div className='--grid-container'>
         {/*get all games*/}
            {value?.map((item, index) =>  <GameCard imageUrl={item?.imageUrl}  name={item?.gameName} date={moment(item?.gameDate).format('ll')}/>)}

        </div>
      </div>

      <Loader isLoading={false}/>
    </>
  )
}
