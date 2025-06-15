
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Package, Zap, Target, Sparkles, BarChart3, Users, Eye, MessageSquare } from "lucide-react";
import { useState } from "react";

const RetailDashboard = () => {
  const [showAnalyticsDemo, setShowAnalyticsDemo] = useState(false);

  const metrics = [
    { label: "Products Tagged", value: "2,847", trend: "+12%", icon: Package },
    { label: "Content Generated", value: "1,923", trend: "+28%", icon: Zap },
    { label: "Conversion Rate", value: "24.8%", trend: "+5.2%", icon: Target },
    { label: "Time Saved", value: "156hrs", trend: "+45%", icon: TrendingUp }
  ];

  const recentActivity = [
    { action: "Auto-tagged", product: "Summer Dress Collection", count: "12 items", time: "2 min ago" },
    { action: "Generated content", product: "Athletic Sneakers", count: "5 variants", time: "5 min ago" },
    { action: "Optimized titles", product: "Home Decor", count: "23 items", time: "8 min ago" },
    { action: "Created tags", product: "Electronics", count: "8 categories", time: "12 min ago" }
  ];

  const analyticsData = [
    { metric: "Catalog Performance", value: "94.2%", change: "+8.5%", icon: BarChart3, color: "text-green-400" },
    { metric: "User Engagement", value: "67.8%", change: "+12.3%", icon: Users, color: "text-blue-400" },
    { metric: "Product Views", value: "15.2K", change: "+24.7%", icon: Eye, color: "text-purple-400" },
    { metric: "SEO Rankings", value: "Top 5", change: "+3 spots", icon: MessageSquare, color: "text-yellow-400" }
  ];

  return (
    <div className="space-y-6">
      {/* Header with Feel It Button */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold text-white">Analytics Dashboard</h3>
        <Button 
          onClick={() => setShowAnalyticsDemo(!showAnalyticsDemo)}
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
                      <div className={`text-2xl font-bold ${item.color} mb-1`}>{item.value}</div>
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
                <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                <div className="text-xs text-gray-400">{metric.label}</div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recent Activity */}
      <Card className="bg-gray-900/50 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white text-lg">Recent AI Activity</CardTitle>
        </CardHeader>
        <CardContent className="p-6 pt-0">
          <div className="space-y-3">
            {recentActivity.map((activity, index) => (
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
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RetailDashboard;
