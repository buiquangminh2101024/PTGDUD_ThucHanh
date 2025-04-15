import React from 'react';
import BookmarkButton from './BookmarkButton';

// Component để hiển thị một công thức đơn lẻ
function RecipeCard({ recipe }) {
  return (
    <div className="bg-white rounded-md shadow-md overflow-hidden">
      <img src={recipe.imageUrl} alt={recipe.title} className="w-full h-[200px]" />
      <div className="p-4 flex justify-between">
        <div>
          <h3 className="font-semibold text-lg text-gray-800">{recipe.title}</h3>
          <div className="mt-2 rounded-full bg-pink-100 text-center w-fit px-2">
            <span className="text-xs text-pink-500">{recipe.time}</span>
          </div>
        </div>
        <div>
          <BookmarkButton width="w-[25px]" height="h-[25px]"/>
        </div>
      </div>
    </div>
  );
}

// Component cho toàn bộ section công thức
function RecipesSection({ title, subtitle, recipes }) {
  return (
    <div className="py-8">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-2xl font-bold text-pink-500 mb-4">{title}</h2>
        <p className="text-gray-500 mb-6">{subtitle}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecipesSection;