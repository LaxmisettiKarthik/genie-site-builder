import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Target, TrendingUp, Search, BarChart3, Sparkles } from "lucide-react";
import AnimatedNumber from "@/components/AnimatedNumber";
import FloatingParticles from "@/components/FloatingParticles";
import Navigation from "@/components/Navigation";

const CatalogOptimization = () => {
  const features = [
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Optimize product titles, descriptions, and metadata for better search rankings"
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description: "Track catalog performance and identify optimization opportunities"
    },
    {
      icon: Target,
      title: "Conversion Optimization",
      description: "A/B test product content to maximize conversion rates"
    },
    {
      icon: BarChart3,
      title: "Competitive Analysis",
      description: "Analyze competitor catalogs and identify market gaps"
    }
  ];

  const optimizations = [
    {
      title: "Search Engine Optimization",
      description: "Improve product discoverability",
      metrics: [
        { label: "Organic Traffic", increase: "+127%" },
        { label: "Search Rankings", increase: "+89%" },
        { label: "Click-through Rate", increase: "+45%" }
      ]
    },
    {
      title: "Conversion Rate Optimization",
      description: "Maximize sales from existing traffic",
      metrics: [
        { label: "Conversion Rate", increase: "+34%" },
        { label: "Average Order Value", increase: "+28%" },
        { label: "Revenue per Visitor", increase: "+67%" }
      ]
    },
    {
      title: "Catalog Performance",
      description: "Enhance overall catalog efficiency",
      metrics: [
        { label: "Product Views", increase: "+156%" },
        { label: "Time on Page", increase: "+43%" },
        { label: "Bounce Rate", decrease: "-38%" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0D1117] via-[#161B22] to-[#21262D] relative overflow-hidden font-lexend">
      <FloatingParticles />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <section className="px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-[#3BC553]/20 text-[#3BC553] border-[#3BC553]/30 mb-6">
              Performance Optimization
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight font-afacad">
              Catalog
              <span className="bg-gradient-to-r from-[#3BC553] to-green-400 bg-clip-text text-transparent"> Optimization </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Maximize your catalog's performance with AI-driven optimization. Improve search rankings, increase conversions, and drive more revenue from your existing products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-[#3BC553] hover:bg-green-600 text-white px-8 py-4 text-lg">
                Optimize My Catalog
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-[#3BC553] text-[#3BC553] hover:bg-[#3BC553] hover:text-white px-8 py-4 text-lg"
              >
                View Case Studies
                <Sparkles className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="px-6 lg:px-8 py-20 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6 font-afacad">Proven Optimization Results</h2>
            <p className="text-xl text-gray-300">Real improvements across key performance metrics</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {optimizations.map((optimization, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-xl text-white font-afacad">{optimization.title}</CardTitle>
                  <p className="text-gray-400">{optimization.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {optimization.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex justify-between items-center">
                        <span className="text-gray-300 text-sm">{metric.label}</span>
                        <Badge 
                          className={`${
                            metric.increase ? 'bg-green-500/20 text-green-400 border-green-500/30' : 
                            'bg-red-500/20 text-red-400 border-red-500/30'
                          }`}
                        >
                          {metric.increase || metric.decrease}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6 font-afacad">Optimization Features</h2>
            <p className="text-xl text-gray-300">Comprehensive tools for catalog enhancement</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="bg-gray-900/50 border-gray-700 hover:border-[#3BC553]/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-[#3BC553] rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white font-afacad">{feature.title}</h3>
                    </div>
                    <p className="text-gray-400">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="px-6 lg:px-8 py-20 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6 font-afacad">Performance Impact</h2>
            <p className="text-xl text-gray-300">Average improvements across our client base</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <Card className="bg-gray-900/50 border-gray-700">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-[#3BC553] mb-2 font-afacad">
                  <AnimatedNumber value="127" />%
                </div>
                <div className="text-white font-semibold mb-1">Traffic Increase</div>
                <div className="text-gray-400 text-sm">Organic search traffic</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-900/50 border-gray-700">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-[#3BC553] mb-2 font-afacad">
                  <AnimatedNumber value="34" />%
                </div>
                <div className="text-white font-semibold mb-1">Higher Conversions</div>
                <div className="text-gray-400 text-sm">Conversion rate improvement</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-900/50 border-gray-700">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-[#3BC553] mb-2 font-afacad">
                  <AnimatedNumber value="89" />%
                </div>
                <div className="text-white font-semibold mb-1">Better Rankings</div>
                <div className="text-gray-400 text-sm">Search engine rankings</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-900/50 border-gray-700">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-[#3BC553] mb-2 font-afacad">
                  <AnimatedNumber value="67" />%
                </div>
                <div className="text-white font-semibold mb-1">Revenue Growth</div>
                <div className="text-gray-400 text-sm">Revenue per visitor</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6 font-afacad">Ready to Optimize Your Catalog?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Start maximizing your catalog's performance with AI-driven optimization.
          </p>
          <Button size="lg" className="bg-[#3BC553] hover:bg-green-600 text-white px-8 py-4 text-lg">
            Start Optimization
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CatalogOptimization;
