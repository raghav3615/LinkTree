import { getUserLinks } from '@/lib/db';
import LinkForm from '../components/link-form';

export default function Dashboard() {
  // In a real app, you'd get the username from the session
  const username = 'testuser';
  const links = getUserLinks(username) || [];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
        <LinkForm initialLinks={links} />
      </div>
    </div>
  );
}

