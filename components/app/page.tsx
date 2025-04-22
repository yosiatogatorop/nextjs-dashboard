import RomanticNavbar from '@/components/main/RomanticNavbar';
import SpecialOfferBanner from '@/components/main/SpecialOfferBanner';
import ProductCard from '@/components/main/ProductCard';
import HeartFooter from '@/components/main/HeartFooter';
import TestimonialCard from '@/components/main/TestimonialCard';
import { getFeaturedProducts, getTestimonials } from '@/lib/products';
import RomanticButton from '@/components/ui/RomanticButton';
import { FaHeart, FaArrowRight } from 'react-icons/fa';

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();
  const testimonials = getTestimonials();

  return (
    <div className="min-h-screen flex flex-col">
      <RomanticNavbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[80vh] min-h-[500px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-pink-600 opacity-90"></div>
          <div className="absolute inset-0 bg-[url('/images/heart-pattern.svg')] bg-repeat opacity-10"></div>
          
          <div className="relative h-full container mx-auto px-4 flex items-center justify-center">
            <div className="text-center max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-romantic">
                Sweet Love Bakery
              </h1>
              <p className="text-xl text-white mb-8">
                Setiap gigitan adalah cerita cinta yang manis
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <RomanticButton 
                  size="lg" 
                  icon="heart"
                  animate="heartbeat"
                  href="./main/products"
                >
                  Lihat Koleksi
                </RomanticButton>
                <RomanticButton 
                  variant="outline" 
                  size="lg"
                  icon="arrow"
                  href="./main/about"
                >
                  Kisah Kami
                </RomanticButton>
              </div>
            </div>
          </div>
        </section>

        {/* Special Offer Banner */}
        <SpecialOfferBanner />

        {/* Featured Products */}
        <section className="py-16 px-4 container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-rose-800 mb-4">
              Kue Spesial Kami
            </h2>
            <div className="w-24 h-1 bg-rose-400 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <RomanticButton 
              href="./main/products" 
              size="lg"
              icon="arrow"
              animate="float"
            >
              Lihat Semua Produk
            </RomanticButton>
          </div>
        </section>

        {/* Love Story */}
        <section className="bg-rose-100 py-16 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <div className="bg-white p-2 rounded-xl shadow-lg">
                  <div className="bg-rose-50 rounded-lg overflow-hidden aspect-square">
                    {/* Placeholder for image */}
                    <div className="h-full w-full flex items-center justify-center text-rose-400">
                      <FaHeart className="text-8xl" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-rose-800 mb-6">
                  Dibuat dengan Cinta
                </h2>
                <p className="text-rose-900 mb-6">
                  Setiap kue kami dibuat dengan bahan terbaik dan sentuhan kasih sayang. 
                  Kami percaya bahwa kue yang dibuat dengan hati akan membawa kebahagiaan 
                  untuk setiap momen spesial Anda.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-rose-500 mr-2">✓</span>
                    <span>100% bahan premium</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rose-500 mr-2">✓</span>
                    <span>Dekorasi handmade</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rose-500 mr-2">✓</span>
                    <span>Pilihan rasa unik</span>
                  </li>
                </ul>
                <RomanticButton 
                  href="./main/about" 
                  variant="secondary"
                  icon="heart"
                >
                  Pelajari Lebih Lanjut
                </RomanticButton>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-rose-800 mb-4">
              Kata Mereka
            </h2>
            <p className="text-rose-600 max-w-2xl mx-auto">
              Kebahagiaan pelanggan adalah prioritas kami
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map(testimonial => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-rose-500 to-pink-600 text-white py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6">
              Siap Membuat Momen Spesial?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Pesan kue romantis Anda hari ini dan buat kenangan manis yang tak terlupakan
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <RomanticButton 
                size="lg" 
                variant="outline"
                icon="heart"
                href="./main/products"
              >
                Pesan Sekarang
              </RomanticButton>
              <RomanticButton 
                size="lg" 
                variant="secondary"
                icon="arrow"
                href="./main/contact"
              >
                Konsultasi Desain
              </RomanticButton>
            </div>
          </div>
        </section>
      </main>

      <HeartFooter />
    </div>
  );
}