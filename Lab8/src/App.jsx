import { useState } from 'react'
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import RecipesSection from "./components/RecipesSection";
import EditorPickSection from './components/EditorPickSection';
import Footer from "./components/Footer";
import './App.css'

const summerRecipes = [
  {
    id: 1,
    title: 'Italian-style tomato salad',
    imageUrl: 'src/assets/Italian-style tomato salad.webp', // Thay thế bằng URL thật
    time: '14 minutes'
  },
  {
    id: 2,
    title: 'Spaghetti with vegetables and shrimp',
    imageUrl: 'src/assets/Spaghetti with vegetables and shrimp.avif', // Thay thế bằng URL thật
    time: '15 minutes'
  },
  {
    id: 3,
    title: 'Lotus delight salad',
    imageUrl: 'src/assets/Lotus delight salad.jpg', // Thay thế bằng URL thật
    time: '20 minutes'
  },
  {
    id: 4,
    title: 'Snack cakes',
    imageUrl: 'src/assets/Snack cakes.jpg', // Thay thế bằng URL thật
    time: '21 minutes'
  },
  // ... các công thức mùa hè khác
];

const videoRecipes = [
  {
    id: 1,
    title: 'Salad with cabbage and shrimp',
    imageUrl: 'src/assets/Salad with cabbage and shrimp.webp', // Thay thế bằng URL thật
    time: '32 minutes'
  },
  {
    id: 2,
    title: 'Salad of cove beans, shrimp and potatoes',
    imageUrl: 'src/assets/Salad of cove beans, shrimp and potatoes.jpg', // Thay thế bằng URL thật
    time: '20 minutes'
  },
  {
    id: 3,
    title: 'Sunny-side up fried eggs',
    imageUrl: 'src/assets/Sunny-side up fried eggs.jpg', // Thay thế bằng URL thật
    time: '32 minutes'
  },
  {
    id: 4,
    title: 'Lotus delight salad',
    imageUrl: 'src/assets/Lotus delight salad.jpg', // Thay thế bằng URL thật
    time: '20 minutes'
  },
  // ... các công thức có video khác
];

// Dữ liệu mẫu cho Editor's Pick (trong thực tế bạn sẽFetch dữ liệu này)
const editorPickItems = [
  {
    id: 1,
    title: 'Stuffed sticky rice ball',
    imageUrl: 'src/assets/Stuffed sticky rice ball.webp', // Thay thế bằng URL thật
    description: 'Stuffed sticky rice balls: A delightful Asian treat with chewy, glutinous rice and a flavorful surprise filling...',
    author: 'Jennifer King',
    authorAvatar: 'src/assets/Avatar (2).png', // Thay thế bằng URL thật
    time: '34 minutes',
  },
  {
    id: 2,
    title: 'Strawberry smoothie',
    imageUrl: 'src/assets/Strawberry smoothie.jpg', // Thay thế bằng URL thật
    description: 'Savor the refreshing delight of a strawberry smoothie. Made with ripe strwberries, this creamy blend offers...',
    author: 'Matthew Martinez',
    authorAvatar: 'src/assets/Avatar (3).png', // Thay thế bằng URL thật
    time: '40 minutes',
  },
  {
    id: 3,
    title: 'Latte art',
    imageUrl: 'src/assets/Latte art.webp', // Thay thế bằng URL thật
    description: 'Latte art is the skillful craft of creating captivatin designs on the surface of a latte...',
    author: 'Sarah Hill',
    authorAvatar: 'src/assets/Avatar (4).png', // Thay thế bằng URL thật
    time: '15 minutes',
  },
  {
    id: 4,
    title: 'Butter-fried noodles',
    imageUrl: 'src/assets/Butter-fried noodles.webp', // Thay thế bằng URL thật
    description: 'Butter fried noodles: Savory noodles cooked in butter for a delicious nd satisfying meal...',
    author: 'Julia Lopez',
    authorAvatar: 'src/assets/Avatar (5).png', // Thay thế bằng URL thật
    time: '19 minutes',
  },
  // ... các mục Editor's Pick khác
];

function App() {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <HeroSection />
      <div className='px-20'>
        <RecipesSection title="This Summer Recipes" subtitle="You have all your Independence Day sweets covered" recipes={summerRecipes} />
        <RecipesSection title="Recipes With Videos" subtitle="Cooking Up Culinary Creations with Step-by-Step Videos" recipes={videoRecipes} />
        <EditorPickSection title="Editor's pick" items={editorPickItems} />
      </div>
      <Footer />
    </div>
  )
}

export default App
