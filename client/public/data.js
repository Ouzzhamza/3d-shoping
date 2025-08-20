import blog1 from "/public/blogs/blog1.png";
import blog2 from "/public/blogs/blog2.png";
import blog3 from "/public/blogs/blog3.png";
import blog4 from "/public/blogs/blog4.png";
import { GrLocation } from "react-icons/gr";
import { BsCreditCard } from "react-icons/bs";
import { FaShoppingBasket } from "react-icons/fa";

export const images = [
  {
    image: "/images/men.png",
    type: "men",
  },
  {
    image: "/images/women.png",
    type: "women",
  },
  {
    image: "/images/kids.png",
    type: "kids",
  },
  {
    image: "/images/footwear.png",
    type: "footwear",
  },
  {
    image: "/images/athleticwear.png",
    type: "athletic",
  },
  {
    image: "/images/accessories.png",
    type: "accessories",
  },
];

export default images;

export const PopularProductsMap = [
  {
    id: 8,
    name: "Cozy Hoodie",
    price: "$79.99",
    originalPrice: "$99.99",
    path: "/glbs/Hoodie3-1.glb",
    sizes: ["S", "M", "L", "XL"],
    productImg: "/images/products/Hoodie3.webp",
    description:
      "Comfort-first hoodie with a cozy interior, perfect for lounging or casual outings.",
    colors: [
      {
        id: "red",
        name: "Bold Red",
        color: "#dc2626",
        path: "/glbs/Hoodie3-1.glb",
      },
      {
        id: "green",
        name: "Fresh Brawn",
        color: "#ab7343",
        path: "/glbs/Hoodie3-2.glb",
      },
    ],
  },
  {
    id: 34,
    name: "Pleated Skirt",
    price: "$119.99",
    originalPrice: "$139.99",
    path: "/glbs/Robe1-1.glb",
    sizes: ["S", "M", "L"],
    productImg: "/images/products/Robe1.webp",
    description: "A chic pleated skirt that flows beautifully with every step.",

    colors: [
      {
        id: "black",
        name: "Classic Black",
        color: "#1f2937",
        path: "/glbs/Robe1-1.glb",
      },
      {
        id: "gray",
        name: "Soft Gray",
        color: "#6b7280",
        path: "/glbs/Robe1-2.glb",
      },
      {
        id: "pink",
        name: "Pastel Pink",
        color: "#f9a8d4",
        path: "/glbs/Robe1-3.glb",
      },
    ],
  },
  {
    id: 4,
    name: "Basic T-shirt",
    price: "$29.99",
    originalPrice: "$39.99",
    path: "/glbs/Tshirt3.glb",
    sizes: ["S", "M", "L", "XL"],
    productImg: "/images/products/Tshirt3.webp",
    description:
      "Everyday T-shirt designed for comfort and durability with a classic cut.",
    colors: [],
  },
  {
    id: 14,
    name: "Air Shoes",
    price: "$149.99",
    originalPrice: "$179.99",
    path: "/glbs/Shoe1-2.glb",
    sizes: ["40", "41", "42", "43", "44"],
    productImg: "/images/products/Shoe1.webp",
    description:
      "Lightweight sneakers with cushioned soles, perfect for sports or casual outfits.",
    colors: [
      {
        id: "red",
        name: "Red Flash",
        color: "#dc2626",
        path: "/glbs/Shoe1-1.glb",
      },
      {
        id: "blue",
        name: "Ocean Blue",
        color: "#2563eb",
        path: "/glbs/Shoe1-2.glb",
      },
      {
        id: "gray",
        name: "Urban Gray",
        color: "#6b7280",
        path: "/glbs/Shoe1-3.glb",
      },
    ],
  },
  {
    id: 33,
    name: "Jersey",
    price: "$49.99",
    originalPrice: "$59.99",
    path: "/glbs/jersey.glb",
    sizes: ["S", "M", "L", "XL"],
    productImg: "/images/products/jersey.webp",
    description:
      "Sporty jersey made from breathable fabric, ideal for workouts or casual wear.",
    colors: [],
  },
];

