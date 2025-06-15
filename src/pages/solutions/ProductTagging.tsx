
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Package, Zap, Clock, Target, CheckCircle, Eye, Brain, Sparkles, MousePointer } from "lucide-react";
import InteractiveProductCard from "@/components/InteractiveProductCard";
import FloatingParticles from "@/components/FloatingParticles";
import TaggingMetrics from "@/components/TaggingMetrics";
import AnimatedNumber from "@/components/AnimatedNumber";
import Navigation from "@/components/Navigation";
import { useState, useRef } from "react";

const ProductTagging = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [isDemoVisible, setIsDemoVisible] = useState(false);
  const demoSectionRef = useRef<HTMLElement>(null);
  const handleDemoClick = () => {
    setIsDemoVisible(true);
    setTimeout(() => {
      demoSectionRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }, 100);
  };
  const sampleProducts = [{
    image: "url('/lovable-uploads/ad5fb726-5b49-495a-96b1-53241a4c3719.png')",
    title: "Summer Dress",
    tags: [{
      label: "Summer",
      color: "bg-blue-500",
      delay: 500
    }, {
      label: "Casual",
      color: "bg-purple-500",
      delay: 700
    }, {
      label: "Size M",
      color: "bg-orange-500",
      delay: 900
    }, {
      label: "Sleeveless",
      color: "bg-teal-500",
      delay: 1100
    }, {
      label: "V-Neck",
      color: "bg-rose-500",
      delay: 1300
    }, {
      label: "Knee-Length",
      color: "bg-indigo-500",
      delay: 1500
    }, {
      label: "Collarless",
      color: "bg-yellow-500",
      delay: 1700
    }]
  }, {
    image: "url('/lovable-uploads/de09dc01-b8d3-4d2b-9bb1-58776a23d59b.png')",
    title: "Sport Shoes",
    tags: [{
      label: "Athletic",
      color: "bg-red-500",
      delay: 600
    }, {
      label: "Running",
      color: "bg-blue-500",
      delay: 900
    }, {
      label: "Size 42",
      color: "bg-yellow-500",
      delay: 1200
    }, {
      label: "Breathable",
      color: "bg-cyan-500",
      delay: 1500
    }, {
      label: "Mesh Upper",
      color: "bg-lime-500",
      delay: 1800
    }, {
      label: "Lace-up",
      color: "bg-purple-500",
      delay: 2100
    }]
  }, {
    image: "url('/lovable-uploads/3ef5bc4b-c86f-45e8-ab71-bcb667457334.png')",
    title: "Leather Jacket",
    tags: [{
      label: "Leather",
      color: "bg-amber-600",
      delay: 700
    }, {
      label: "Winter",
      color: "bg-slate-600",
      delay: 1000
    }, {
      label: "Premium",
      color: "bg-emerald-500",
      delay: 1300
    }, {
      label: "Black",
      color: "bg-gray-800",
      delay: 1600
    }, {
      label: "Unisex",
      color: "bg-indigo-500",
      delay: 1900
    }]
  }, {
    image: "url('/lovable-uploads/d70d254c-8ae8-4e87-818e-0459cfb8cdb1.png')",
    title: "Cosmetics Set",
    tags: [{
      label: "Cosmetics",
      color: "bg-pink-400",
      delay: 500
    }, {
      label: "Matte Finish",
      color: "bg-red-400",
      delay: 800
    }, {
      label: "Long-lasting",
      color: "bg-purple-400",
      delay: 1100
    }, {
      label: "Cruelty-free",
      color: "bg-green-400",
      delay: 1400
    }, {
      label: "Set of 3",
      color: "bg-yellow-400",
      delay: 1700
    }]
  }];
  const features = [{
    icon: Brain,
    title: "AI Visual Recognition",
    description: "Advanced computer vision identifies product attributes from images automatically",
    interactive: true
  }, {
    icon: Zap,
    title: "Instant Processing",
    description: "Tag thousands of products in seconds, not hours or days",
    interactive: true
  }, {
    icon: Target,
    title: "Precise Categorization",
    description: "99.5% accuracy in product categorization and attribute detection",
    interactive: true
  }, {
    icon: Package,
    title: "Bulk Operations",
    description: "Process entire catalogs with a single click, maintaining consistency",
    interactive: true
  }];
  const benefits = [{
    metric: "95%",
    label: "Time Reduction",
    description: "Save weeks of manual work"
  }, {
    metric: "99.5%",
    label: "Accuracy Rate",
    description: "Superior to human tagging"
  }, {
    metric: "10x",
    label: "Faster Processing",
    description: "Complete catalogs in minutes"
  }, {
    metric: "50+",
    label: "Attributes",
    description: "Comprehensive product data"
  }];
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0D1117] via-[#161B22] to-[#21262D] relative overflow-hidden font-lexend">
      <FloatingParticles />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section with Interactive Elements */}
      <section className="px-6 lg:px-8 py-20 lg:py-32 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-[#3BC553]/20 text-[#3BC553] border-[#3BC553]/30 mb-6 animate-pulse">
              🤖 AI-Powered Solution
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight font-afacad">
              Automated Product
              <span className="bg-gradient-to-r from-[#3BC553] via-green-400 to-emerald-300 bg-clip-text text-transparent animate-pulse"> Tagging </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Watch AI transform your product catalog in real-time. Click, analyze, and see the magic happen instantly.
            </p>
            
            {selectedTag && <div className="mb-6 p-4 bg-[#3BC553]/20 rounded-lg border border-[#3BC553]/30 animate-fade-in">
                <p className="text-[#3BC553] font-semibold">
                  🎯 You clicked on: "{selectedTag}" - AI detected this with 99.2% confidence!
                </p>
              </div>}

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-[#3BC553] hover:bg-green-600 text-white px-8 py-4 text-lg transform hover:scale-105 transition-all">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" onClick={handleDemoClick} className="border-[#3BC553] text-[#3BC553] hover:bg-[#3BC553] hover:text-white px-8 py-4 text-lg transform hover:scale-105 transition-all">
                <MousePointer className="mr-2 w-5 h-5" />
                Feel It
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      {isDemoVisible && <section ref={demoSectionRef} className="px-6 lg:px-8 py-20 bg-black/20 relative z-10 animate-fade-in">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6 font-afacad">Interactive AI Demo</h2>
              <p className="text-xl text-gray-300 mb-8">Click "Start AI Analysis" on any product to see real-time tagging</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {sampleProducts.map((product, index) => <InteractiveProductCard key={index} {...product} onTagClick={setSelectedTag} />)}
            </div>

            <div className="max-w-2xl mx-auto">
              <TaggingMetrics />
            </div>
          </div>
        </section>}

      {/* Animated Benefits Section */}
      <section className="px-6 lg:px-8 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6 font-afacad">Real-Time Performance</h2>
            <p className="text-xl text-gray-300">Watch our AI metrics update live</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {benefits.map((benefit, index) => <Card key={index} className="bg-gray-900/50 border-gray-700 hover:border-[#3BC553]/50 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-[#3BC553] mb-2 font-afacad">
                    <AnimatedNumber value={benefit.metric.replace(/[^\d.]/g, '')} />
                    {benefit.metric.replace(/[\d.]/g, '')}
                  </div>
                  <div className="text-white font-semibold mb-1">{benefit.label}</div>
                  <div className="text-gray-400 text-sm">{benefit.description}</div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Interactive Features Section */}
      <section className="px-6 lg:px-8 py-20 bg-black/30 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6 font-afacad">AI-Powered Features</h2>
            <p className="text-xl text-gray-300">Hover over cards to see interactive elements</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
            const Icon = feature.icon;
            return <Card key={index} className={`bg-gray-900/50 border-gray-700 hover:border-[#3BC553]/50 transition-all duration-500 group cursor-pointer ${feature.interactive ? 'hover:scale-105 hover:bg-[#3BC553]/5' : ''}`}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 bg-[#3BC553] rounded-lg flex items-center justify-center transition-all duration-300 ${feature.interactive ? 'group-hover:scale-110 group-hover:rotate-12' : ''}`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white font-afacad">{feature.title}</h3>
                        {feature.interactive}
                      </div>
                    </div>
                    <p className="text-gray-400">{feature.description}</p>
                    {feature.interactive && <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex items-center text-[#3BC553] text-sm">
                          <Sparkles className="w-4 h-4 mr-2" />
                          Click to experience this feature above!
                        </div>
                      </div>}
                  </CardContent>
                </Card>;
          })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 lg:px-8 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-[#3BC553]/20 to-green-400/20 rounded-3xl p-12 border border-[#3BC553]/30">
            <h2 className="text-4xl font-bold text-white mb-6 font-afacad">Ready to Automate Your Tagging?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of retailers experiencing the future of catalog management.
            </p>
            <Button size="lg" className="bg-[#3BC553] hover:bg-green-600 text-white px-12 py-6 text-xl transform hover:scale-105 transition-all">
              Start Your AI Journey
              <Sparkles className="ml-2 w-6 h-6" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductTagging;
