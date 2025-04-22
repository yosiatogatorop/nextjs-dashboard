'use client';

import { useRouter } from 'next/navigation';
import RomanticButton from '@/components/ui/RomanticButton';
import LoveInput from '@/components/ui/LoveInput';

export default function RegisterPage() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle registration here
    alert('Registration form submitted!');
    router.push('/home');
  };

  return (
    <div className="min-h-screen bg-rose-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-rose-800">Create Account</h1>
          <p className="text-rose-600">Join our sweet community</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <LoveInput
              label="First Name"
              name="firstName"
              type="text"
              placeholder="Enter your first name"
              required
            />
            <LoveInput
              label="Last Name"
              name="lastName"
              type="text"
              placeholder="Enter your last name"
              required
            />
          </div>

          <LoveInput
            label="Email Address"
            name="email"
            type="email"
            placeholder="Enter your email"
            required
          />

          <LoveInput
            label="Password"
            name="password"
            type="password"
            placeholder="Create a password"
            required
          />

          <LoveInput
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            required
          />

          <div className="flex items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              className="h-4 w-4 text-rose-600 focus:ring-rose-500 border-rose-300 rounded"
              required
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-rose-700">
              I agree to the{' '}
              <a href="#" className="font-medium text-rose-600 hover:text-rose-500">
                Terms and Conditions
              </a>
            </label>
          </div>

          <div>
            <RomanticButton type="submit" text="Register" fullWidth />
          </div>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-rose-600">
            Already have an account?{' '}
            <a href="/login" className="font-medium text-rose-600 hover:text-rose-500">
              Sign in here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}