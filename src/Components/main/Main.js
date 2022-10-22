import React from "react";
import './Main.css'
import WeeklyDeals from "../weeklyDeals/WeeklyDeals";
import Grab from "../grabAndGo/GrabAndGo";
import Delivery from "../delivery/Delivery"
import Footer from "../footer/Footer";


// import background from './background.png';

const Main = () =>{
    return(
        <>
        <WeeklyDeals />
        <Grab />
        <Delivery />
        <Footer />
        </>
    )
}
export default Main;