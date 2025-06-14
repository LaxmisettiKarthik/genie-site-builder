
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Tag } from "lucide-react";

const ProductTaggingDemo = () => {
  const productTags = [
    { label: "Summer Collection", color: "bg-blue-500" },
    { label: "Casual Wear", color: "bg-purple-500" },
    { label: "Cotton Blend", color: "bg-green-500" },
    { label: "Size M", color: "bg-orange-500" },
    { label: "Trending", color: "bg-pink-500" },
    { label: "New Arrival", color: "bg-cyan-500" }
  ];

  return (
    <div className="relative">
      <Card className="bg-gray-900/50 border-gray-700 overflow-hidden">
        <CardContent className="p-0">
          <div className="relative">
            {/* Mock Product Image */}
            <div className="h-64 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
              <div className="w-32 h-40 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg shadow-lg"></div>
            </div>
            
            {/* AI Tagging Animation */}
            <div className="absolute inset-0 pointer-events-none">
              {productTags.map((tag, index) => (
                <div
                  key={tag.label}
                  className={`absolute animate-pulse ${
                    index === 0 ? 'top-4 left-4' :
                    index === 1 ? 'top-4 right-4' :
                    index === 2 ? 'bottom-20 left-4' :
                    index === 3 ? 'bottom-20 right-4' :
                    index === 4 ? 'top-1/2 left-2' :
                    'top-1/2 right-2'
                  }`}
                  style={{ animationDelay: `${index * 0.5}s` }}
                >
                  <Badge className={`${tag.color} text-white text-xs flex items-center gap-1`}>
                    <Tag className="w-3 h-3" />
                    {tag.label}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
          
          <div className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-[#3BC553]" />
              <span className="text-sm text-[#3BC553] font-medium">AI Auto-Tagging Complete</span>
            </div>
            <p className="text-gray-400 text-sm">
              6 intelligent tags applied in 0.3 seconds
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductTaggingDemo;
