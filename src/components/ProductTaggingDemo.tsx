
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Tag } from "lucide-react";

const ProductTaggingDemo = () => {
  const [isAnimating, setIsAnimating] = useState(true);
  
  const productTags = [
    { label: "Summer Collection", color: "bg-blue-500" },
    { label: "Casual Wear", color: "bg-purple-500" },
    { label: "Cotton Blend", color: "bg-green-500" },
    { label: "Size M", color: "bg-orange-500" },
    { label: "Trending", color: "bg-pink-500" },
    { label: "New Arrival", color: "bg-cyan-500" }
  ];

  const handleCardClick = () => {
    setIsAnimating(!isAnimating);
  };

  return (
    <div className="relative">
      <Card 
        className="bg-gray-900/50 border-gray-700 overflow-hidden hover:border-[#3BC553]/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#3BC553]/10 cursor-pointer group"
        onClick={handleCardClick}
      >
        <CardContent className="p-0">
          <div className="relative">
            {/* Mock Product Image */}
            <div className="h-64 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center group-hover:from-gray-600 group-hover:to-gray-700 transition-all duration-300">
              <div className="w-32 h-40 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300 group-hover:shadow-xl"></div>
            </div>
            
            {/* AI Tagging Animation */}
            <div className="absolute inset-0 pointer-events-none">
              {productTags.map((tag, index) => (
                <div
                  key={tag.label}
                  className={`absolute transition-all duration-1000 ${
                    isAnimating ? 'animate-pulse opacity-100 scale-100' : 'opacity-75 scale-95'
                  } ${
                    index === 0 ? 'top-4 left-4' :
                    index === 1 ? 'top-4 right-4' :
                    index === 2 ? 'bottom-20 left-4' :
                    index === 3 ? 'bottom-20 right-4' :
                    index === 4 ? 'top-1/2 left-2' :
                    'top-1/2 right-2'
                  } hover:scale-110 hover:z-10`}
                  style={{ 
                    animationDelay: `${index * 0.5}s`,
                    animationDuration: '2s'
                  }}
                >
                  <Badge className={`${tag.color} text-white text-xs flex items-center gap-1 shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                    <Tag className="w-3 h-3" />
                    {tag.label}
                  </Badge>
                </div>
              ))}
            </div>

            {/* Scanning effect overlay */}
            {isAnimating && (
              <div className="absolute inset-0 bg-[#3BC553]/5 animate-pulse pointer-events-none" />
            )}
          </div>
          
          <div className="p-4 group-hover:bg-gray-800/30 transition-colors duration-300">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-[#3BC553] group-hover:animate-pulse" />
              <span className="text-sm text-[#3BC553] font-medium group-hover:text-green-400 transition-colors">
                AI Auto-Tagging Complete
              </span>
            </div>
            <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
              6 intelligent tags applied in 0.3 seconds • Click to toggle animation
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductTaggingDemo;
