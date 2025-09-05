import { FaClock, FaUser, FaUtensils, FaCheck, FaHome, FaTruck, FaStopwatch } from "react-icons/fa"
import "./RestaurantCard.css"
import React from "react"
import { IoMdArrowDropright } from "react-icons/io"
import { BiSolidDish } from "react-icons/bi"
import { MdOutlineTableRestaurant } from "react-icons/md"
import { SiFoodpanda } from "react-icons/si"
import { IoHomeSharp } from "react-icons/io5"
import { TiHome } from "react-icons/ti"
import { TbBowlSpoon, TbPercentage } from "react-icons/tb"
import { RiDivideLine, RiPercentFill, RiPercentLine } from "react-icons/ri";

const RestaurantCard = ({ orderType, orderNumber, customerName, timeStamps, foodItems, theme = "blue", type = "homedelivery" }) => {
    const getHeaderIcon = () => {
        switch (type.toLowerCase()) {
            case "dinein":
                return <MdOutlineTableRestaurant size={24} className="header-icon" />
            case "homedelivery":
                return <TiHome size={20} className="header-icon" />
            case "foodpanda":
                return <SiFoodpanda size={20} className="header-icon" />
            case "pickup":
                return <TbBowlSpoon size={20} className="header-icon" />
            default:
                return <TbBowlSpoon size={20} className="header-icon" />
        }
    }

    return (
        <div className={`restaurant-card ${theme} ${type}`}>
            <div className="card-header-divider"></div>
            <div className="restaurant-card-inner">
                <div className="card-header">
                    <div className="header-left">
                        {getHeaderIcon()}
                        <span>{orderType}</span>
                    </div>
                    <div className="header-right">
                        <span className="order-number">{orderNumber}</span>
                    </div>
                </div>
                <div className="more-iinner">
                    <div className="card-header-divider"></div>
                    <div className="each-more-inner">
                        {/* Customer Name */}
                        <div className="customer-name">
                            <h5>{customerName}</h5>
                        </div>

                        {/* Time Stamps */}
                        <div className="time-stamps">
                            {timeStamps.map((time, index) => (
                                <React.Fragment key={index}>
                                    <div key={index} className="time-item">
                                        {/* <FaClock className="time-icon" /> */}
                                        <span className="d-flex gap-1 align-items-center">{index === timeStamps.length - 1 && <FaStopwatch color="#000000" />} {time} </span>
                                    </div>
                                    {index === 0 && <IoMdArrowDropright />}
                                    {/* {index < timeStamps.length - 1 && <div className="time-divider"> </div>} */}
                                    {index === timeStamps.length - 2 && (
                                        <div className="time-divider"></div>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>

                        {/* Food Items List */}
                        <div className="food-items">
                            <div className="card-left-show"></div>

                            {foodItems.map((item, index) => (
                                <div key={index} className="food-item">
                                    <div className="item-info">
                                        <span className="item-quantity">{item.quantity}</span>
                                        <span className="item-name">{item.name}</span>
                                    </div>
                                    <div className="d-flex gap-2 align-items-center">
                                        {!item?.ready ? null :  
                                        <div className="item-icon-half ">
                                            {<TbPercentage size={22} color="fff" />}
                                        </div>
                                        }
                                        <div className="item-icon">
                                            {item?.ready ? <FaCheck color="000000" size={17} /> : <BiSolidDish size={17} color="000000" />}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Action Button */}
                <div className="action-button">
                    <button className="ready-all-btn">Ready All</button>
                </div>

            </div>
        </div>
    )
}

export default RestaurantCard
