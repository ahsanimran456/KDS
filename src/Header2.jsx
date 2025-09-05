import React from "react";
import "./h.css";

const Header2 = () => {
  return (
    <div className="header-container">
      {/* Left Section */}
      <div className="header-left">
        <span className="chip mint">All <b>13</b></span>
        <span className="chip blue">Dine-In <b>5</b></span>
        <span className="chip orange">Home Delivery <b>7</b></span>
        <span className="chip pink">Food Panda <b>2</b></span>
      </div>

      {/* Middle Section (scrollable categories) */}
      <div className="header-mid">
        <span className="chip green">All <b>67</b></span>
        <span className="chip green">BAR <b>7</b></span>
        <span className="chip green">BBQ <b>24</b></span>
        <span className="chip green">CHI <b>7</b></span>
        <span className="chip green">C&F <b>14</b></span>
        <span className="chip green">K&H <b>4</b></span>
        <span className="chip green">TAN <b>11</b></span>
        <span className="chip green">Extra 1 <b>9</b></span>
        <span className="chip green">Extra 2 <b>12</b></span>
        <span className="chip green">Extra 3 <b>15</b></span>
      </div>

      {/* Right Section */}
      <div className="header-right">
        <button className="btn">Order For Dispatch</button>
        <button className="btn">Order For Ready</button>
        <button className="btn">Search Order</button>
        <button className="btn">Search Table</button>
        <button className="btn btn-green">Undo Process</button>
        <button className="icon-btn">🔔</button>
        <button className="icon-btn">⟳</button>
      </div>
    </div>
  );
};

export default Header2;
