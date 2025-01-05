import React from "react";
import Slider from "react-slick";
import style from "../../styles/CityOffer/Offer.module.css";
import logo from "../../assets/image.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Offer() {
  const offers = [
    {
      id: 1,
      location: "Tokyo",
      name: "Parfaiteria Bel",
      rating: 4.5,
      reviews: 120,
    },
    {
      id: 2,
      location: "Kyoto",
      name: "Sweets Delight",
      rating: 4.8,
      reviews: 80,
    },
    {
      id: 3,
      location: "Osaka",
      name: "Café Sakura",
      rating: 4.7,
      reviews: 95,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "20px",
    className: "center",
    focusOnSelect: true,
    arrows: false,
  };

  return (
    <Slider {...settings}>
      {offers.map((offer) => (
        <div key={offer.id} className={style.Container}>
          <div className={style.BoxContainer}>
            <div className={style.BoxTop}>
              <div className={style.Header}>
                <div className={style.logo}>
                  <img src={logo} alt="logo" className={style.logo} />
                </div>
                <div className={style.CloseBtn}>X</div>
              </div>
              <div className={style.DetailsContainer}>
                <div className={style.NameTag}>{offer.location}</div>
                <div className={style.NameText}>{offer.name}</div>
                <div className={style.RatingContainer}>
                  <div className={style.RatingTab}>
                    <div className={style.Star}>⭐</div>
                    <div className={style.Rating}>{offer.rating}</div>
                  </div>
                  <div className={style.ReviewsText}>
                    {offer.reviews} reviews
                  </div>
                </div>
                <div className={style.Button}>See More</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
