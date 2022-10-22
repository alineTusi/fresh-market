import React, { useEffect, useState } from "react";
import WeeklyDealsItem from "../weeklyDealsItem/WeeklyDealsItem";
import './WeeklyDeals.css'
import Container from 'react-bootstrap/Container'


const WeeklyDeals = () => {
    const [items, setItems] = useState([{}, {}]);
    useEffect(() =>{
        console.log(items)
    }, [items])

    useEffect(() =>{
        fetch(`http://localhost:3001/weekly/`)
      .then((response) => response.json())
      .then((json) => setItems(json));
    }, [])

          return (
            <Container className="weeklyContainer">
                 <div className="weeklyDealsContainer">
                <h2 className="title">Weekly Deals</h2>
                <p>I'm a paragraph. Click here to add your own text and edit me.</p>
                <div className='weeklyDealsItems'>
                    {items.map(item => (
                        <WeeklyDealsItem item={item}/>
                    ))}
                </div>
            </div>
            </Container>
           
            ) 
}
export default WeeklyDeals;