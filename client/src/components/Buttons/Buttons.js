import React from "react";
import Button from "react-bootstrap";
import * as ReactBootStrap from "react-bootstrap";
export const GoToCardInfoBtn = () => {
  return (
    <ReactBootStrap.Button
      className="go-to-card-info-button"
      variant="outline-danger mr-2"
      size="lg"
      href="/card-info"
    >
      Pay Now
    </ReactBootStrap.Button>
  );
};
export const GoToMyOrdersBtn = () => {
  return (
    <ReactBootStrap.Button
      className="go-to-my-orders-btn"
      variant="outline-danger mr-2"
      size="lg"
      href="/my-orders"
    >
      Cancel
    </ReactBootStrap.Button>
  );
};
export const BackToMenuBtn = () => {
  return (
    <ReactBootStrap.Button
      className="back-to-menu-button"
      variant="outline-danger mr-2"
      size="lg"
      href="/menu"
    >
      Back To Menu
    </ReactBootStrap.Button>
  );
};

export const PlaceOrderBtn = () => {
  return (
    <ReactBootStrap.Button
      className="place-order-button"
      variant="outline-success ml-2"
      size="lg"
      href="/view-check"
    >
      Place Order
    </ReactBootStrap.Button>
  );
};