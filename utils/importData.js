import { db, collection, addDoc } from "./firebase.js";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const importData = async () => {
  try {
    // Load data from `db.json`
    const { data: products } = await axios.get(
      "http://localhost:5000/products"
    );
    const { data: users } = await axios.get("http://localhost:5000/users");

    // Import Products
    if (products) {
      for (let product of products) {
        await addDoc(collection(db, "products"), {
          id: uuidv4(),
          ...product, // Spread the product data
        });
        console.log(`✅ Product Added: ${product.name}`);
      }
    }

    // Import Users (if any)
    if (users) {
      for (let user of users) {
        await addDoc(collection(db, "users"), {
          id: uuidv4(),
          ...user,
        });
        console.log(`User Added: ${user.email}`);
      }
    }

    console.log("Data successfully seeded to Firebase!");
  } catch (error) {
    console.error("Error importing data:", error);
  }
};

// Run the function
importData();
