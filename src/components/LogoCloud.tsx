
import React from 'react';

const logos = [
  { name: 'FedEx' },
  { name: "Levi's" },
  { name: 'Nike' },
  { name: 'TATA' },
  { name: 'DIESEL' },
  { name: 'zenyum' },
  { name: 'Dubai Commercity' },
  { name: 'Microsoft' },
  { name: 'HDFC BANK' },
  { name: 'SF' },
  { name: 'Google Cloud' },
  { name: 'ThredUp' },
];

const LogoCloud = () => {
  return (
    <div className="w-full">
      <div className="max-w-6xl mx-auto text-center px-4">
        <p className="text-sm text-gray-400 uppercase tracking-widest">
          Embraced by iconic enterprises around the world
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-10 gap-x-8 mt-8">
          {logos.map((logo) => (
            <div key={logo.name} className="flex justify-center items-center h-12">
              <span className="text-xl font-bold text-gray-500 transition-colors hover:text-gray-300 whitespace-nowrap">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoCloud;
