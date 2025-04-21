import { motion } from 'framer-motion';
import { FaGift, FaHeart } from 'react-icons/fa';

export default function SpecialOfferBanner() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-rose-600 to-pink-500 text-white py-4 px-6 relative overflow-hidden"
    >
      {/* Floating hearts background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-rose-300 opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 20 + 10}px`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <FaHeart />
          </motion.div>
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
        <div className="flex items-center mb-4 md:mb-0">
          <FaGift className="text-2xl mr-3" />
          <div>
            <h3 className="text-lg md:text-xl font-bold">VALENTINE'S SPECIAL</h3>
            <p className="text-sm">20% OFF all heart-shaped cakes + free romantic gift wrapping</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="bg-white bg-opacity-20 px-3 py-1 rounded-full">
            <span className="font-bold">CODE: </span>
            <span className="font-mono">LOVE2025</span>
          </div>
          
          <button className="bg-white text-rose-600 px-4 py-1 rounded-full text-sm font-bold hover:bg-rose-50 transition duration-300 flex items-center">
            Claim Offer <FaHeart className="ml-1" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}