import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, MessageSquare, Target, Globe, Sparkles } from "lucide-react";
import AIContentGenerator from "@/components/AIContentGenerator";
import AnimatedNumber from "@/components/AnimatedNumber";
import { useState } from "react";
import FloatingParticles from "@/components/FloatingParticles";

const ContentGeneration = () => {
  const [showDemo, setShowDemo] = useState(false);

  const features = [
    {
      icon: MessageSquare,
      title: "Multi-Format Content",
      description: "Generate titles, descriptions, bullet points, and SEO meta tags automatically"
    },
    {
      icon: Globe,
      title: "Multi-Language Support",
      description: "Create content in over 50 languages to reach global markets"
    },
    {
      icon: Target,
      title: "Brand Voice Consistency",
      description: "Maintain your unique brand voice across all product descriptions"
    },
    {
      icon: Zap,
      title: "Instant Generation",
      description: "Create thousands of product descriptions in seconds, not days"
    }
  ];

  const contentTypes = [
    {
      title: "Product Titles",
      description: "SEO-optimized titles that drive traffic and conversions",
      example: "Premium Organic Cotton Crew Neck T-Shirt - Unisex Sustainable Fashion"
    },
    {
      title: "Descriptions",
      description: "Compelling product stories that highlight benefits and features",
      example: "Experience ultimate comfort with our premium organic cotton t-shirt. Crafted from 100% sustainable materials..."
    },
    {
      title: "Bullet Points",
      description: "Key features and benefits in scannable format",
      example: "• 100% Organic Cotton\n• Sustainable Production\n• Unisex Fit\n• Machine Washable"
    },
    {
      title: "SEO Meta Tags",
      description: "Optimized meta descriptions and keywords for better search visibility",
      example: "Meta: Sustainable organic cotton t-shirt | Eco-friendly unisex clothing | Premium comfort wear"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0D1117] via-[#161B22] to-[#21262D] relative overflow-hidden">
      <FloatingParticles />
      {/* Hero Section */}
      <section className="px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-[#3BC553]/20 text-[#3BC553] border-[#3BC553]/30 mb-6">
              AI Content Engine
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              AI Content
              <span className="bg-gradient-to-r from-[#3BC553] to-green-400 bg-clip-text text-transparent"> Generation </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Generate compelling, conversion-optimized product content at scale. Our AI creates unique descriptions, titles, and marketing copy that drives sales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-[#3BC553] hover:bg-green-600 text-white px-8 py-4 text-lg">
                Start Creating Content
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-[#3BC553] text-[#3BC553] hover:bg-[#3BC553] hover:text-white px-8 py-4 text-lg"
                onClick={() => setShowDemo(!showDemo)}
              >
                {showDemo ? "Hide Demo" : "See AI in Action"}
                <Sparkles className="ml-2 w-5 h-5" />
              </Button>
            </div>

            {/* Demo Section */}
            {showDemo && (
              <div className="mt-12">
                <div className="bg-black/20 rounded-2xl p-8 border border-[#3BC553]/30">
                  <h3 className="text-2xl font-bold text-white mb-6">Live Content Generation</h3>
                  <AIContentGenerator />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section className="px-6 lg:px-8 py-20 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">All Content Types Covered</h2>
            <p className="text-xl text-gray-300">From titles to descriptions, we generate everything you need</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {contentTypes.map((type, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-xl text-white">{type.title}</CardTitle>
                  <p className="text-gray-400">{type.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="bg-black/30 rounded-lg p-4 border border-gray-600">
                    <p className="text-gray-300 text-sm font-mono whitespace-pre-line">{type.example}</p>
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
            <h2 className="text-4xl font-bold text-white mb-6">Advanced AI Features</h2>
            <p className="text-xl text-gray-300">Technology that understands your brand and customers</p>
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

      {/* Benefits Section */}
      <section className="px-6 lg:px-8 py-20 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Content That Converts</h2>
            <p className="text-xl text-gray-300">Proven results from AI-generated content</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <Card className="bg-gray-900/50 border-gray-700">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-[#3BC553] mb-2">
                  <AnimatedNumber value="87" />%
                </div>
                <div className="text-white font-semibold mb-1">Faster Content Creation</div>
                <div className="text-gray-400 text-sm">Compared to manual writing</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-900/50 border-gray-700">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-[#3BC553] mb-2">
                  <AnimatedNumber value="35" />%
                </div>
                <div className="text-white font-semibold mb-1">Higher Conversion</div>
                <div className="text-gray-400 text-sm">Optimized descriptions</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-900/50 border-gray-700">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-[#3BC553] mb-2">
                  <AnimatedNumber value="50" />+
                </div>
                <div className="text-white font-semibold mb-1">Languages</div>
                <div className="text-gray-400 text-sm">Global reach</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-900/50 border-gray-700">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-[#3BC553] mb-2">
                  <AnimatedNumber value="10" />x
                </div>
                <div className="text-white font-semibold mb-1">Faster SEO</div>
                <div className="text-gray-400 text-sm">Meta optimization</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Transform Your Content Strategy</h2>
          <p className="text-xl text-gray-300 mb-8">
            Start generating high-converting product content in minutes, not hours.
          </p>
          <Button size="lg" className="bg-[#3BC553] hover:bg-green-600 text-white px-8 py-4 text-lg">
            Generate Content Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ContentGeneration;
