// src/components/LinksList.tsx
import React, { useState } from 'react';
import LinkItem from './LinkItem';

interface Link {
  title: string;
  url: string;
}

const LinksList: React.FC = () => {
  const [links, setLinks] = useState<Link[]>([]);
  const [newLink, setNewLink] = useState<Link>({ title: '', url: '' });

  const handleAddLink = () => {
    if (newLink.title && newLink.url) {
      setLinks([...links, newLink]);
      setNewLink({ title: '', url: '' });
    }
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="w-full max-w-md p-4 bg-gray-200 rounded-lg mb-4">
        <input
          type="text"
          placeholder="Link Title"
          value={newLink.title}
          onChange={(e) => setNewLink({ ...newLink, title: e.target.value })}
          className="mb-2 p-2 w-full border rounded"
        />
        <input
          type="url"
          placeholder="Link URL"
          value={newLink.url}
          onChange={(e) => setNewLink({ ...newLink, url: e.target.value })}
          className="mb-2 p-2 w-full border rounded"
        />
        <button
          onClick={handleAddLink}
          className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add Link
        </button>
      </div>
      {links.map((link, index) => (
        <LinkItem key={index} title={link.title} url={link.url} />
      ))}
    </div>
  );
};

export default LinksList;
