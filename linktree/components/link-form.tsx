'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type Link = { title: string; url: string };

export default function LinkForm({ initialLinks = [] }: { initialLinks: Link[] }) {
  const [links, setLinks] = useState<Link[]>(initialLinks);

  const addLink = () => {
    setLinks([...links, { title: '', url: '' }]);
  };

  const updateLink = (index: number, field: 'title' | 'url', value: string) => {
    const newLinks = [...links];
    newLinks[index][field] = value;
    setLinks(newLinks);
  };

  const removeLink = (index: number) => {
    setLinks(links.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('/api/links', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ links }),
    });

    if (response.ok) {
      alert('Links updated successfully');
    } else {
      alert('Failed to update links');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {links.map((link, index) => (
        <div key={index} className="flex space-x-2">
          <div className="flex-1">
            <Label htmlFor={`title-${index}`}>Title</Label>
            <Input
              id={`title-${index}`}
              value={link.title}
              onChange={(e) => updateLink(index, 'title', e.target.value)}
              required
            />
          </div>
          <div className="flex-1">
            <Label htmlFor={`url-${index}`}>URL</Label>
            <Input
              id={`url-${index}`}
              value={link.url}
              onChange={(e) => updateLink(index, 'url', e.target.value)}
              required
            />
          </div>
          <Button type="button" onClick={() => removeLink(index)} className="mt-6">
            Remove
          </Button>
        </div>
      ))}
      <Button type="button" onClick={addLink}>Add Link</Button>
      <Button type="submit" className="w-full">Save Links</Button>
    </form>
  );
}

