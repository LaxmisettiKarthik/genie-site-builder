
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Package, Zap, Target } from "lucide-react";

const RetailDashboard = () => {
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

  return (
    <div className="space-y-6">
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
