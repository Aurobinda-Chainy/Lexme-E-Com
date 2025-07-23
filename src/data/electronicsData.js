import { samsungS22, iphone, Headphones, Laptop,DeskJet } from "../assets/assets";

const electronicsData = [
  { id: "ele-1",  category: "Electronics", brand: "Samsung", name: "Galaxy S22 Ultra 5G", discount: "12%", oldPrice: "₹1,09,999", price: "₹96,799", rating: 5, img: samsungS22 },
  { id: "ele-2",  category: "Electronics", brand: "Apple", name: "iPhone 13 Pro Max", discount: "10%", oldPrice: "₹1,29,900", price: "₹1,16,910", rating: 5, img: iphone },
  { id: "ele-3",  category: "Electronics", brand: "Sony", name: "WH-1000XM4 Headphones", discount: "15%", oldPrice: "₹29,990", price: "₹25,491", rating: 5, img: Headphones },
  { id: "ele-4",  category: "Electronics", brand: "Dell", name: "Inspiron 15 Laptop", discount: "8%", oldPrice: "₹58,000", price: "₹53,360", rating: 4, img: Laptop },
  { id: "ele-5",  category: "Electronics", brand: "HP", name: "DeskJet Wireless Printer", discount: "5%", oldPrice: "₹7,499", price: "₹7,124", rating: 4, img: DeskJet },
  
];

export default electronicsData;
