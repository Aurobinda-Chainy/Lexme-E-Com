import { freshApple, brownRice, milk, banana, atta } from "../assets/assets";

const groceriesData = [
  { id: "gro-1", category: "Groceries", brand: "Organic Farm", name: "Fresh Apples - 1kg", discount: "5%", oldPrice: "₹200.00", price: "₹190.00", rating: 4, img: freshApple },
  { id: "gro-2", category: "Groceries", brand: "Healthy Choice", name: "Brown Rice - 5kg", discount: "8%", oldPrice: "₹500.00", price: "₹460.00", rating: 5, img: brownRice },
  { id: "gro-3", category: "Groceries", brand: "Daily Needs", name: "Pure Cow Milk - 1L", discount: "3%", oldPrice: "₹60.00", price: "₹58.00", rating: 4, img: milk   },
  { id: "gro-4", category: "Groceries", brand: "Farm Fresh", name: "Organic Bananas - 1 dozen", discount: "6%", oldPrice: "₹100.00", price: "₹94.00", rating: 5,img: banana  },
  { id: "gro-5", category: "Groceries", brand: "GrocerEase", name: "Whole Wheat Atta - 5kg", discount: "7%", oldPrice: "₹300.00", price: "₹279.00", rating: 4,img: atta },
];

export default groceriesData;
