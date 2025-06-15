
import { forwardRef } from "react";
import InteractiveProductCard from "@/components/InteractiveProductCard";
import TaggingMetrics from "@/components/TaggingMetrics";

interface InteractiveDemoProps {
  isVisible: boolean;
  onTagClick: (tag: string) => void;
}

const InteractiveDemo = forwardRef<HTMLElement, InteractiveDemoProps>(
  ({ isVisible, onTagClick }, ref) => {
    const sampleProducts = [
      {
        image: "url('/lovable-uploads/ad5fb726-5b49-495a-96b1-53241a4c3719.png')",
        title: "Summer Dress",
        tags: [
          { label: "Summer", color: "bg-blue-500", delay: 500 },
          { label: "Casual", color: "bg-purple-500", delay: 700 },
          { label: "Size M", color: "bg-orange-500", delay: 900 },
          { label: "Sleeveless", color: "bg-teal-500", delay: 1100 },
          { label: "V-Neck", color: "bg-rose-500", delay: 1300 },
          { label: "Knee-Length", color: "bg-indigo-500", delay: 1500 },
          { label: "Collarless", color: "bg-yellow-500", delay: 1700 }
        ]
      },
      {
        image: "url('/lovable-uploads/de09dc01-b8d3-4d2b-9bb1-58776a23d59b.png')",
        title: "Sport Shoes",
        tags: [
          { label: "Athletic", color: "bg-red-500", delay: 600 },
          { label: "Running", color: "bg-blue-500", delay: 900 },
          { label: "Size 42", color: "bg-yellow-500", delay: 1200 },
          { label: "Breathable", color: "bg-cyan-500", delay: 1500 },
          { label: "Mesh Upper", color: "bg-lime-500", delay: 1800 },
          { label: "Lace-up", color: "bg-purple-500", delay: 2100 }
        ]
      },
      {
        image: "url('/lovable-uploads/3e32cc94-e9c9-4e70-9efa-6fafabdc2022.png')",
        title: "Leather Jacket",
        tags: [
          { label: "Leather", color: "bg-amber-600", delay: 700 },
          { label: "Winter", color: "bg-slate-600", delay: 1000 },
          { label: "Premium", color: "bg-emerald-500", delay: 1300 },
          { label: "Black", color: "bg-gray-800", delay: 1600 },
          { label: "Unisex", color: "bg-indigo-500", delay: 1900 }
        ]
      },
      {
        image: "url('/lovable-uploads/d70d254c-8ae8-4e87-818e-0459cfb8cdb1.png')",
        title: "Cosmetics Set",
        tags: [
          { label: "Cosmetics", color: "bg-pink-400", delay: 500 },
          { label: "Matte Finish", color: "bg-red-400", delay: 800 },
          { label: "Long-lasting", color: "bg-purple-400", delay: 1100 },
          { label: "Cruelty-free", color: "bg-green-400", delay: 1400 },
          { label: "Set of 3", color: "bg-yellow-400", delay: 1700 }
        ]
      }
    ];

    if (!isVisible) return null;

    return (
      <section ref={ref} className="px-6 lg:px-8 py-20 bg-black/20 relative z-10 animate-fade-in">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6 font-afacad">Interactive AI Demo</h2>
            <p className="text-xl text-gray-300 mb-8">Click "Start AI Analysis" on any product to see real-time tagging</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {sampleProducts.map((product, index) => (
              <InteractiveProductCard key={index} {...product} onTagClick={onTagClick} />
            ))}
          </div>

          <div className="max-w-2xl mx-auto">
            <TaggingMetrics />
          </div>
        </div>
      </section>
    );
  }
);

InteractiveDemo.displayName = "InteractiveDemo";

export default InteractiveDemo;
