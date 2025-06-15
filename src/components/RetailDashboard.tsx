
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Package, Zap, Target, Sparkles, BarChart3, Users, Eye, MessageSquare, ChevronDown, ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";
import AnimatedNumber from "./AnimatedNumber";

const RetailDashboard = () => {
  const [showAnalyticsDemo, setShowAnalyticsDemo] = useState(false);
  const [isActivityExpanded, setIsActivityExpanded] = useState(true);
  const [interactionCount, setInteractionCount] = useState(0);

  // Simulate real-time updates based on interactions
  const [metrics, setMetrics] = useState([
    { label: "Products Tagged", value: "2,847", trend: "+12%", icon: Package },
    { label: "Content Generated", value: "1,923", trend: "+28%", icon: Zap },
    { label: "Conversion Rate", value: "24.8%", trend: "+5.2%", icon: Target },
    { label: "Time Saved", value: "156", suffix: "hrs", trend: "+45%", icon: TrendingUp }
  ]);

  const [analyticsData, setAnalyticsData] = useState([
    { metric: "Catalog Performance", value: "94.2%", change: "+8.5%", icon: BarChart3, color: "text-green-400" },
    { metric: "User Engagement", value: "67.8%", change: "+12.3%", icon: Users, color: "text-blue-400" },
    { metric: "Product Views", value: "15.2K", change: "+24.7%", icon: Eye, color: "text-purple-400" },
    { metric: "SEO Rankings", value: "5", suffix: " (Top)", change: "+3 spots", icon: MessageSquare, color: "text-yellow-400" }
  ]);

  // Update metrics when user interacts
  useEffect(() => {
    if (interactionCount > 0) {
      const updateMetrics = () => {
        setMetrics(prev => prev.map(metric => {
          const baseValue = parseInt(metric.value.replace(/[^\d]/g, ''));
          const increment = Math.floor(Math.random() * 10) + 1;
          const newValue = baseValue + increment;
          
          if (metric.label === "Products Tagged") {
            return { ...metric, value: newValue.toString() };
          } else if (metric.label === "Content Generated") {
            return { ...metric, value: (newValue - 900).toString() };
          } else if (metric.label === "Conversion Rate") {
            const rate = (parseFloat(metric.value) + 0.1).toFixed(1);
            return { ...metric, value: `${rate}%` };
          } else if (metric.label === "Time Saved") {
            return { ...metric, value: (newValue - 2700).toString() };
          }
          return metric;
        }));

        setAnalyticsData(prev => prev.map(item => {
          if (item.metric === "Catalog Performance") {
            const current = parseFloat(item.value);
            const newValue = Math.min(99.9, current + 0.2);
            return { ...item, value: `${newValue.toFixed(1)}%` };
          } else if (item.metric === "User Engagement") {
            const current = parseFloat(item.value);
            const newValue = Math.min(99.9, current + 0.3);
            return { ...item, value: `${newValue.toFixed(1)}%` };
          } else if (item.metric === "Product Views") {
            const baseValue = parseFloat(item.value.replace('K', ''));
            const newValue = (baseValue + 0.1).toFixed(1);
            return { ...item, value: `${newValue}K` };
          }
          return item;
        }));
      };

      const timer = setTimeout(updateMetrics, 500);
      return () => clearTimeout(timer);
    }
  }, [interactionCount]);

  const handleInteraction = () => {
    setInteractionCount(prev => prev + 1);
  };

  const recentActivity = [
    { action: "Auto-tagged", product: "Summer Dress Collection", count: "12 items", time: "2 min ago" },
    { action: "Generated content", product: "Athletic Sneakers", count: "5 variants", time: "5 min ago" },
    { action: "Optimized titles", product: "Home Decor", count: "23 items", time: "8 min ago" },
    { action: "Created tags", product: "Electronics", count: "8 categories", time: "12 min ago" },
    { action: "Analyzed images", product: "Fashion Accessories", count: "15 items", time: "15 min ago" },
    { action: "Updated SEO", product: "Beauty Products", count: "31 items", time: "18 min ago" }
  ];

  return (
    <div className="space-y-6">
      {/* Header with Feel It Button */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold text-white">Analytics Dashboard</h3>
        <Button 
          onClick={() => {
            setShowAnalyticsDemo(!showAnalyticsDemo);
            handleInteraction();
          }}
          className="bg-gradient-to-r from-[#3BC553] to-green-400 hover:from-green-600 hover:to-green-500 text-white"
        >
          {showAnalyticsDemo ? "Hide Demo" : "Feel it"}
          <Sparkles className="ml-2 w-4 h-4" />
        </Button>
      </div>

      {/* Live Analytics Demo */}
      {showAnalyticsDemo && (
        <div className="mb-6">
          <div className="bg-black/30 rounded-2xl p-6 border border-[#3BC553]/30">
            <h4 className="text-xl font-bold text-white mb-4">Live Analytics Demo</h4>
            <p className="text-gray-300 mb-6">
              Watch real-time metrics update as our AI processes your catalog data.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {analyticsData.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card key={index} className="bg-gray-900/50 border-gray-700">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <Icon className={`w-5 h-5 ${item.color}`} />
                        <Badge className={`bg-green-500/20 text-green-400 text-xs border-green-500/30`}>
                          {item.change}
                        </Badge>
                      </div>
                      <div className={`text-2xl font-bold ${item.color} mb-1`}>
                        <AnimatedNumber 
                          value={item.value} 
                          key={`${item.metric}-${interactionCount}`}
                          duration={2500}
                        />
                        {item.suffix && <span>{item.suffix}</span>}
                      </div>
                      <div className="text-xs text-gray-400">{item.metric}</div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="bg-gray-900/30 rounded-lg p-4 border border-gray-700">
              <h5 className="text-white font-semibold mb-3">Real-time Processing</h5>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">AI Content Generation</span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#3BC553] rounded-full animate-pulse"></div>
                    <span className="text-[#3BC553]">Processing...</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">Product Categorization</span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    <span className="text-blue-400">Active</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">SEO Optimization</span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                    <span className="text-yellow-400">Optimizing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <Card key={metric.label} className="bg-gray-900/50 border-gray-700">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <Icon className="w-5 h-5 text-[#3BC553]" />
                  <Badge className="bg-green-500/20 text-green-400 text-xs border-green-500/30">
                    {metric.trend}
                  </Badge>
                </div>
                <div className="text-2xl font-bold text-white mb-1">
                  <AnimatedNumber 
                    value={metric.value} 
                    key={`${metric.label}-${interactionCount}`}
                    duration={3000}
                  />
                  {metric.suffix && <span>{metric.suffix}</span>}
                </div>
                <div className="text-xs text-gray-400">{metric.label}</div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recent Activity */}
      <Card className="bg-gray-900/50 border-gray-700">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-white text-lg">Recent AI Activity</CardTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setIsActivityExpanded(!isActivityExpanded);
                handleInteraction();
              }}
              className="text-gray-400 hover:text-white"
            >
              {isActivityExpanded ? (
                <>
                  <ChevronUp className="w-4 h-4 mr-1" />
                  Collapse
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4 mr-1" />
                  Expand
                </>
              )}
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-6 pt-0">
          <div className="space-y-3">
            {isActivityExpanded ? (
              // Show all 6 items when expanded
              recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b border-gray-700 last:border-b-0">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#3BC553] rounded-full animate-pulse"></div>
                    <div>
                      <span className="text-white text-sm font-medium">{activity.action}</span>
                      <span className="text-gray-400 text-sm ml-1">{activity.product}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[#3BC553] text-sm font-medium">{activity.count}</div>
                    <div className="text-gray-400 text-xs">{activity.time}</div>
                  </div>
                </div>
              ))
            ) : (
              // Show only first 3 items when collapsed
              recentActivity.slice(0, 3).map((activity, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b border-gray-700 last:border-b-0">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#3BC553] rounded-full animate-pulse"></div>
                    <div>
                      <span className="text-white text-sm font-medium">{activity.action}</span>
                      <span className="text-gray-400 text-sm ml-1">{activity.product}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[#3BC553] text-sm font-medium">{activity.count}</div>
                    <div className="text-gray-400 text-xs">{activity.time}</div>
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RetailDashboard;
