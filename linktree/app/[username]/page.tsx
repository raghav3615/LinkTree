import { getUserLinks } from '@/lib/db';
import { Button } from '@/components/ui/button';

export default function UserLinks({ params }: { params: { username: string } }) {
  const links = getUserLinks(params.username) || [];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">{params.username}'s Links</h1>
        <div className="space-y-4">
          {links.map((link, index) => (
            <Button key={index} asChild className="w-full">
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.title}
              </a>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}

