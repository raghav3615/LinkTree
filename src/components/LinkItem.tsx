// src/components/LinkItem.tsx
import React from 'react';

interface LinkItemProps {
  title: string;
  url: string;
}

const LinkItem: React.FC<LinkItemProps> = ({ title, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full p-4 mb-4 text-center bg-blue-600 text-white rounded-lg hover:bg-blue-700"
    >
      {title}
    </a>
  );
};

export default LinkItem;
