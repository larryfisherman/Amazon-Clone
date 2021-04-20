import React from "react";
import Product from "./Product";
import Slider from './Slider'

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__container__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/48/PL-hq/2021/img/Home/XCM_Manual_ORIGIN_1315528_PL_pl_home_april_1_3771017_1500x600_2X._CB655803445_.jpg"
          alt=""
        />
        <Slider/>
        <div className="home__container__row">
          <Product
            id="123123"
            title="The lean startup"
            price={29.99}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            }
            rating={5}
          />
          <Product
            id="321321"
            title="HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch IPS Display (1080p)"
            price={169.99}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/91fAU6mxFsL._AC_SL1500_.jpg"
            }
            rating={5}
          />
        </div>
        <div className="home__container__row">
          <Product
            id="23232"
            title="TomCare Cube Storage 12-Cube Bookshelf Closet "
            price={52.99}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/51f8uV3i%2BVL._AC_SL1196_.jpg"
            }
            rating={5}
          />
          <Product
            id="767676"
            title="Amazon Basics Double Braided Nylon Lightning to USB Cable"
            price={7.99}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/81K%2B1MCVhML._AC_SL1500_.jpg"
            }
            rating={3}
          />
          <Product
            id="56454"
            title="Amazon Basics L-Shape Computer Desk"
            price={129.99}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/71-BBs9maRL._AC_SL1500_.jpg"
            }
            rating={4}
          />
        </div>
        <div className="home__container__row">
          <Product
            id="58483"
            title="Amazon Basics Edge Free Projector Screen"
            price={69.99}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/91-K533J3nL._AC_SL1500_.jpg"
            }
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
