
import { Card, CardContent } from "@/components/ui/card";
import AnimatedNumber from "@/components/AnimatedNumber";

const PerformanceMetrics = () => {
  const benefits = [
    {
      metric: "95%",
      label: "Time Reduction",
      description: "Save weeks of manual work"
    },
    {
      metric: "99.5%",
      label: "Accuracy Rate",
      description: "Superior to human tagging"
    },
    {
      metric: "10x",
      label: "Faster Processing",
      description: "Complete catalogs in minutes"
    },
    {
      metric: "50+",
      label: "Attributes",
      description: "Comprehensive product data"
    }
  ];

  return (
    <section className="px-6 lg:px-8 relative z-10 py-0">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6 font-afacad">Real-Time Performance</h2>
          <p className="text-xl text-gray-300">Watch our AI metrics update live</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-gray-900/50 border-gray-700 hover:border-[#3BC553]/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-[#3BC553] mb-2 font-afacad">
                  <AnimatedNumber value={benefit.metric.replace(/[^\d.]/g, '')} />
                  {benefit.metric.replace(/[\d.]/g, '')}
                </div>
                <div className="text-white font-semibold mb-1">{benefit.label}</div>
                <div className="text-gray-400 text-sm">{benefit.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PerformanceMetrics;
