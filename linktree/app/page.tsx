import Link from 'next/link';
import LoginForm from './components/login-form';
import SignupForm from './components/signup-form';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Linktree Clone</h1>
        <LoginForm />
        <div className="mt-4 text-center">
          <p>Don't have an account?</p>
          <Link href="/signup" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}

