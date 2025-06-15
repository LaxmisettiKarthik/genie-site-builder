
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
    
    // Animate scan progress smoothly
    const progressInterval = setInterval(() => {
      setScanProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 4;
      });
    }, 50);

    // Show tags with sequential delays for a cleaner effect
    tags.forEach((_, index) => {
      setTimeout(() => {
        setVisibleTags(prev => [...prev, index]);
      }, 800 + (index * 300)); // Start after scan begins, then 300ms between each tag
    });

    // Stop scanning after all tags are visible
    setTimeout(() => {
      setIsScanning(false);
    }, 800 + (tags.length * 300) + 500);
  };

  // Reset animation when component unmounts or resets
  useEffect(() => {
    if (!isScanning && visibleTags.length === 0) {
      setScanProgress(0);
    }
  }, [isScanning, visibleTags]);

  return (
    <Card 
      className="bg-gray-900/80 border-gray-700 hover:border-[#3BC553]/50 transition-all duration-500 overflow-hidden group hover:scale-[1.02] hover:shadow-xl hover:shadow-[#3BC553]/5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-0">
        <div className="relative">
          {/* Product Image */}
          <div className="h-64 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden">
            <div 
              className={`w-40 h-48 rounded-lg shadow-xl transition-all duration-700 ${
                isScanning ? 'scale-105 brightness-110 shadow-2xl shadow-[#3BC553]/20' : 
                isHovered ? 'scale-102' : 'scale-100'
              }`}
              style={{ 
                background: image,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            
            {/* Clean Scanning Effect */}
            {isScanning && (
              <div className="absolute inset-0 pointer-events-none">
                {/* Progress bar at top */}
                <div className="absolute top-0 left-0 h-1 bg-[#3BC553] transition-all duration-300 shadow-lg shadow-[#3BC553]/50"
                     style={{ width: `${scanProgress}%` }} />
                
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-[#3BC553]/5" />
                
                {/* AI scanning indicator */}
                <div className="absolute top-4 right-4 flex items-center gap-2 bg-black/70 rounded-full px-3 py-1 backdrop-blur-sm">
                  <Brain className="w-4 h-4 text-[#3BC553] animate-pulse" />
                  <span className="text-[#3BC553] text-xs font-medium">Analyzing...</span>
                </div>
              </div>
            )}

            {/* Clean Tag Positioning */}
            {tags.map((tag, index) => {
              // Define clean, non-overlapping positions
              const positions = [
                'top-3 left-3',
                'top-3 right-3', 
                'bottom-16 left-3',
                'bottom-16 right-3',
                'top-1/2 left-3 -translate-y-1/2',
                'top-1/2 right-3 -translate-y-1/2',
                'bottom-3 left-1/2 -translate-x-1/2'
              ];

              return (
                <div
                  key={tag.label}
                  className={`absolute transition-all duration-500 cursor-pointer ${
                    visibleTags.includes(index) 
                      ? 'opacity-100 scale-100 translate-y-0' 
                      : 'opacity-0 scale-75 translate-y-2'
                  } ${positions[index] || 'bottom-3 left-1/2 -translate-x-1/2'}`}
                  onClick={() => onTagClick?.(tag.label)}
                  style={{ 
                    transitionDelay: visibleTags.includes(index) ? '0ms' : `${index * 100}ms`,
                    zIndex: 10 + index
                  }}
                >
                  <Badge 
                    className={`${tag.color} text-white text-xs flex items-center gap-1.5 px-2.5 py-1 
                               hover:scale-110 transition-all duration-300 shadow-lg backdrop-blur-sm
                               border border-white/20 font-medium`}
                  >
                    <Tag className="w-3 h-3" />
                    {tag.label}
                  </Badge>
                </div>
              );
            })}
          </div>
          
          <div className="p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-white font-semibold group-hover:text-[#3BC553] transition-colors duration-300">{title}</h3>
              <div className="flex items-center gap-2 text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                <Eye className="w-3 h-3" />
                <span>{visibleTags.length}/{tags.length} detected</span>
              </div>
            </div>
            
            <Button 
              onClick={startScanning}
              disabled={isScanning}
              className={`w-full bg-[#3BC553] hover:bg-green-600 text-white transition-all duration-300 
                         hover:scale-[1.02] hover:shadow-lg hover:shadow-[#3BC553]/25 font-medium ${
                isScanning ? 'cursor-not-allowed opacity-80' : ''
              }`}
              size="sm"
            >
              {isScanning ? (
                <>
                  <Zap className="w-4 h-4 mr-2 animate-pulse" />
                  Analyzing... {Math.round(scanProgress)}%
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 mr-2" />
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
