import RomanticNavbar from '@/components/main/RomanticNavbar';
import HeartFooter from '@/components/main/HeartFooter';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-rose-50">
      <RomanticNavbar />
      
      <main className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-rose-800 mb-8 text-center">Our Love Story</h1>
          
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
              <div className="w-full md:w-1/2">
                <div className="bg-rose-100 h-64 rounded-lg flex items-center justify-center">
                  <span className="text-rose-500 text-lg">Our Photo</span>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl font-bold text-rose-700 mb-4">How It All Began</h2>
                <p className="text-rose-900 mb-4">
                  It was a rainy afternoon in Paris when we first met at a small patisserie. 
                  Our shared love for baking brought us together, and soon we were creating 
                  beautiful cakes that told stories of love.
                </p>
                <p className="text-rose-900">
                  In 2020, we decided to turn our passion into a business, and Sweet Love Bakery was born.
                </p>
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-rose-700 mb-4">Our Philosophy</h2>
              <p className="text-rose-900">
                We believe every cake should be as unique as the love it celebrates. 
                That's why we pour our hearts into every creation, using only the finest 
                ingredients and techniques passed down through generations.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-rose-700 mb-4">Meet the Team</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-rose-50 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-rose-800 mb-2">Sophie</h3>
                  <p className="text-rose-700">Head Baker & Co-Founder</p>
                  <p className="text-rose-600 mt-2">"I specialize in creating romantic floral designs that tell your love story."</p>
                </div>
                <div className="bg-rose-50 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-rose-800 mb-2">Lucas</h3>
                  <p className="text-rose-700">Pastry Chef & Co-Founder</p>
                  <p className="text-rose-600 mt-2">"My passion is crafting rich, decadent flavors that create unforgettable moments."</p>
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