export const Products = [
  // ---------- T-SHIRTS ----------
  {
    id: 1,
    name: "Classic T-shirt",
    price: "$29.99",
    originalPrice: "$39.99",
    path: "/glbs/Tshirt.glb",
    sizes: ["S", "M", "L", "XL"],
    productImg: "/images/products/Tshirt.webp",
    colors: [],
    description:
      "A timeless cotton T-shirt with a relaxed fit, perfect for everyday wear.",
    category: "men",
  },
  {
    id: 2,
    name: "Vibrant T-shirt",
    price: "$34.99",
    originalPrice: "$44.99",
    path: "/glbs/Tshirt1.glb",
    sizes: ["S", "M", "L", "XL"],
    productImg: "/images/products/Tshirt1.webp",
    description:
      "Bright and stylish T-shirt with multiple color options, soft cotton fabric, and a casual fit.",
    colors: [
      {
        id: "blue",
        name: "Sky Blue",
        color: "#3b82f6",
        path: "/glbs/Tshirt1.glb",
      },
      {
        id: "green",
        name: "Leaf Green",
        color: "#22c55e",
        path: "/glbs/Tshirt1-2.glb",
      },
      {
        id: "red",
        name: "Cherry Red",
        color: "#ef4444",
        path: "/glbs/Tshirt1-3.glb",
      },
    ],
    category: "men",
  },
  {
    id: 3,
    name: "Simple T-shirt",
    price: "$29.99",
    originalPrice: "$39.99",
    path: "/glbs/Tshirt2.glb",
    sizes: ["S", "M", "L", "XL"],
    productImg: "/images/products/Tshirt2.webp",
    colors: [],
    description:
      "Minimalist T-shirt with a clean look, crafted from breathable cotton.",
    category: "men",
  },
  {
    id: 4,
    name: "Basic T-shirt",
    price: "$29.99",
    originalPrice: "$39.99",
    path: "/glbs/Tshirt3.glb",
    sizes: ["S", "M", "L", "XL"],
    productImg: "/images/products/Tshirt3.webp",
    colors: [],
    description:
      "Everyday T-shirt designed for comfort and durability with a classic cut.",
    category: "men",
  },
  {
    id: 5,
    name: "Colorful T-shirt",
    price: "$34.99",
    originalPrice: "$44.99",
    path: "/glbs/Tshirt4-1.glb",
    sizes: ["S", "M", "L", "XL"],
    productImg: "/images/products/Tshirt4.webp",
    colors: [],
    description:
      "Fun and colorful T-shirt that adds a lively touch to your casual wardrobe.",
    category: "men",
  },

  // ---------- HOODIES ----------
  {
    id: 6,
    name: "Casual Hoodie",
    price: "$79.99",
    originalPrice: "$99.99",
    path: "/glbs/Hoodie.glb",
    sizes: ["S", "M", "L", "XL"],
    productImg: "/images/products/Hoodie.webp",
    colors: [],
    description:
      "Soft cotton-blend hoodie with a relaxed fit, ideal for layering on cool days.",
    category: "men",
  },
  {
    id: 7,
    name: "Modern Hoodie",
    price: "$84.99",
    originalPrice: "$104.99",
    path: "/glbs/Hoodie2-1.glb",
    sizes: ["S", "M", "L", "XL"],
    productImg: "/images/products/Hoodie2.webp",
    description:
      "Modern-fit hoodie available in bold shades, offering warmth and urban style.",
    colors: [
      {
        id: "blue",
        name: "Royal Blue",
        color: "#2563eb",
        path: "/glbs/Hoodie2-1.glb",
      },
      {
        id: "green",
        name: "Forest Green",
        color: "#16a34a",
        path: "/glbs/Hoodie2-2.glb",
      },
      {
        id: "gray",
        name: "Steel Gray",
        color: "#33363d",
        path: "/glbs/Hoodie2-3.glb",
      },
    ],
    category: "men",
  },
  {
    id: 8,
    name: "Cozy Hoodie",
    price: "$79.99",
    originalPrice: "$99.99",
    path: "/glbs/Hoodie3-1.glb",
    sizes: ["S", "M", "L", "XL"],
    productImg: "/images/products/Hoodie3.webp",
    description:
      "Comfort-first hoodie with a cozy interior, perfect for lounging or casual outings.",
    colors: [
      {
        id: "red",
        name: "Bright Red",
        color: "#dc2626",
        path: "/glbs/Hoodie3-1.glb",
      },
      {
        id: "green",
        name: "Spring Green",
        color: "#22c55e",
        path: "/glbs/Hoodie3-2.glb",
      },
    ],
    category: "men",
  },
  {
    id: 9,
    name: "Sporty Hoodie",
    price: "$79.99",
    originalPrice: "$99.99",
    path: "/glbs/Hoodie4-1.glb",
    sizes: ["S", "M", "L", "XL"],
    productImg: "/images/products/Hoodie4.webp",
    description:
      "Athletic-inspired hoodie built for both comfort and active wear.",
    colors: [],
    category: "athletic",
  },

  // ---------- MEN’S PANTS ----------
  {
    id: 10,
    name: "Men's Pants 1",
    price: "$69.99",
    originalPrice: "$89.99",
    path: "/glbs/MalePants1-1.glb",
    sizes: ["30", "32", "34", "36"],
    productImg: "/images/products/MalePants1.webp",
    description:
      "Stylish men's pants available in multiple shades, offering comfort and versatility.",
    colors: [
      {
        id: "gray",
        name: "Gray",
        color: "#6b7280",
        path: "/glbs/MalePants1-1.glb",
      },
      {
        id: "blue",
        name: "Navy Blue",
        color: "#2563eb",
        path: "/glbs/MalePants1-2.glb",
      },
    ],
    category: "men",
  },
  {
    id: 11,
    name: "Men's Pants 2",
    price: "$74.99",
    originalPrice: "$94.99",
    path: "/glbs/MalePants2-1.glb",
    sizes: ["30", "32", "34", "36"],
    productImg: "/images/products/MalePants2.webp",
    description:
      "Classic men's trousers made with premium fabric for all-day comfort.",
    colors: [
      {
        id: "lightBlue",
        name: "Light Blue",
        color: "#93c5fd",
        path: "/glbs/MalePants2-1.glb",
      },
      {
        id: "blue",
        name: "Royal Blue",
        color: "#2563eb",
        path: "/glbs/MalePants2-2.glb",
      },
      {
        id: "black",
        name: "Black",
        color: "#000000",
        path: "/glbs/MalePants2-3.glb",
      },
    ],
    category: "men",
  },
  {
    id: 12,
    name: "Men's Pants 3",
    price: "$69.99",
    originalPrice: "$89.99",
    path: "/glbs/MalePants3-1.glb",
    sizes: ["30", "32", "34", "36"],
    productImg: "/images/products/MalePants3.webp",
    description:
      "Classic men's trousers made with premium fabric for all-day comfort.",
    colors: [],
    category: "men",
  },

  // ---------- WOMEN’S PANTS ----------
  {
    id: 13,
    name: "Women's Pants 1",
    price: "$69.99",
    originalPrice: "$89.99",
    path: "/glbs/WomenPants1-1.glb",
    sizes: ["26", "28", "30", "32"],
    productImg: "/images/products/WomenPants1.webp",
    description:
      "Fitted women's pants offering both style and flexibility for casual wear.",
    colors: [
      {
        id: "blue",
        name: "Blue",
        color: "#2563eb",
        path: "/glbs/WomenPants1-1.glb",
      },
      {
        id: "black",
        name: "Black",
        color: "#000000",
        path: "/glbs/WomenPants1-2.glb",
      },
    ],
    category: "women",
  },

  // ---------- SHOES ----------
  {
    id: 14,
    name: "Air shoes",
    price: "$139.99",
    originalPrice: "$169.99",
    path: "/glbs/Shoe1-1.glb",
    sizes: ["40", "41", "42", "43", "44"],
    productImg: "/images/products/Shoe1.webp",
    description:
      "Lightweight sneakers with cushioned soles, perfect for sports or casual outfits.",
    colors: [
      {
        id: "red",
        name: "Fire Red",
        color: "#dc2626",
        path: "/glbs/Shoe1-1.glb",
      },
      {
        id: "blue",
        name: "Blue Wave",
        color: "#2563eb",
        path: "/glbs/Shoe1-2.glb",
      },
      {
        id: "gray",
        name: "Steel Gray",
        color: "#6b7280",
        path: "/glbs/Shoe1-3.glb",
      },
    ],
    category: "footwear",
  },
  {
    id: 15,
    name: "Wing Tip Boots",
    price: "$149.99",
    originalPrice: "$179.99",
    path: "/glbs/Shoe2-1.glb",
    sizes: ["40", "41", "42", "43", "44"],
    productImg: "/images/products/Shoe2.webp",
    description:
      "Elegant wingtip boots crafted from durable leather for a polished look.",
    colors: [
      {
        id: "black",
        name: "Midnight Black",
        color: "#000000",
        path: "/glbs/Shoe2-1.glb",
      },
      {
        id: "brown",
        name: "Rust Brown",
        color: "#7c4a00",
        path: "/glbs/Shoe2-2.glb",
      },
    ],
    category: "footwear",
  },
  {
    id: 16,
    name: "Oxford Shoes",
    price: "$149.99",
    originalPrice: "$179.99",
    path: "/glbs/Shoe3-1.glb",
    sizes: ["40", "41", "42", "43", "44"],
    productImg: "/images/products/Shoe3.webp",
    description:
      "Performance running shoes with breathable design and strong grip soles.",
    colors: [
      {
        id: "brown",
        name: "Choco Brown",
        color: "#5a381e",
        path: "/glbs/Shoe3-1.glb",
      },
      {
        id: "black",
        name: "Jet Black",
        color: "#000000",
        path: "/glbs/Shoe3-2.glb",
      },
    ],
    category: "footwear",
  },
  {
    id: 17,
    name: "Chuck Canvas",
    price: "$139.99",
    originalPrice: "$169.99",
    path: "/glbs/Shoe4-1.glb",
    sizes: ["40", "41", "42", "43", "44"],
    productImg: "/images/products/Shoe4.webp",
    description:
      "Sleek running shoes engineered for speed and comfort during workouts.",
    colors: [],
    category: "footwear",
  },

  // ---------- JOGGING / SPORTS ----------
  {
    id: 18,
    name: "Jogging dress",
    price: "$54.99",
    originalPrice: "$74.99",
    path: "/glbs/Jogging.glb",
    sizes: ["S", "M", "L", "XL"],
    productImg: "/images/products/Jogging.webp",
    description:
      "Lightweight jogging outfit designed for flexibility and breathable comfort.",
    colors: [],
    category: "athletic",
  },

  // ---------- HATS ----------
  {
    id: 19,
    name: "Rain Hat",
    price: "$24.99",
    originalPrice: "$34.99",
    path: "/glbs/Hat1-1.glb",
    sizes: [],
    productImg: "/images/products/Hat1.webp",
    description: "Rain hat with multiple color options to match any outfit.",
    colors: [
      {
        id: "blue",
        name: "Ocean Blue",
        color: "#2563eb",
        path: "/glbs/Hat1-1.glb",
      },
      {
        id: "brown",
        name: "Earth Brown",
        color: "#7c4a00",
        path: "/glbs/Hat1-2.glb",
      },
      {
        id: "black",
        name: "Black",
        color: "#000000",
        path: "/glbs/Hat1-3.glb",
      },
      {
        id: "green",
        name: "Forest Green",
        color: "#16a34a",
        path: "/glbs/Hat1-4.glb",
      },
    ],
    category: "accessories",
  },
  {
    id: 20,
    name: "Bucket Hat",
    price: "$24.99",
    originalPrice: "$34.99",
    path: "/glbs/Hat2.glb",
    sizes: [],
    productImg: "/images/products/Hat2.webp",
    description:
      "Simple and stylish Bucket hat, lightweight and comfortable for daily wear.",
    colors: [],
    category: "accessories",
  },
  {
    id: 21,
    name: "Cattleman",
    price: "$24.99",
    originalPrice: "$34.99",
    path: "/glbs/Hat3-1.glb",
    sizes: [],
    productImg: "/images/products/Hat3.webp",
    description:
      "Western-inspired hat with a structured design, perfect for outdoor style.",
    colors: [
      {
        id: "darkBrown",
        name: "Dark Brown",
        color: "#4b2e05",
        path: "/glbs/Hat3-1.glb",
      },
      {
        id: "black",
        name: "Black",
        color: "#000000",
        path: "/glbs/Hat3-2.glb",
      },
      {
        id: "brown",
        name: "Brown",
        color: "#7c4a00",
        path: "/glbs/Hat3-3.glb",
      },
    ],
    category: "accessories",
  },
  {
    id: 22,
    name: "Brick",
    price: "$24.99",
    originalPrice: "$34.99",
    path: "/glbs/Hat4.glb",
    sizes: [],
    productImg: "/images/products/Hat4.webp",
    description:
      "Minimalist hat with a sharp look, designed for casual everyday outfits.",
    colors: [],
    category: "accessories",
  },
  {
    id: 23,
    name: "Gabmbler",
    price: "$24.99",
    originalPrice: "$34.99",
    path: "/glbs/Hat5.glb",
    sizes: [],
    productImg: "/images/products/Hat5.webp",
    description:
      "Classic gambler-style hat, lightweight and breathable for sunny days.",
    colors: [],
    category: "accessories",
  },
  {
    id: 24,
    name: "Cuffled Beanies",
    price: "$24.99",
    originalPrice: "$34.99",
    path: "/glbs/Hat6.glb",
    sizes: [],
    productImg: "/images/products/Hat6.webp",
    description:
      "Warm knitted beanie with cuffed design, perfect for cold weather.",
    colors: [],
    category: "accessories",
  },

  // ---------- GLASSES ----------
  {
    id: 25,
    name: "Glasses 1",
    price: "$49.99",
    originalPrice: "$59.99",
    path: "/glbs/glasses1.glb",
    sizes: [],
    productImg: "/images/products/glasses1.webp",
    description:
      "Sleek eyewear with lightweight frames, ideal for a modern casual look.",
    colors: [],
    category: "accessories",
  },
  {
    id: 26,
    name: "Glasses 2",
    price: "$49.99",
    originalPrice: "$59.99",
    path: "/glbs/glasses2.glb",
    sizes: [],
    productImg: "/images/products/glasses2.webp",
    colors: [],
    description:
      "Classic round-frame glasses crafted for both style and durability.",
    category: "accessories",
  },
  {
    id: 27,
    name: "Glasses 3",
    price: "$49.99",
    originalPrice: "$59.99",
    path: "/glbs/glasses3.glb",
    sizes: [],
    productImg: "/images/products/glasses3.webp",
    colors: [],
    description: "Modern square-frame glasses that complement any face shape.",
    category: "accessories",
  },
  {
    id: 28,
    name: "Glasses 4",
    price: "$49.99",
    originalPrice: "$59.99",
    path: "/glbs/glasses4.glb",
    sizes: [],
    productImg: "/images/products/glasses4.webp",
    colors: [],
    description:
      "Lightweight and durable glasses offering a sharp, professional look.",
    category: "accessories",
  },
  {
    id: 29,
    name: "Glasses 5",
    price: "$49.99",
    originalPrice: "$59.99",
    path: "/glbs/glasses5.glb",
    sizes: [],
    productImg: "/images/products/glasses5.webp",
    colors: [],
    description: "Stylish aviator-inspired glasses with a timeless appeal.",
    category: "accessories",
  },
  {
    id: 30,
    name: "Glasses 6",
    price: "$49.99",
    originalPrice: "$59.99",
    path: "/glbs/glasses6.glb",
    sizes: [],
    productImg: "/images/products/glasses6.webp",
    colors: [],
    description:
      "Trendy glasses with bold frames, perfect for making a statement.",
    category: "accessories",
  },
  {
    id: 31,
    name: "Glasses 7",
    price: "$49.99",
    originalPrice: "$59.99",
    path: "/glbs/glasses7.glb",
    sizes: [],
    productImg: "/images/products/glasses7.webp",
    colors: [],
    description:
      "Minimalist glasses designed for everyday comfort and clarity.",
    category: "accessories",
  },
  {
    id: 32,
    name: "Handbag",
    price: "$199.99",
    originalPrice: "$249.99",
    path: "/glbs/Handbag.glb",
    sizes: [],
    productImg: "/images/products/Handbag.webp",
    description:
      "Elegant leather handbag with spacious compartments for daily essentials.",

    colors: [],
    category: "accessories",
  },
  {
    id: 33,
    name: "Jersey",
    price: "$49.99",
    originalPrice: "$59.99",
    path: "/glbs/jersey.glb",
    sizes: [],
    productImg: "/images/products/jersey.webp",
    description:
      "Sporty jersey made from breathable fabric, ideal for workouts or casual wear.",

    colors: [],
    category: "athletic",
  },
  {
    id: 34,
    name: "Pleated Skirt",
    price: "$119.99",
    originalPrice: "$139.99",
    path: "/glbs/Robe1-1.glb",
    sizes: ["S", "M", "L"],
    productImg: "/images/products/Robe1.webp",
    description: "A chic pleated skirt that flows beautifully with every step.",
    colors: [
      {
        id: "black",
        name: "Black",
        color: "#1f2937",
        path: "/glbs/Robe1-1.glb",
      },
      { id: "gray", name: "Gray", color: "#6b7280", path: "/glbs/Robe1-2.glb" },
      { id: "pink", name: "Pink", color: "#f9a8d4", path: "/glbs/Robe1-3.glb" },
    ],
    category: "women",
  },
  {
    id: 35,
    name: "Gathered Skirt",
    price: "$129.99",
    originalPrice: "$149.99",
    path: "/glbs/Robe2-1.glb",
    sizes: ["S", "M", "L"],
    productImg: "/images/products/Robe2.webp",
    description:
      "A stylish gathered skirt with a flattering silhouette, designed to accentuate your figure.",
    colors: [
      {
        id: "red",
        name: "Deep Red",
        color: "#dc2626",
        path: "/glbs/Robe2-1.glb",
      },
      {
        id: "brown",
        name: "Earth Brown",
        color: "#7c4a00",
        path: "/glbs/Robe2-2.glb",
      },
      {
        id: "purple",
        name: "Royal Purple",
        color: "#7c3aed",
        path: "/glbs/Robe2-3.glb",
      },
      {
        id: "white",
        name: "Pure White",
        color: "#ffffff",
        path: "/glbs/Robe2-4.glb",
      },
    ],
    category: "women",
  },
  {
    id: 36,
    name: "Pleated Skirt",
    price: "$89.99",
    originalPrice: "$109.99",
    path: "/glbs/Skirt1.glb",
    sizes: ["S", "M", "L"],
    productImg: "/images/products/Skirt1.webp",
    description:
      "A versatile pleated skirt crafted with lightweight materials, offering both comfort and elegance.",
    colors: [],
    category: "women",
  },
  {
    id: 37,
    name: "Denim Skirt",
    price: "$89.99",
    originalPrice: "$109.99",
    path: "/glbs/Skirt2.glb",
    sizes: ["S", "M", "L"],
    productImg: "/images/products/Skirt2.webp",
    description:
      "A timeless denim skirt that combines casual comfort with a fashionable edge.",
    colors: [],
    category: "women",
  },
  {
    id: 38,
    name: "Classic Tie",
    price: "$24.99",
    originalPrice: "$34.99",
    path: "/glbs/Tie.glb",
    sizes: [],
    productImg: "/images/products/Tie.webp",
    description:
      "A classic tie designed with elegance and sophistication. Perfect for business meetings, formal events, or elevating any outfit with a touch of class.",
    colors: [],
    category: "accessories",
  },
  {
    id: 39,
    name: "T-shirt",
    price: "$29.99",
    originalPrice: "$39.99",
    path: "/glbs/Tshirt5.glb",
    sizes: ["S", "M", "L", "XL"],
    productImg: "/images/products/Tshirt5.webp",
    description:
      "A premium-quality T-shirt offering comfort and style in one. Made with soft, breathable cotton.",
    colors: [],
    category: "men",
  },
  {
    id: 40,
    name: "Women T-shirt",
    price: "$29.99",
    originalPrice: "$39.99",
    path: "/glbs/Tshirt6.glb",
    sizes: ["S", "M", "L", "XL"],
    productImg: "/images/products/Tshirt6.webp",
    description:
      "A stylish women’s T-shirt with a modern fit, crafted from lightweight and breathable fabric.",
    colors: [],
    category: "women",
  },
];

