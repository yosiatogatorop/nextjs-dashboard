'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import RomanticButton from '@/components/ui/RomanticButton';
import LoveInput from '@/components/ui/LoveInput';

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const username = formData.get('username');
    const password = formData.get('password');

    if (username === 'admin123' && password === '12345') {
      router.push('/admin/dashboard');
    } else if (username === 'user123' && password === '12345') {
      router.push('/main/home');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="min-h-screen bg-rose-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-rose-800">Welcome Back</h1>
          <p className="text-rose-600">Sign in to your account</p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-rose-100 text-rose-700 rounded-lg">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <LoveInput
            label="Username"
            name="username"
            type="text"
            placeholder="Enter your username"
            required
          />
          <LoveInput
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
            required
          />

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-rose-600 focus:ring-rose-500 border-rose-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-rose-700">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="/forgot-password" className="font-medium text-rose-600 hover:text-rose-500">
                Forgot password?
              </a>
            </div>
          </div>

          <div>
            <RomanticButton type="submit" text="Sign In" fullWidth />
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-rose-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-rose-500">Or</span>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-rose-600">
              Don't have an account?{' '}
              <a href="/register" className="font-medium text-rose-600 hover:text-rose-500">
                Register here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}