
import React from 'react';
import { Star } from 'lucide-react';

const platforms = ['Falabella', 'Paris.cl', 'cencosud', 'Jumbo', 'shopify', 'Brandsclub', 'Kiko cosmetics', 'Serhafen'];

const LogoCloud = () => {
  return (
    <div className="w-full py-8">
      <div className="max-w-6xl mx-auto text-center px-4">
        <div className="flex justify-center items-center gap-2 mb-8">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>
          <p className="text-sm text-gray-300 tracking-wide">Trusted by 1,000+ Brands</p>
        </div>

        <div className="w-full max-w-xl mx-auto border-t border-white/10 my-12"></div>

        <div className="space-y-8">
          <p className="text-sm text-gray-400 tracking-wide mb-8">
            Trusted by leading eCommerce platforms
          </p>
          
          {/* Fixed animated scrolling container with proper spacing */}
          <div className="relative overflow-hidden py-4">
            <div className="flex animate-scroll">
              {/* First set of logos with increased spacing */}
              <div className="flex items-center justify-center min-w-full gap-12">
                {platforms.map((platform, index) => (
                  <span
                    key={`first-${platform}`}
                    className="text-xl text-gray-500 transition-all duration-300 hover:text-white hover:scale-110 cursor-pointer font-medium whitespace-nowrap flex-shrink-0"
                    style={{
                      animationDelay: `${index * 0.2}s`,
                    }}
                  >
                    {platform}
                  </span>
                ))}
              </div>
              
              {/* Duplicate set for seamless loop with same spacing */}
              <div className="flex items-center justify-center min-w-full gap-12">
                {platforms.map((platform, index) => (
                  <span
                    key={`second-${platform}`}
                    className="text-xl text-gray-500 transition-all duration-300 hover:text-white hover:scale-110 cursor-pointer font-medium whitespace-nowrap flex-shrink-0"
                    style={{
                      animationDelay: `${index * 0.2}s`,
                    }}
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoCloud;
