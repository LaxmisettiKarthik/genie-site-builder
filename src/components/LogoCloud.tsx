
import React from 'react';
import { Star } from 'lucide-react';

const platforms = ['Shopify', 'WooCommerce', 'Magento', 'BigCommerce'];

const LogoCloud = () => {
  return (
    <div className="w-full">
      <div className="max-w-6xl mx-auto text-center px-4">
        <div className="flex justify-center items-center gap-2">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>
          <p className="text-sm text-gray-300 tracking-wide">Trusted by 1,000+ Brands</p>
        </div>

        <div className="w-full max-w-xl mx-auto border-t border-white/10 my-8"></div>

        <div className="space-y-6">
          <p className="text-sm text-gray-400 tracking-wide">
            Trusted by leading eCommerce platforms
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-10 sm:gap-x-16">
            {platforms.map((platform) => (
              <span
                key={platform}
                className="text-xl text-gray-500 transition-all duration-300 hover:text-white hover:scale-105 cursor-pointer font-medium"
              >
                {platform}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoCloud;
