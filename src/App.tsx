// src/App.tsx
import React, { useState } from 'react';
import LinksList from './components/LinksList';
import './App.css';

const App: React.FC = () => {
  const [image, setImage] = useState<string | ArrayBuffer | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-lg">
        <div className="text-center">
          {image ? (
            <img
              src={image.toString()}
              alt="Profile Avatar"
              className="w-24 h-24 mx-auto rounded-full"
            />
          ) : (
            <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-gray-500">Upload Image</span>
            </div>
          )}
          <h1 className="mt-4 text-2xl font-bold text-gray-800">Your Name</h1>
          <p className="mt-2 text-gray-600">@yourusername</p>
          <input
            type="file"
            accept="image/*"
            className="mt-4 block mx-auto"
            onChange={handleImageChange}
          />
        </div>
        <LinksList />
      </div>
    </div>
  );
};

export default App;
