
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Zap, Target, Package, Sparkles } from "lucide-react";

const AIFeatures = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Visual Recognition",
      description: "Advanced computer vision identifies product attributes from images automatically",
      interactive: true
    },
    {
      icon: Zap,
      title: "Instant Processing",
      description: "Tag thousands of products in seconds, not hours or days",
      interactive: true
    },
    {
      icon: Target,
      title: "Precise Categorization",
      description: "99.5% accuracy in product categorization and attribute detection",
      interactive: true
    },
    {
      icon: Package,
      title: "Bulk Operations",
      description: "Process entire catalogs with a single click, maintaining consistency",
      interactive: true
    }
  ];

  return (
    <section className="px-6 lg:px-8 py-20 bg-black/30 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6 font-afacad">AI-Powered Features</h2>
          <p className="text-xl text-gray-300">Hover over cards to see interactive elements</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className={`bg-gray-900/50 border-gray-700 hover:border-[#3BC553]/50 transition-all duration-500 group cursor-pointer ${feature.interactive ? 'hover:scale-105 hover:bg-[#3BC553]/5' : ''}`}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 bg-[#3BC553] rounded-lg flex items-center justify-center transition-all duration-300 ${feature.interactive ? 'group-hover:scale-110 group-hover:rotate-12' : ''}`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white font-afacad">{feature.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-400">{feature.description}</p>
                  {feature.interactive && (
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex items-center text-[#3BC553] text-sm">
                        <Sparkles className="w-4 h-4 mr-2" />
                        Click to experience this feature above!
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AIFeatures;
