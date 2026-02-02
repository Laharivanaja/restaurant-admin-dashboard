import mongoose from "mongoose";

const menuItemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      index: true
    },
    description: {
      type: String
    },
    category: {
      type: String,
      required: true,
      enum: ["Appetizer", "Main Course", "Dessert", "Beverage"]
    },
    price: {
      type: Number,
      required: true
    },
    ingredients: {
      type: [String],
      default: []
    },
    isAvailable: {
      type: Boolean,
      default: true
    },
    preparationTime: {
      type: Number // in minutes
    },
    imageUrl: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

// Text index for search (name + ingredients)
menuItemSchema.index({
  name: "text",
  ingredients: "text"
});

const MenuItem = mongoose.model("MenuItem", menuItemSchema);

export default MenuItem;
