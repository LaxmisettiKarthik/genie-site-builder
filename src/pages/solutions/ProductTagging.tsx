
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Package, Zap, Clock, Target, CheckCircle, Eye, Brain, Sparkles } from "lucide-react";
import ProductTaggingDemo from "@/components/ProductTaggingDemo";
import AnimatedNumber from "@/components/AnimatedNumber";
import { useState } from "react";

const ProductTagging = () => {
  const [showDemo, setShowDemo] = useState(false);

  const features = [
    {
      icon: Brain,
      title: "AI Visual Recognition",
      description: "Advanced computer vision identifies product attributes from images automatically"
    },
    {
      icon: Zap,
      title: "Instant Processing",
      description: "Tag thousands of products in seconds, not hours or days"
    },
    {
      icon: Target,
      title: "Precise Categorization",
      description: "99.5% accuracy in product categorization and attribute detection"
    },
    {
      icon: Package,
      title: "Bulk Operations",
      description: "Process entire catalogs with a single click, maintaining consistency"
    }
  ];

  const benefits = [
    { metric: "95%", label: "Time Reduction", description: "Save weeks of manual work" },
    { metric: "99.5%", label: "Accuracy Rate", description: "Superior to human tagging" },
    { metric: "10x", label: "Faster Processing", description: "Complete catalogs in minutes" },
    { metric: "50+", label: "Attributes", description: "Comprehensive product data" }
  ];

  const useCases = [
    {
      title: "Fashion & Apparel",
      description: "Automatically detect colors, patterns, materials, styles, and seasonal categories",
      tags: ["Color", "Pattern", "Material", "Style", "Season", "Size"]
    },
    {
      title: "Electronics",
      description: "Identify brands, specifications, categories, and compatibility information",
      tags: ["Brand", "Model", "Category", "Specs", "Compatibility"]
    },
    {
      title: "Home & Garden",
      description: "Categorize by room, style, material, and functional attributes",
      tags: ["Room", "Style", "Material", "Function", "Color"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#231F20] via-gray-900 to-[#231F20]">
      {/* Hero Section */}
      <section className="px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-[#3BC553]/20 text-[#3BC553] border-[#3BC553]/30 mb-6">
              AI-Powered Solution
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Automated Product
              <span className="bg-gradient-to-r from-[#3BC553] to-green-400 bg-clip-text text-transparent"> Tagging </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your product catalog management with AI that automatically identifies, categorizes, and tags products with human-level accuracy in seconds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-[#3BC553] hover:bg-green-600 text-white px-8 py-4 text-lg">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-[#3BC553] text-[#3BC553] hover:bg-[#3BC553] hover:text-white px-8 py-4 text-lg"
                onClick={() => setShowDemo(!showDemo)}
              >
                {showDemo ? "Hide Demo" : "See Live Demo"}
                <Sparkles className="ml-2 w-5 h-5" />
              </Button>
            </div>

            {/* Demo Section */}
            {showDemo && (
              <div className="mt-12">
                <div className="bg-black/20 rounded-2xl p-8 border border-[#3BC553]/30">
                  <h3 className="text-2xl font-bold text-white mb-6">Live Tagging Demo</h3>
                  <ProductTaggingDemo />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-6 lg:px-8 py-20 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Measurable Impact</h2>
            <p className="text-xl text-gray-300">See the difference automated tagging makes for your business</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-700">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-[#3BC553] mb-2">
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

      {/* Features Section */}
      <section className="px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Powerful AI Features</h2>
            <p className="text-xl text-gray-300">Advanced technology that understands your products</p>
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
                      <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                    </div>
                    <p className="text-gray-400">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="px-6 lg:px-8 py-20 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Industry Solutions</h2>
            <p className="text-xl text-gray-300">Tailored for every product category</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-xl text-white">{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 mb-4">{useCase.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {useCase.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} className="bg-[#3BC553]/20 text-[#3BC553] border-[#3BC553]/30">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Automate Your Tagging?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of retailers who have transformed their catalog management with AI.
          </p>
          <Button size="lg" className="bg-[#3BC553] hover:bg-green-600 text-white px-8 py-4 text-lg">
            Start Free Trial Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ProductTagging;
