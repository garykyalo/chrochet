import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedCategories from './components/FeaturedCategories';
import ProductSection from './components/ProductSection';
import TalentShowcase from './components/TalentShowcase';
import Footer from './components/Footer';

// Mock data for products
const mockProducts = [
  {
    id: 1,
    title: "Handmade Baby Blanket",
    description: "Soft and cozy baby blanket made with premium cotton yarn. Perfect for newborns and toddlers.",
    price: 45.99,
    image: "https://images.pexels.com/photos/6865034/pexels-photo-6865034.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "patterns",
    seller: "Sarah's Crafts",
    rating: 4.8,
    reviews: 24,
    type: "finished"
  },
  {
    id: 2,
    title: "Vintage Lace Doily Pattern",
    description: "Beautiful vintage-style lace doily pattern with detailed instructions and stitch guide.",
    price: 12.99,
    image: "https://images.pexels.com/photos/5370643/pexels-photo-5370643.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "patterns",
    seller: "Vintage Threads",
    rating: 4.9,
    reviews: 18,
    type: "pattern"
  },
  {
    id: 3,
    title: "Cozy Winter Scarf",
    description: "Warm and stylish winter scarf with intricate cable pattern. Hand-crocheted with wool blend.",
    price: 32.00,
    image: "https://images.pexels.com/photos/5370644/pexels-photo-5370644.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "shop",
    seller: "Cozy Creations",
    rating: 4.7,
    reviews: 32,
    type: "finished"
  },
  {
    id: 4,
    title: "Amigurumi Animal Collection",
    description: "Set of 5 adorable amigurumi animal patterns with step-by-step photo tutorials.",
    price: 25.00,
    image: "https://images.pexels.com/photos/6865035/pexels-photo-6865035.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "patterns",
    seller: "Tiny Treasures",
    rating: 5.0,
    reviews: 15,
    type: "pattern"
  },
  {
    id: 5,
    title: "Kitchen Dishcloths Set",
    description: "Set of 4 eco-friendly dishcloths in vibrant colors. Machine washable and highly absorbent.",
    price: 18.99,
    image: "https://images.pexels.com/photos/6865036/pexels-photo-6865036.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "shop",
    seller: "Green Home",
    rating: 4.6,
    reviews: 28,
    type: "finished"
  },
  {
    id: 6,
    title: "Decorative Throw Pillow",
    description: "Elegant throw pillow with geometric pattern. Adds style to any living space.",
    price: 38.99,
    image: "https://images.pexels.com/photos/6865037/pexels-photo-6865037.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "shop",
    seller: "Home Decor Plus",
    rating: 4.8,
    reviews: 21,
    type: "finished"
  }
];

const mockTalents = [
  {
    id: 1,
    name: "Sarah Martinez",
    specialty: "Baby Items & Blankets",
    image: "https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=300",
    rating: 4.9,
    completedProjects: 127,
    priceRange: "$15-$80",
    description: "Specializing in soft, cozy baby items with 5+ years of experience."
  },
  {
    id: 2,
    name: "Emma Thompson",
    specialty: "Amigurumi & Toys",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300",
    rating: 4.8,
    completedProjects: 89,
    priceRange: "$20-$45",
    description: "Creating adorable amigurumi toys that bring joy to children and adults alike."
  },
  {
    id: 3,
    name: "Maria Rodriguez",
    specialty: "Home Decor & Accessories",
    image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=300",
    rating: 4.7,
    completedProjects: 156,
    priceRange: "$25-$120",
    description: "Transforming homes with beautiful, handcrafted crochet decorations."
  }
];

function App() {
  const [products] = useState(mockProducts);
  const [talents] = useState(mockTalents);

  return (
    <div className="App">
      <Header />
      <Hero />
      <div className="container my-5">
        <FeaturedCategories />
        <ProductSection 
          title="Featured Patterns" 
          products={products.filter(p => p.category === 'patterns')}
          showViewAll={true}
        />
        <TalentShowcase talents={talents} />
        <ProductSection 
          title="Shop Items" 
          products={products.filter(p => p.category === 'shop')}
          showViewAll={true}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;