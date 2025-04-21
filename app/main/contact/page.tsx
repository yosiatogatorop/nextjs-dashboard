import RomanticNavbar from '@/components/main/RomanticNavbar';
import HeartFooter from '@/components/main/HeartFooter';
import RomanticButton from '@/components/ui/RomanticButton';
import LoveInput from '@/components/ui/LoveInput';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-rose-50">
      <RomanticNavbar />
      
      <main className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-rose-800 mb-8 text-center">Sweet Messages</h1>
          
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h2 className="text-2xl font-bold text-rose-700 mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rose-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-rose-800">Our Bakery</p>
                      <p className="text-rose-600">123 Love Lane, Romance City</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rose-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-rose-800">Email Us</p>
                      <p className="text-rose-600">love@sweetlovebakery.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rose-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-rose-800">Call Us</p>
                      <p className="text-rose-600">(123) 456-7890</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-rose-700 mb-4">Business Hours</h3>
                  <ul className="space-y-2 text-rose-600">
                    <li className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-rose-700 mb-4">Send Us a Message</h2>
                <form className="space-y-4">
                  <LoveInput 
                    label="Your Name" 
                    type="text" 
                    placeholder="Enter your name" 
                  />
                  <LoveInput 
                    label="Your Email" 
                    type="email" 
                    placeholder="Enter your email" 
                  />
                  <div>
                    <label className="block text-rose-700 mb-1">Your Message</label>
                    <textarea 
                      className="w-full p-3 border border-rose-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500" 
                      rows={5}
                      placeholder="Type your sweet message here..."
                    ></textarea>
                  </div>
                  <RomanticButton text="Send Message" />
                </form>
              </div>
            </div>
            
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-rose-700 mb-4">Find Us</h2>
              <div className="bg-rose-100 h-64 rounded-lg flex items-center justify-center">
                <span className="text-rose-500 text-lg">Map Location</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <HeartFooter />
    </div>
  );
}