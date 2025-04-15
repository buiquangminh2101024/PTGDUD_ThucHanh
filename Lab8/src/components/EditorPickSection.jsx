import React from 'react';
import BookmarkButton from './BookmarkButton';

// Component để hiển thị một mục được chọn (Editor's Pick Card)
function EditorPickCard({ item }) {
    return (
        <div className="bg-white rounded-md shadow-md overflow-hidden flex p-3">
            <img src={item.imageUrl} alt={item.title} className="h-[200px] aspect-square" />
            <div className="p-4">
                <div className='flex items-center justify-between'>
                    <h3 className="font-semibold text-lg text-gray-800">{item.title}</h3>
                    <BookmarkButton width="w-[25px]" height="h-[25px]" />
                </div>
                <p className="text-xs text-gray-500">{item.time}</p>
                <div className="mt-4 flex items-center">
                    <div className="flex-shrink-0">
                        <img
                            className="h-8 w-8 rounded-full"
                            src={item.authorAvatar}
                            alt={item.author}
                        />
                    </div>
                    <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">{item.author}</p>
                    </div>
                </div>
                <p className="text-gray-600 text-sm mt-2">{item.description}</p>
            </div>
        </div>
    );
}

// Component cho toàn bộ section Editor's Pick
function EditorPickSection({ title, items }) {
    return (
        <div className="py-8">
            <div className="container mx-auto flex flex-col items-center">
                <h2 className="text-2xl font-bold text-pink-500 mb-4">{title}</h2>
                <p className="text-gray-500 mb-6">Curated Culinary Delights: Handpicked Favorites by Our Expert Editors!</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {items.map((item) => (
                        <EditorPickCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default EditorPickSection