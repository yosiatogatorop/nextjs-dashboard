// app/components/main/RomanticNavbar.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function RomanticNavbar() {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <Link href="/main/home" className="flex items-center">
              <Image 
                src="/images/logo.png" 
                alt="Sweet Love Bakery" 
                width={40} 
                height={40}
                className="rounded-full"
              />
              <span className="ml-3 text-xl font-bold text-rose-800 hidden sm:inline">
                Sweet Love Bakery
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <Link 
              href="/main/home"   // Update path to /main/home
              className="px-3 py-2 rounded-md text-sm font-medium text-rose-700 hover:bg-rose-50 hover:text-rose-900"
            >
              Home
            </Link>
            <Link 
              href="/main/products"  // Update path to /main/products
              className="px-3 py-2 rounded-md text-sm font-medium text-rose-700 hover:bg-rose-50 hover:text-rose-900"
            >
              Our Cakes
            </Link>
            <Link 
              href="/main/about"   // Update path to /main/about
              className="px-3 py-2 rounded-md text-sm font-medium text-rose-700 hover:bg-rose-50 hover:text-rose-900"
            >
              Our Story
            </Link>
            <Link 
              href="/main/contact"   // Update path to /main/contact
              className="px-3 py-2 rounded-md text-sm font-medium text-rose-700 hover:bg-rose-50 hover:text-rose-900"
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link 
              href="/main/cart"  // Update path to /main/cart
              className="p-1 rounded-full text-rose-700 hover:text-rose-900 relative"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-rose-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                2
              </span>
            </Link>

            <Link 
              href="/auth/login"  // Update path to /auth/login
              className="px-4 py-2 rounded-full bg-gradient-to-r from-rose-400 to-pink-500 text-white text-sm font-medium hover:from-rose-500 hover:to-pink-600 transition duration-300"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