export const blogs = [
  {
    title: "Top Shopping Tips for Smart Buyers",
    category: "Women",
    image: blog1,
  },
  {
    title: "Latest Trends in Online Shopping 2024",
    category: "Footwear",
    image: blog2,
  },
  { title: "How to Spot the Best Deals Online", category: "Men", image: blog3 },
  {
    title: "Why E-Commerce is the Future of Shopping",
    category: "Winterwear",
    image: blog4,
  },
  
];


export const testimonials = [
  {
    name: "Amina El Idrissi",
    date: "2025-07-12",
    message:
      "This product exceeded my expectations. The customer support was fantastic!",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "Youssef Benali",
    date: "2025-06-28",
    message: "Super fast delivery and excellent quality. Highly recommended!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Salma Raji",
    date: "2025-05-14",
    message:
      "I’ve tried many similar services, but this one really stands out.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Hicham Bakkali",
    date: "2025-07-01",
    message: "Easy to use, great design, and affordable. Will use again!",
    image: "https://randomuser.me/api/portraits/men/14.jpg",
  },
  {
    name: "Fatima Zahra O.",
    date: "2025-06-10",
    message:
      "Everything worked smoothly from start to finish. Impressive experience!",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    name: "Omar Driouch",
    date: "2025-07-15",
    message: "Simple, clean, and effective. A game-changer for my workflow.",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
  },
];

export const steps = [
  {
    id: 1,
    title: "Cart",
    icon: FaShoppingBasket,
  },
  {
    id: 2,
    title: "Address",
    icon: GrLocation,
  },
  {
    id: 3,
    title: "Payment",
    icon: BsCreditCard,
  },
];
