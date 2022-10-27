import React from "react";
import './Main.css'
import WeeklyDeals from "../weeklyDeals/WeeklyDeals";
import Grab from "../grabAndGo/GrabAndGo";
import Delivery from "../delivery/Delivery";
import BackgroundCarousel from "../carousel/Carousel";


const Main = () =>{
    return(
        <>
        <BackgroundCarousel/>
        <WeeklyDeals />
        <Grab />
        <Delivery />
        
        </>
    )
}
export default Main;