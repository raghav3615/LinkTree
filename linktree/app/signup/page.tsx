import Link from 'next/link';
import SignupForm from '../components/signup-form';

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>
        <SignupForm />
        <div className="mt-4 text-center">
          <p>Already have an account?</p>
          <Link href="/" className="text-blue-500 hover:underline">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}

