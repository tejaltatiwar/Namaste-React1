import React, { Component } from "react";
import ReactDOM from "react-dom/client";
/**
 * Header
 *  -logo
 *  -nav items
 * body
 *  -search
 *  -RestaurantCard
 *      -img
 *      -name of res, star rating,cuisine,delivery time
 * footer
 *  -copyright
 *  -links
 *  -address
 *  -contact
 */

//making Header
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQQ9W98Mg2_uVUCWTJY_WkT0adfjOEXCvHRQ&s"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const RestaurantCard = () => {
  return (
    <div className="res-card">
      
      <img className="res-logo" src="https://b.zmtcdn.com/data/dish_photos/453/29862852508e5ae91867ce975c264453.jpg"></img>
      <h3> Meghana Foods</h3>
      <h4>Biryani,North Indian,Asian</h4>
      <h4>4.4 Stars</h4>
      <h4>38 minutes</h4>
    </div>
  );
};
//making body component
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {/* make separate RestaurantCard component becz we have multiple cards*/}
        <RestaurantCard></RestaurantCard>
      </div>
    </div>
  );
};

//making functional component
const AppLayout = () => {
  return (
    <div className="app">
      <Header></Header>
      <Body></Body>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />); //way to render react component
