import RestaurantCard from "./RestaurantCard"
import "./Dashboard2.css"
import { type } from "@testing-library/user-event/dist/type"

const Dashboard2 = () => {
  const cardsData = [
    {
      orderType: "Dine-in | 45",
      orderNumber: "1",
      type: "dinein",
      customerName: "SANA",
      timeStamps: ["00:08", "00:18", "00:05"],
      theme: "blue",
      foodItems: [
        { quantity: 1, name: "Chicken Karahi", ready: false },
        { quantity: 2, name: "Garlic Naan", ready: true },
        { quantity: 1, name: "Fresh Lime", ready: false },
        { quantity: 1, name: "Fresh Lime", ready: false },
        { quantity: 1, name: "Fresh Lime", ready: false },
      ],
    },
    {
      orderType: "Food Panda | 48",
      orderNumber: "2",
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
      orderNumber: "3",
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
      orderNumber: "4",
      type: "pickup",
      customerName: "AHMED",
      timeStamps: ["00:12", "00:22", "00:08"],
      theme: "pink",
      foodItems: [
        { quantity: 1, name: "Biryani Special", ready: false },
        { quantity: 1, name: "Raita", ready: true },
        { quantity: 2, name: "Cold Drink", ready: false },
        { quantity: 1, name: "Raita", ready: true },
       
        { quantity: 1, name: "Raita", ready: true },
   
        { quantity: 2, name: "Cold Drink", ready: false },
      ],
    },
    {
      orderType: "Dine-in | 77",
      type: "dinein",
      orderNumber: "5",
      customerName: "GHULAM",
      timeStamps: ["02:11", "02:30", "01:58"],
      theme: "blue",
      foodItems: [
        { quantity: 1, name: "Hot & Sour Soup (Single)", ready: false },

      ],
    },
    {
      orderType: "Food Panda | 48",
      orderNumber: "6",
      type: "foodpanda",
      customerName: "AHMED",
      timeStamps: ["00:12", "00:22", "00:08"],
      theme: "pink",
      foodItems: [
        { quantity: 1, name: "Biryani Special", ready: false },
  
      ],
    },
    {
      orderType: "Dine-in | 52",
      orderNumber: "7",
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
      orderNumber: "8",
      type: "pickup",
      customerName: "AHMED",
      timeStamps: ["00:12", "00:22", "00:08"],
      theme: "pink",
      foodItems: [
        { quantity: 1, name: "Biryani Special", ready: false },
    
      ],
    },
    {
      orderType: "Dine-in | 45",
      orderNumber: "9",
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
      orderType: "Dine-in | 45",
      orderNumber: "10",
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
    // {
    //   orderType: "Dine-in | 45",
    //   orderNumber: "11",
    //   type: "dinein",
    //   customerName: "SANA",
    //   timeStamps: ["00:08", "00:18", "00:05"],
    //   theme: "blue",
    //   foodItems: [
    //     { quantity: 1, name: "Chicken Karahi", ready: false },
    //     { quantity: 2, name: "Garlic Naan", ready: true },
    //     { quantity: 1, name: "Fresh Lime", ready: false },
    //   ],
    // },
    // {
    //   orderType: "Dine-in | 45",
    //   orderNumber: "12",
    //   type: "dinein",
    //   customerName: "SANA",
    //   timeStamps: ["00:08", "00:18", "00:05"],
    //   theme: "blue",
    //   foodItems: [
    //     { quantity: 1, name: "Chicken Karahi", ready: false },
    //     { quantity: 2, name: "Garlic Naan", ready: true },
    //     { quantity: 1, name: "Fresh Lime", ready: false },
    //   ],
    // },
    // {
    //   orderType: "Dine-in | 45",
    //   orderNumber: "13",
    //   type: "dinein",
    //   customerName: "SANA",
    //   timeStamps: ["00:08", "00:18", "00:05"],
    //   theme: "blue",
    //   foodItems: [
    //     { quantity: 1, name: "Chicken Karahi", ready: false },
    //     { quantity: 2, name: "Garlic Naan", ready: true },
    //     { quantity: 1, name: "Fresh Lime", ready: false },
    //   ],
    // },
    // {
    //   orderType: "Dine-in | 45",
    //   orderNumber: "14",
    //   type: "dinein",
    //   customerName: "SANA",
    //   timeStamps: ["00:08", "00:18", "00:05"],
    //   theme: "blue",
    //   foodItems: [
    //     { quantity: 1, name: "Chicken Karahi", ready: false },
    //     { quantity: 2, name: "Garlic Naan", ready: true },
    //     { quantity: 1, name: "Fresh Lime", ready: false },
    //   ],
    // },
    // {
    //   orderType: "Dine-in | 45",
    //   orderNumber: "15",
    //   type: "dinein",
    //   customerName: "SANA",
    //   timeStamps: ["00:08", "00:18", "00:05"],
    //   theme: "blue",
    //   foodItems: [
    //     { quantity: 1, name: "Chicken Karahi", ready: false },
    //     { quantity: 2, name: "Garlic Naan", ready: true },
    //     { quantity: 1, name: "Fresh Lime", ready: false },
    //   ],
    // },
    {
      orderType: "Dine-in | 45",
      orderNumber: "16",
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
      orderType: "Dine-in | 45",
      orderNumber: "17",
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
      orderType: "Dine-in | 45",
      orderNumber: "18",
      type: "dinein",
      customerName: "SANA",
      timeStamps: ["00:08", "00:18", "00:05"],
      theme: "blue",
      foodItems: [
        { quantity: 1, name: "Chicken Karahi", ready: false },
        { quantity: 2, name: "Garlic Naan", ready: true },
        { quantity: 1, name: "Fresh Lime", ready: false },
        { quantity: 1, name: "Fresh Lime", ready: false },
        { quantity: 1, name: "Fresh Lime", ready: false },
      ],
    },
    {
      orderType: "Dine-in | 45",
      orderNumber: "19",
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
      orderType: "Dine-in | 45",
      orderNumber: "20",
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
      orderType: "Dine-in | 45",
      orderNumber: "21",
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
      orderType: "Dine-in | 45",
      orderNumber: "22",
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
      orderType: "Dine-in | 45",
      orderNumber: "22",
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
      orderType: "Dine-in | 45",
      orderNumber: "15",
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
      orderType: " Delivery | 71",
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
      orderType: " Delivery | 71",
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
      orderType: " Delivery | 71",
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
    {
      orderType: "Dine-in | 45",
      orderNumber: "22",
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
      orderType: "Dine-in | 45",
      orderNumber: "22",
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
      orderType: "Dine-in | 45",
      orderNumber: "15",
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
      orderType: " Delivery | 71",
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
      orderType: " Delivery | 71",
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
      orderType: " Delivery | 71",
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

export default Dashboard2
