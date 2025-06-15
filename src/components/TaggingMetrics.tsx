
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Zap, Package, Clock, Target, PlayCircle, PauseCircle } from "lucide-react";

const TaggingMetrics = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [metrics, setMetrics] = useState({
    processed: 0,
    accuracy: 95.2,
    speed: 0,
    totalProducts: 1000
  });

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setMetrics(prev => {
        if (prev.processed >= prev.totalProducts) {
          setIsRunning(false);
          return prev;
        }
        
        return {
          ...prev,
          processed: Math.min(prev.processed + Math.floor(Math.random() * 15 + 5), prev.totalProducts),
          accuracy: Math.min(99.9, prev.accuracy + Math.random() * 0.1),
          speed: Math.floor(Math.random() * 50 + 150)
        };
      });
    }, 200);

    return () => clearInterval(interval);
  }, [isRunning]);

  const progressPercentage = (metrics.processed / metrics.totalProducts) * 100;

  return (
    <Card className="bg-black/40 border-[#3BC553]/30 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <Zap className="w-5 h-5 text-[#3BC553]" />
          Live Processing Demo
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex justify-center">
          <Button
            onClick={() => setIsRunning(!isRunning)}
            size="lg"
            className={`${
              isRunning 
                ? 'bg-red-600 hover:bg-red-700' 
                : 'bg-[#3BC553] hover:bg-green-600'
            } text-white px-8`}
          >
            {isRunning ? (
              <>
                <PauseCircle className="w-5 h-5 mr-2" />
                Pause Processing
              </>
            ) : (
              <>
                <PlayCircle className="w-5 h-5 mr-2" />
                Start Processing
              </>
            )}
          </Button>
        </div>

        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-300">Products Processed</span>
              <span className="text-[#3BC553] font-bold">
                {metrics.processed}/{metrics.totalProducts}
              </span>
            </div>
            <Progress value={progressPercentage} className="h-3" />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Package className="w-4 h-4 text-[#3BC553] mr-1" />
                <span className="text-xs text-gray-400">Speed</span>
              </div>
              <div className="text-lg font-bold text-white">
                {isRunning ? `${metrics.speed}/min` : '0/min'}
              </div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Target className="w-4 h-4 text-[#3BC553] mr-1" />
                <span className="text-xs text-gray-400">Accuracy</span>
              </div>
              <div className="text-lg font-bold text-white">
                {metrics.accuracy.toFixed(1)}%
              </div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Clock className="w-4 h-4 text-[#3BC553] mr-1" />
                <span className="text-xs text-gray-400">ETA</span>
              </div>
              <div className="text-lg font-bold text-white">
                {isRunning 
                  ? `${Math.ceil((metrics.totalProducts - metrics.processed) / (metrics.speed || 1))}min`
                  : '--'
                }
              </div>
            </div>
          </div>
        </div>

        {progressPercentage === 100 && (
          <div className="text-center text-[#3BC553] font-semibold animate-pulse">
            ✅ Processing Complete! All products tagged successfully.
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default TaggingMetrics;
