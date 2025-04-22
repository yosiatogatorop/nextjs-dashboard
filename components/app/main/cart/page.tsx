import RomanticNavbar from '@/components/main/RomanticNavbar';
import HeartFooter from '@/components/main/HeartFooter';
import RomanticButton from '@/components/ui/RomanticButton';
import { featuredProducts } from '@/lib/products';

export default function CartPage() {
  // For demo purposes, using first product as cart item
  const cartItems = [featuredProducts[0], featuredProducts[1]];
  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <div className="min-h-screen bg-rose-50">
      <RomanticNavbar />
      
      <main className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-rose-800 mb-8">Your Sweet Cart</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="divide-y divide-rose-100">
                  {cartItems.map((item, index) => (
                    <div key={index} className="py-4 first:pt-0 last:pb-0">
                      <div className="flex flex-col sm:flex-row gap-4">
                        <div className="w-full sm:w-32 h-32 bg-rose-100 rounded-lg overflow-hidden">
                          <img 
                            src={`/images/cakes/${item.image}`} 
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <h3 className="text-lg font-semibold text-rose-800">{item.name}</h3>
                            <p className="text-lg font-bold text-rose-600">${item.price}</p>
                          </div>
                          <p className="text-rose-600 mb-2">{item.size}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center border border-rose-300 rounded-full">
                              <button className="px-3 py-1 text-rose-600 hover:bg-rose-50">-</button>
                              <span className="px-2">1</span>
                              <button className="px-3 py-1 text-rose-600 hover:bg-rose-50">+</button>
                            </div>
                            <button className="text-rose-500 hover:text-rose-700">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t border-rose-100">
                  <div className="flex justify-between items-center">
                    <p className="text-rose-700">Have a coupon code?</p>
                    <button className="text-rose-600 hover:text-rose-800 font-medium">
                      Apply Coupon
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white rounded-xl shadow-md p-6 sticky top-4">
                <h2 className="text-xl font-bold text-rose-800 mb-4">Order Summary</h2>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <p className="text-rose-600">Subtotal</p>
                    <p className="text-rose-800 font-medium">${subtotal.toFixed(2)}</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-rose-600">Tax (10%)</p>
                    <p className="text-rose-800 font-medium">${tax.toFixed(2)}</p>
                  </div>
                  <div className="flex justify-between pt-3 border-t border-rose-100">
                    <p className="text-lg font-bold text-rose-800">Total</p>
                    <p className="text-lg font-bold text-rose-600">${total.toFixed(2)}</p>
                  </div>
                </div>
                
                <RomanticButton text="Proceed to Checkout" fullWidth />
                
                <div className="mt-4 text-center">
                  <p className="text-sm text-rose-500">or</p>
                  <a 
                    href="/products" 
                    className="inline-block mt-2 text-rose-600 hover:text-rose-800 font-medium"
                  >
                    Continue Shopping
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <HeartFooter />
    </div>
  );
}