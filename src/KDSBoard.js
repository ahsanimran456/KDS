import RestaurantCard from "./RestaurantCard"
// import "./Dashboard.css"
import { type } from "@testing-library/user-event/dist/type"

const Dashboard = () => {
  const cardsData = [
    {
      orderType: "Dine-in | 45",
      orderNumber: "103",
      type: "dinein",
      customerName: "SANA",
      timeStamps: ["00:08", "00:18", "00:05"],
      theme: "blue",
      foodItems: [
        { quantity: 1, name: "Chicken Karahi", ready: false },
        { quantity: 2, name: "Garlic Naan", ready: true },
        { quantity: 1, name: "Fresh Lime", ready: false },
      ],
    },
    {
      orderType: "Food Panda | 48",
      orderNumber: "95",
      type: "foodpanda",
      customerName: "AHMED",
      timeStamps: ["00:12", "00:22", "00:08"],
      theme: "pink",
      foodItems: [
        { quantity: 1, name: "Biryani Special", ready: false },
        { quantity: 1, name: "Raita", ready: true },
        { quantity: 2, name: "Cold Drink", ready: false },
      ],
    },
    {
      orderType: "Pickup | 48",
      orderNumber: "95",
      type: "pickup",
      customerName: "AHMED",
      timeStamps: ["00:12", "00:22", "00:08"],
      theme: "pink",
      foodItems: [
        { quantity: 1, name: "Biryani Special", ready: false },
        { quantity: 1, name: "Raita", ready: true },
        { quantity: 2, name: "Cold Drink", ready: false },
      ],
    },
    {
      orderType: "Pickup | 48",
      orderNumber: "95",
      type: "pickup",
      customerName: "AHMED",
      timeStamps: ["00:12", "00:22", "00:08"],
      theme: "pink",
      foodItems: [
        { quantity: 1, name: "Biryani Special", ready: false },
        { quantity: 1, name: "Raita", ready: true },
        { quantity: 2, name: "Cold Drink", ready: false },
      ],
    },
    {
      orderType: "Dine-in | 77",
      type: "dinein",
      orderNumber: "113",
      customerName: "GHULAM",
      timeStamps: ["02:11", "02:30", "01:58"],
      theme: "blue",
      foodItems: [
        { quantity: 1, name: "Hot & Sour Soup (Single)", ready: false },
        { quantity: 1, name: "Club Sandwich", ready: false },
        { quantity: 1, name: "Shahi Catak Boti", ready: false },
        // { quantity: 1, name: "Dragon Chicken", ready: true },
        // { quantity: 1, name: "Classic Beef Burger", ready: false },
        // { quantity: 1, name: "Kung Pao Chicken", ready: false },
      ],
    },
    {
      orderType: "Food Panda | 48",
      orderNumber: "95",
      type: "foodpanda",
      customerName: "AHMED",
      timeStamps: ["00:12", "00:22", "00:08"],
      theme: "pink",
      foodItems: [
        { quantity: 1, name: "Biryani Special", ready: false },
        { quantity: 1, name: "Raita", ready: true },
        { quantity: 2, name: "Cold Drink", ready: false },
      ],
    },
    {
      orderType: "Dine-in | 52",
      orderNumber: "122",
      type: "dinein",
      customerName: "FAROOQ",
      timeStamps: ["00:15", "00:25", "00:10"],
      theme: "blue",
      foodItems: [
        { quantity: 1, name: "Crispy Zinger Burger", ready: false },
        { quantity: 1, name: "Malai Tikka", ready: true },
        { quantity: 1, name: "Creamy Kabab", ready: false },
      ],
    },
    {
      orderType: "Pickup | 48",
      orderNumber: "95",
      type: "pickup",
      customerName: "AHMED",
      timeStamps: ["00:12", "00:22", "00:08"],
      theme: "pink",
      foodItems: [
        { quantity: 1, name: "Biryani Special", ready: false },
        { quantity: 1, name: "Raita", ready: true },
        { quantity: 2, name: "Cold Drink", ready: false },
      ],
    },
    {
      orderType: "Dine-in | 45",
      orderNumber: "103",
      type: "dinein",
      customerName: "SANA",
      timeStamps: ["00:08", "00:18", "00:05"],
      theme: "blue",
      foodItems: [
        { quantity: 1, name: "Chicken Karahi", ready: false },
        { quantity: 2, name: "Garlic Naan", ready: true },
        { quantity: 1, name: "Fresh Lime", ready: false },
      ],
    },
     {
      orderType: "Food Panda | 48",
      orderNumber: "95",
      type: "foodpanda",
      customerName: "AHMED",
      timeStamps: ["00:12", "00:22", "00:08"],
      theme: "pink",
      foodItems: [
        { quantity: 1, name: "Biryani Special", ready: false },
        { quantity: 1, name: "Raita", ready: true },
        { quantity: 2, name: "Cold Drink", ready: false },
      ],
    },
    {

      orderType: "Dine-in | 52",
      orderNumber: "122",
      type: "dinein",
      customerName: "FAROOQ",
      timeStamps: ["00:15", "00:25", "00:10"],
      theme: "blue",
      foodItems: [
        { quantity: 1, name: "Crispy Zinger Burger", ready: false },
        { quantity: 1, name: "Malai Tikka", ready: true },
        { quantity: 1, name: "Creamy Kabab", ready: false },
      ],
    },
    {
      orderType: "Home Delivery | 71",
      orderNumber: "89",
      type: "homedelivery",
      customerName: "SARA",
      timeStamps: ["00:15", "00:25", "00:10"],
      theme: "orange",
      foodItems: [
        { quantity: 2, name: "Plain Naan", ready: false },
        { quantity: 1, name: "Deal 13", ready: true },
        { quantity: 1, name: "Online Deal 08", ready: true },
        { quantity: 1, name: "Classic Beef Burger", ready: false },
        { quantity: 1, name: "Chicken Steak", ready: false },
      ],
    },
    {
      orderType: "Dine-in | 45",
      orderNumber: "103",
      type: "dinein",
      customerName: "SANA",
      timeStamps: ["00:08", "00:18", "00:05"],
      theme: "blue",
      foodItems: [
        { quantity: 1, name: "Chicken Karahi", ready: false },
        { quantity: 2, name: "Garlic Naan", ready: true },
        { quantity: 1, name: "Fresh Lime", ready: false },
      ],
    },
    {
      orderType: "Food Panda | 48",
      orderNumber: "95",
      type: "foodpanda",
      customerName: "AHMED",
      timeStamps: ["00:12", "00:22", "00:08"],
      theme: "pink",
      foodItems: [
        { quantity: 1, name: "Biryani Special", ready: false },
        { quantity: 1, name: "Raita", ready: true },
        { quantity: 2, name: "Cold Drink", ready: false },
      ],
    },
    {
      orderType: "Pickup | 48",
      orderNumber: "95",
      type: "pickup",
      customerName: "AHMED",
      timeStamps: ["00:12", "00:22", "00:08"],
      theme: "pink",
      foodItems: [
        { quantity: 1, name: "Biryani Special", ready: false },
        { quantity: 1, name: "Raita", ready: true },
        { quantity: 2, name: "Cold Drink", ready: false },
      ],
    },
  ]

  return (
    <div className="dashboard">
      <div className="dashboard-grid">
        {cardsData.map((card, index) => (
          <RestaurantCard
            key={index}
            orderType={card.orderType}
            orderNumber={card.orderNumber}
            customerName={card.customerName}
            timeStamps={card.timeStamps}
            foodItems={card.foodItems}
            theme={card.theme}
            type={card.type}
          />
        ))}
      </div>
    </div>
  )
}

export default Dashboard
