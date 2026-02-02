import mongoose from "mongoose";
import dotenv from "dotenv";
import MenuItem from "../models/MenuItem.js";
import Order from "../models/Order.js";
import connectDB from "../config/db.js";

dotenv.config();

const seedData = async () => {
  try {
    await connectDB();

    // Clear existing data
    await MenuItem.deleteMany();
    await Order.deleteMany();

    console.log("Existing data cleared");

    // Insert menu items
    const menuItems = await MenuItem.insertMany([
      {
        name: "Veg Burger",
        category: "Main Course",
        price: 120,
        ingredients: ["bun", "patty", "lettuce"],
        preparationTime: 10
      },
      {
        name: "Paneer Pizza",
        category: "Main Course",
        price: 250,
        ingredients: ["paneer", "cheese", "base"],
        preparationTime: 15
      },
      {
        name: "French Fries",
        category: "Appetizer",
        price: 90,
        ingredients: ["potato", "salt"],
        preparationTime: 5
      },
      {
        name: "Chocolate Brownie",
        category: "Dessert",
        price: 150,
        ingredients: ["chocolate", "flour"],
        preparationTime: 12
      },
      {
        name: "Cold Coffee",
        category: "Beverage",
        price: 110,
        ingredients: ["coffee", "milk"],
        preparationTime: 7
      }
    ]);

    console.log("Menu items seeded");

    // Insert orders
    await Order.insertMany([
  {
    orderNumber: `ORD-${Date.now()}-1`,
    items: [
      {
        menuItem: menuItems[0]._id,
        quantity: 2,
        price: 120
      }
    ],
    totalAmount: 240,
    customerName: "Amit",
    tableNumber: 3
  },
  {
    orderNumber: `ORD-${Date.now()}-2`,
    items: [
      {
        menuItem: menuItems[1]._id,
        quantity: 1,
        price: 250
      }
    ],
    totalAmount: 250,
    customerName: "Sneha",
    tableNumber: 5,
    status: "Preparing"
  }
]);


    console.log("Orders seeded");

    console.log("✅ Database seeding completed");
    process.exit();
  } catch (error) {
    console.error("❌ Seeding failed:", error.message);
    process.exit(1);
  }
};

seedData();
