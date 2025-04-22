import RomanticNavbar from '@/components/main/RomanticNavbar';
import SpecialOfferBanner from '@/components/main/SpecialOfferBanner';
import ProductCard from '@/components/main/ProductCard';
import HeartFooter from '@/components/main/HeartFooter';
import TestimonialCard from '@/components/main/TestimonialCard';
import { featuredProducts, testimonials } from '@/lib/products';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-rose-50">
      <RomanticNavbar />
      
      <main>
        {/* Hero Section */}
        <div className="relative h-96 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-pink-500 opacity-75"></div>
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Sweet Love Bakery</h1>
              <p className="text-xl text-white mb-8">Baked with Love, Sweetened with Passion</p>
              <a 
                href="/products" 
                className="bg-white text-rose-600 px-8 py-3 rounded-full font-bold hover:bg-rose-100 transition duration-300 inline-block"
              >
                Order Now
              </a>
            </div>
          </div>
        </div>

        {/* Special Offer Banner */}
        <SpecialOfferBanner />

        {/* Featured Products */}
        <section className="py-12 px-4">
          <h2 className="text-3xl font-bold text-center text-rose-800 mb-8">Our Signature Cakes</h2>
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-white py-12 px-4">
          <h2 className="text-3xl font-bold text-center text-rose-800 mb-8">Sweet Words From Our Customers</h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </section>

        {/* Love Story */}
        <section className="bg-rose-100 py-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-rose-800 mb-6">Our Love Story</h2>
            <p className="text-lg text-rose-900 mb-6">
              Sweet Love Bakery was born from our shared passion for baking and our love story. 
              Every cake we make is infused with the same love and care we have for each other.
            </p>
            <a 
              href="/about" 
              className="bg-rose-600 text-white px-6 py-2 rounded-full hover:bg-rose-700 transition duration-300 inline-block"
            >
              Read More
            </a>
          </div>
        </section>
      </main>

      <HeartFooter />
    </div>
  );
}