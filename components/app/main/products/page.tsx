import RomanticNavbar from '@/components/main/RomanticNavbar';
import ProductCard from '@/components/main/ProductCard';
import HeartFooter from '@/components/main/HeartFooter';
import { allProducts } from '@/lib/products';

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-rose-50">
      <RomanticNavbar />
      
      <main className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-rose-800 mb-8 text-center">Our Romantic Cake Collection</h1>
          
          <div className="mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="w-full md:w-1/2">
              <input
                type="text"
                placeholder="Search for cakes..."
                className="w-full p-3 border border-rose-300 rounded-full focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
            </div>
            <div className="w-full md:w-1/2 flex justify-end">
              <select className="p-3 border border-rose-300 rounded-full focus:outline-none focus:ring-2 focus:ring-rose-500 text-rose-800">
                <option>Sort by</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Most Popular</option>
                <option>Newest</option>
              </select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {allProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>

      <HeartFooter />
    </div>
  );
}