import React, { useEffect, useState } from "react";
import WeeklyDealsItem from "../weeklyDealsItem/WeeklyDealsItem";
import "./WeeklyDeals.css";
import Container from "react-bootstrap/Container";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import 'swiper/css/navigation';


const SlideNextButton = () => {
  const swiper = useSwiper();

  return <button onClick={() => swiper.slideNext()}>{">"}</button>;
};
const SlidePreviousButton = () => {
  const swiper = useSwiper();

  return <button onClick={() => swiper.slidePrev()}>{"<"}</button>;
};

const WeeklyDeals = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    console.log(items);
  }, [items]);

  useEffect(() => {
    fetch(`http://localhost:3001/weekly/`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, []);

  return (
    <Container className="weeklyContainer">
      <div className="weeklyDealsContainer">
        <h2 className="title">Weekly Deals</h2>
        <p>I'm a paragraph. Click here to add your own text and edit me.</p>
        <div className="weeklyDealsSwiperContainer">
          {/* <SlidePreviousButton /> */}
          <Swiper
            loop={false}
            navigation={true}
            slidesPerView={4}
            spaceBetween={4}
            className="mySwiper"
            modules={[Navigation]}
            breakpoints={{
              "@0.23": {
                slidesPerView: 1,
                spaceBetween: 4,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
          >
            <div>
              <div className="weeklyDealsItems">
                {items.map((item) => (
                  <SwiperSlide>
                    <WeeklyDealsItem item={item} />
                  </SwiperSlide>
                ))}
              </div>
            </div>
          </Swiper>
          {/* <SlideNextButton /> */}
        </div>
      </div>
    </Container>
  );
};
export default WeeklyDeals;
