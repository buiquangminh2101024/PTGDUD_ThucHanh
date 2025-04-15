import React from 'react';

function BookmarkButton({width, height}) {
  return (
    <button
      className={`bg-white rounded-full border border-pink-500 text-pink-500 hover:bg-pink-100 focus:outline-none focus:ring-2 focus:ring-pink-500 ${width} ${height} flex items-center justify-center`}
    >
      <svg
        className={`size-4/5`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
        />
      </svg>
    </button>
  );
}

export default BookmarkButton;