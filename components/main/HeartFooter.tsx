import Link from 'next/link';

export default function HeartFooter() {
  return (
    <footer className="bg-rose-800 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Sweet Love Bakery</h3>
            <p className="text-rose-200">
              Creating sweet moments and lasting memories with every bite.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/home" className="text-rose-200 hover:text-white">Home</Link></li>
              <li><Link href="/products" className="text-rose-200 hover:text-white">Our Cakes</Link></li>
              <li><Link href="/about" className="text-rose-200 hover:text-white">Our Story</Link></li>
              <li><Link href="/contact" className="text-rose-200 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Information</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-rose-200 hover:text-white">Privacy Policy</Link></li>
              <li><Link href="#" className="text-rose-200 hover:text-white">Terms of Service</Link></li>
              <li><Link href="#" className="text-rose-200 hover:text-white">Shipping Policy</Link></li>
              <li><Link href="#" className="text-rose-200 hover:text-white">FAQs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <Link href="#" className="text-rose-200 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link href="#" className="text-rose-200 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477 4.072 4.072 0 01-1.86-.514v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              <Link href="#" className="text-rose-200 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2.2c3.232 0 3.62.012 4.896.07 1.17.056 1.953.24 2.407.406.603.224 1.035.493 1.49.948.455.455.724.887.948 1.49.166.454.35 1.237.406 2.407.058 1.276.07 1.664.07 4.896s-.012 3.62-.07 4.896c-.056 1.17-.24 1.953-.406 2.407a3.71 3.71 0 01-.948 1.49 3.71 3.71 0 01-1.49.948c-.454.166-1.237.35-2.407.406-1.276.058-1.664.07-4.896.07s-3.62-.012-4.896-.07c-1.17-.056-1.953-.24-2.407-.406a3.71 3.71 0 01-1.49-.948 3.71 3.71 0 01-.948-1.49c-.166-.454-.35-1.237-.406-2.407-.058-1.276-.07-1.664-.07-4.896s.012-3.62.07-4.896c.056-1.17.24-1.953.406-2.407a3.71 3.71 0 01.948-1.49 3.71 3.71 0 011.49-.948c.454-.166 1.237-.35 2.407-.406C8.38 2.212 8.768 2.2 12 2.2zm0 3.3a6.5 6.5 0 100 13 6.5 6.5 0 000-13zm0 10.7a4.2 4.2 0 110-8.4 4.2 4.2 0 010 8.4zm5.2-10.85a1.05 1.05 0 11-2.1 0 1.05 1.05 0 012.1 0z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
            <p className="text-sm text-rose-200">© 2025 Sweet Love Bakery. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
