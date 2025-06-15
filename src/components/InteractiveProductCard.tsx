
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, Tag, Eye, Brain, Zap } from "lucide-react";

interface ProductCardProps {
  image: string;
  title: string;
  tags: Array<{ label: string; color: string; delay: number }>;
  onTagClick?: (tag: string) => void;
}

const InteractiveProductCard = ({ image, title, tags, onTagClick }: ProductCardProps) => {
  const [isScanning, setIsScanning] = useState(false);
  const [visibleTags, setVisibleTags] = useState<number[]>([]);
  const [scanProgress, setScanProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const startScanning = () => {
    setIsScanning(true);
    setVisibleTags([]);
    setScanProgress(0);
    
    // Animate scan progress
    const progressInterval = setInterval(() => {
      setScanProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    // Show tags with delays
    tags.forEach((_, index) => {
      setTimeout(() => {
        setVisibleTags(prev => [...prev, index]);
      }, tags[index].delay);
    });

    // Stop scanning after all tags are visible
    setTimeout(() => {
      setIsScanning(false);
    }, Math.max(...tags.map(t => t.delay)) + 500);
  };

  return (
    <Card 
      className="bg-gray-900/80 border-gray-700 hover:border-[#3BC553]/50 transition-all duration-500 overflow-hidden group hover:scale-105 hover:shadow-lg hover:shadow-[#3BC553]/10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-0">
        <div className="relative">
          {/* Product Image */}
          <div className="h-64 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden">
            <div 
              className={`w-40 h-48 rounded-lg shadow-xl transition-all duration-500 ${
                isScanning ? 'scale-105 brightness-110' : isHovered ? 'scale-102' : 'scale-100'
              }`}
              style={{ 
                background: image,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            
            {/* Scanning Effect */}
            {isScanning && (
              <div className="absolute inset-0 pointer-events-none">
                <div 
                  className="absolute top-0 left-0 w-full h-1 bg-[#3BC553] transition-all duration-1000 animate-pulse"
                  style={{ width: `${scanProgress}%` }}
                />
                <div className="absolute inset-0 bg-[#3BC553]/10 animate-pulse" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Brain className="w-8 h-8 text-[#3BC553] animate-spin" />
                </div>
                
                {/* Scanning lines effect */}
                <div className="absolute inset-0">
                  <div className="absolute w-full h-0.5 bg-[#3BC553] animate-bounce" style={{ top: `${scanProgress}%` }} />
                  <div className="absolute w-0.5 h-full bg-[#3BC553] animate-bounce" style={{ left: `${scanProgress}%` }} />
                </div>
              </div>
            )}

            {/* Hover effect overlay */}
            {isHovered && !isScanning && (
              <div className="absolute inset-0 bg-[#3BC553]/5 animate-pulse pointer-events-none" />
            )}

            {/* AI Tags */}
            {tags.map((tag, index) => (
              <div
                key={tag.label}
                className={`absolute transition-all duration-500 cursor-pointer hover:z-10 ${
                  visibleTags.includes(index) 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-75'
                } ${
                  index === 0 ? 'top-4 left-4' :
                  index === 1 ? 'top-4 right-4' :
                  index === 2 ? 'bottom-20 left-4' :
                  index === 3 ? 'bottom-20 right-4' :
                  index === 4 ? 'top-1/3 left-2 -translate-y-1/2' :
                  index === 5 ? 'top-1/3 right-2 -translate-y-1/2' :
                  index === 6 ? 'bottom-8 left-1/4 -translate-x-1/2' :
                  'bottom-8 right-1/4 translate-x-1/2'
                }`}
                onClick={() => onTagClick?.(tag.label)}
              >
                <Badge 
                  className={`${tag.color} text-white text-xs flex items-center gap-1 hover:scale-110 transition-all duration-300 hover:shadow-lg animate-pulse`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <Tag className="w-3 h-3" />
                  {tag.label}
                </Badge>
              </div>
            ))}
          </div>
          
          <div className="p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-white font-semibold group-hover:text-[#3BC553] transition-colors duration-300">{title}</h3>
              <div className="flex items-center gap-2 text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                <Eye className="w-3 h-3 animate-pulse" />
                <span>{visibleTags.length}/{tags.length} detected</span>
              </div>
            </div>
            
            <Button 
              onClick={startScanning}
              disabled={isScanning}
              className={`w-full bg-[#3BC553] hover:bg-green-600 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#3BC553]/25 ${
                isScanning ? 'animate-pulse' : ''
              }`}
              size="sm"
            >
              {isScanning ? (
                <>
                  <Zap className="w-4 h-4 mr-2 animate-pulse" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                  Start AI Analysis
                </>
              )}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default InteractiveProductCard;
