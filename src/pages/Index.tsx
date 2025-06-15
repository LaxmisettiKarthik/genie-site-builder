import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Zap, Shield, Users, Star, CheckCircle, Clock, TrendingUp, Target, Package, Brain, Eye, MessageSquare, BarChart3, Lightbulb, Workflow, Twitter, Linkedin, Github, Instagram } from "lucide-react";
import ProductTaggingDemo from "@/components/ProductTaggingDemo";
import AIContentGenerator from "@/components/AIContentGenerator";
import RetailDashboard from "@/components/RetailDashboard";
import Navigation from "@/components/Navigation";
import { useState, useEffect } from "react";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import BusinessResults from "@/components/BusinessResults";
import AnimatedNumber from "@/components/AnimatedNumber";
import LogoCloud from "@/components/LogoCloud";
import FloatingParticles from "@/components/FloatingParticles";
const Index = () => {
  const [showAIDemo, setShowAIDemo] = useState(false);
  const [heroStatsKey, setHeroStatsKey] = useState(0);

  // Hero stats that update when demo is toggled
  const [heroStats, setHeroStats] = useState([{
    value: "95",
    label: "Time Saved",
    suffix: "%"
  }, {
    value: "10",
    label: "Faster Processing",
    suffix: "x"
  }, {
    value: "99.9",
    label: "Accuracy Rate",
    suffix: "%"
  }, {
    value: "24/7",
    label: "Automated Processing",
    suffix: ""
  }]);

  // Update hero stats when demo is shown
  useEffect(() => {
    if (showAIDemo) {
      const timer = setTimeout(() => {
        setHeroStats(prev => prev.map(stat => {
          if (stat.suffix === "%") {
            const current = parseFloat(stat.value);
            const newValue = Math.min(99.9, current + Math.random() * 2);
            return {
              ...stat,
              value: newValue.toFixed(1)
            };
          } else if (stat.suffix === "x") {
            const current = parseInt(stat.value);
            const newValue = current + Math.floor(Math.random() * 2) + 1;
            return {
              ...stat,
              value: newValue.toString()
            };
          }
          return stat;
        }));
        setHeroStatsKey(prev => prev + 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [showAIDemo]);
  return <div className="min-h-screen bg-gradient-to-br from-[#0D1117] via-[#161B22] to-[#21262D] relative overflow-hidden">
      <FloatingParticles />
      {/* Navigation */}
      <Navigation />

      {/* Hero Section - consistent py-24 spacing */}
      <section className="lg:px-8 py-0 px-[24px]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight hover:scale-105 transition-transform duration-300">
              Automate Product Catalog
              <span className="bg-gradient-to-r from-[#3BC553] to-green-400 bg-clip-text text-transparent"> Management </span>
              with AI Intelligence
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
              Transform manual catalog work into automated intelligence. Our AI automatically tags products, generates compelling descriptions, and optimizes your entire catalog in seconds - not hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in" style={{
            animationDelay: '0.4s'
          }}>
              <Button size="lg" className="bg-[#3BC553] hover:bg-green-600 text-white px-8 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#3BC553]/25">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" className="bg-gradient-to-r from-[#3BC553] to-green-400 hover:from-green-600 hover:to-green-500 text-white px-8 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#3BC553]/25" onClick={() => setShowAIDemo(!showAIDemo)}>
                {showAIDemo ? "Hide Demo" : "Feel it"}
                <Sparkles className="ml-2 w-5 h-5 animate-pulse" />
              </Button>
            </div>

            {/* Logo Cloud */}
            <div className="mt-16 animate-fade-in" style={{
            animationDelay: '0.6s'
          }}>
              <LogoCloud />
            </div>

            {/* AI Demo Section - Shown when button is clicked */}
            {showAIDemo && <div className="mt-12 mb-12 animate-scale-in">
                <div className="bg-black/20 rounded-2xl p-8 border border-[#3BC553]/30 hover:border-[#3BC553]/50 transition-all duration-300 hover:scale-[1.02]">
                  <h3 className="text-2xl font-bold text-white mb-4">AI Content Generation Demo</h3>
                  <p className="text-gray-300 mb-6">
                    Experience how our AI automatically generates compelling product content for your retail business.
                  </p>
                  <AIContentGenerator />
                  
                  {/* Updated Stats Section with Interactive Numbers */}
                  <div className="mt-8">
                    <h4 className="text-xl font-bold text-white mb-6 text-center">Catalog Performance Metrics</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                      {heroStats.map((stat, index) => <div key={index} className="bg-gray-900/30 rounded-lg p-6 border border-gray-700 hover:border-[#3BC553]/50 transition-all duration-300 hover:scale-105 hover:bg-gray-800/30">
                          <div className="text-3xl font-bold text-[#3BC553] mb-2 font-afacad">
                            <AnimatedNumber value={stat.value} key={`hero-${index}-${heroStatsKey}`} duration={1500} />
                            {stat.suffix}
                          </div>
                          <div className="text-gray-400 text-sm">{stat.label}</div>
                        </div>)}
                    </div>
                  </div>
                </div>
              </div>}
          </div>
        </div>
      </section>

      {/* Problem Section - moved up under LogoCloud - consistent py-24 spacing */}
      <section className="lg:px-8 px-[24px] py-[24px]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-white mb-6 hover:text-[#3BC553] transition-colors duration-300">The Manual Catalog Challenge</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              E-commerce teams waste countless hours on repetitive catalog tasks that could be automated
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-[#231F20]/80 border-[#3BC553]/30 hover:border-[#3BC553]/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#3BC553]/10 animate-fade-in group" style={{
            animationDelay: '0.1s'
          }}>
              <CardContent className="p-6 text-center">
                <Clock className="w-12 h-12 text-[#3BC553] mx-auto mb-4 group-hover:animate-pulse" />
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#3BC553] transition-colors">Time Consuming</h3>
                <p className="text-gray-300 mb-4">Teams spend 40+ hours weekly on manual product tagging and description writing</p>
                <div className="text-2xl font-bold text-[#3BC553] font-afacad group-hover:scale-110 transition-transform">
                  <AnimatedNumber value="40" />+ hrs/week
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#231F20]/80 border-[#3BC553]/30 hover:border-[#3BC553]/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#3BC553]/10 animate-fade-in group" style={{
            animationDelay: '0.2s'
          }}>
              <CardContent className="p-6 text-center">
                <Eye className="w-12 h-12 text-[#3BC553] mx-auto mb-4 group-hover:animate-pulse" />
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#3BC553] transition-colors">Human Error</h3>
                <p className="text-gray-300 mb-4">Manual processes lead to inconsistent tagging and missed product attributes</p>
                <div className="text-2xl font-bold text-[#3BC553] font-afacad group-hover:scale-110 transition-transform">
                  <AnimatedNumber value="30" />% Error Rate
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#231F20]/80 border-[#3BC553]/30 hover:border-[#3BC553]/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#3BC553]/10 animate-fade-in group" style={{
            animationDelay: '0.3s'
          }}>
              <CardContent className="p-6 text-center">
                <TrendingUp className="w-12 h-12 text-[#3BC553] mx-auto mb-4 group-hover:animate-pulse" />
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#3BC553] transition-colors">Scaling Issues</h3>
                <p className="text-gray-300 mb-4">Growing product catalogs overwhelm manual processes and team capacity</p>
                <div className="text-2xl font-bold text-[#3BC553] font-afacad group-hover:scale-110 transition-transform">Can't Scale</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Infographic - consistent py-24 spacing */}
      <section className="px-6 lg:px-8 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-white mb-6 hover:text-[#3BC553] transition-colors duration-300">AI-Powered Solution</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our intelligent automation transforms your catalog workflow
            </p>
          </div>

          {/* YouTube Video Demo with updated link */}
          <div className="mb-16 animate-fade-in" style={{
          animationDelay: '0.2s'
        }}>
            <div className="max-w-4xl mx-auto">
              <div className="bg-black/20 rounded-2xl p-8 border border-[#3BC553]/30 hover:border-[#3BC553]/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#3BC553]/10">
                <h3 className="text-2xl font-bold text-white mb-4 text-center">Watch Our AI in Action</h3>
                <p className="text-gray-300 mb-6 text-center">
                  See how Catalog Genie transforms your product management workflow
                </p>
                <div className="relative aspect-video rounded-lg overflow-hidden hover:scale-[1.02] transition-transform duration-300">
                  <iframe src="https://www.youtube.com/embed/yYDFBXxQhg0?autoplay=1&mute=1" title="Catalog Genie Demo" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="absolute inset-0 w-full h-full"></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* Process Flow */}
          <div className="relative animate-fade-in" style={{
          animationDelay: '0.4s'
        }}>
            <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
              
              {/* Step 1 */}
              <div className="flex-1 text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-[#3BC553] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse group-hover:shadow-lg group-hover:shadow-[#3BC553]/25">
                  <Package className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#3BC553] transition-colors">Upload Products</h3>
                <p className="text-gray-400 text-sm">Simply upload your product images and basic information</p>
              </div>

              {/* Arrow */}
              <ArrowRight className="w-6 h-6 text-[#3BC553] hidden md:block animate-pulse" />

              {/* Step 2 */}
              <div className="flex-1 text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-[#3BC553] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse group-hover:shadow-lg group-hover:shadow-[#3BC553]/25">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#3BC553] transition-colors">AI Analysis</h3>
                <p className="text-gray-400 text-sm">Our AI instantly analyzes and identifies product features</p>
              </div>

              {/* Arrow */}
              <ArrowRight className="w-6 h-6 text-[#3BC553] hidden md:block animate-pulse" />

              {/* Step 3 */}
              <div className="flex-1 text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-[#3BC553] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse group-hover:shadow-lg group-hover:shadow-[#3BC553]/25">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#3BC553] transition-colors">Auto Generation</h3>
                <p className="text-gray-400 text-sm">Tags, descriptions, and metadata generated automatically</p>
              </div>

              {/* Arrow */}
              <ArrowRight className="w-6 h-6 text-[#3BC553] hidden md:block animate-pulse" />

              {/* Step 4 */}
              <div className="flex-1 text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-[#3BC553] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse group-hover:shadow-lg group-hover:shadow-[#3BC553]/25">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#3BC553] transition-colors">Optimized Results</h3>
                <p className="text-gray-400 text-sm">Ready-to-publish, conversion-optimized product listings</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Demo Section - Updated to show only dashboard - consistent py-24 spacing */}
      <section id="demo" className="px-6 lg:px-8 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-white mb-4 hover:text-[#3BC553] transition-colors duration-300">Real-Time Analytics Dashboard</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Track your AI-powered catalog optimization with detailed metrics and insights.
            </p>
          </div>
          
          <div className="animate-fade-in" style={{
          animationDelay: '0.2s'
        }}>
            <RetailDashboard />
          </div>
        </div>
      </section>

      {/* Transform Business Results Section - consistent py-24 spacing */}
      <section className="px-6 lg:px-8 py-24">
        <div className="animate-fade-in">
          <BusinessResults />
        </div>
      </section>

      {/* Features Section - consistent py-24 spacing */}
      <section id="features" className="px-6 lg:px-8 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-white mb-4 hover:text-[#3BC553] transition-colors duration-300">Powerful Features for Modern Retailers</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Everything you need to create, manage, and optimize your product catalogs with AI assistance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-900/50 border-gray-700 hover:border-[#3BC553]/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#3BC553]/10 animate-fade-in group" style={{
            animationDelay: '0.1s'
          }}>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#3BC553] rounded-lg flex items-center justify-center mb-4 group-hover:animate-pulse group-hover:shadow-lg group-hover:shadow-[#3BC553]/25">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#3BC553] transition-colors">AI Content Generation</h3>
                <p className="text-gray-400">
                  Generate compelling product descriptions, titles, and metadata in seconds with advanced AI technology.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-700 hover:border-[#3BC553]/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#3BC553]/10 animate-fade-in group" style={{
            animationDelay: '0.2s'
          }}>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#3BC553] rounded-lg flex items-center justify-center mb-4 group-hover:animate-pulse group-hover:shadow-lg group-hover:shadow-[#3BC553]/25">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#3BC553] transition-colors">Smart Organization</h3>
                <p className="text-gray-400">
                  Automatically categorize and tag your products with intelligent organization systems.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-700 hover:border-[#3BC553]/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#3BC553]/10 animate-fade-in group" style={{
            animationDelay: '0.3s'
          }}>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#3BC553] rounded-lg flex items-center justify-center mb-4 group-hover:animate-pulse group-hover:shadow-lg group-hover:shadow-[#3BC553]/25">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#3BC553] transition-colors">Team Collaboration</h3>
                <p className="text-gray-400">
                  Work together seamlessly with your team using real-time collaboration and approval workflows.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof - consistent py-24 spacing */}
      <section className="px-6 lg:px-8 py-24">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-12 animate-fade-in hover:text-[#3BC553] transition-colors duration-300">Trusted by 10,000+ Businesses Worldwide</h2>
          
          <div className="mb-16 animate-fade-in" style={{
          animationDelay: '0.2s'
        }}>
            <TestimonialCarousel />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="hover:scale-105 transition-transform duration-300 animate-fade-in" style={{
            animationDelay: '0.1s'
          }}>
              <div className="text-3xl font-bold text-white font-afacad hover:text-[#3BC553] transition-colors">
                <AnimatedNumber value="10,000" />+
              </div>
              <div className="text-gray-400">Active Users</div>
            </div>
            <div className="hover:scale-105 transition-transform duration-300 animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
              <div className="text-3xl font-bold text-white font-afacad hover:text-[#3BC553] transition-colors">
                <AnimatedNumber value="2" />M+
              </div>
              <div className="text-gray-400">Products Processed</div>
            </div>
            <div className="hover:scale-105 transition-transform duration-300 animate-fade-in" style={{
            animationDelay: '0.3s'
          }}>
              <div className="text-3xl font-bold text-white font-afacad hover:text-[#3BC553] transition-colors">
                <AnimatedNumber value="99.9" />%
              </div>
              <div className="text-gray-400">Uptime</div>
            </div>
            <div className="hover:scale-105 transition-transform duration-300 animate-fade-in" style={{
            animationDelay: '0.4s'
          }}>
              <div className="text-3xl font-bold text-white font-afacad hover:text-[#3BC553] transition-colors">24/7</div>
              <div className="text-gray-400">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - consistent py-24 spacing */}
      <section id="pricing" className="px-6 lg:px-8 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-white mb-4 hover:text-[#3BC553] transition-colors duration-300">Simple, Transparent Pricing</h2>
            <p className="text-gray-300 text-lg">Choose the plan that fits your business needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-900/50 border-gray-700 hover:border-[#3BC553]/50 transition-all duration-300 hover:scale-105 hover:shadow-lg animate-fade-in" style={{
            animationDelay: '0.1s'
          }}>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
                <div className="text-4xl font-bold text-white mb-6 font-afacad hover:text-[#3BC553] transition-colors">
                  $<AnimatedNumber value="29" /><span className="text-lg text-gray-400">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300 hover:text-white transition-colors">
                    <CheckCircle className="w-5 h-5 text-[#3BC553] mr-3" />
                    Up to <AnimatedNumber value="1,000" className="text-[#3BC553]" /> products
                  </li>
                  <li className="flex items-center text-gray-300 hover:text-white transition-colors">
                    <CheckCircle className="w-5 h-5 text-[#3BC553] mr-3" />
                    AI content generation
                  </li>
                  <li className="flex items-center text-gray-300 hover:text-white transition-colors">
                    <CheckCircle className="w-5 h-5 text-[#3BC553] mr-3" />
                    Basic templates
                  </li>
                </ul>
                <Button className="w-full bg-gray-700 hover:bg-gray-600 hover:scale-105 transition-all duration-300">Get Started</Button>
              </CardContent>
            </Card>

            <Card className="bg-[#3BC553] border-[#3BC553] scale-105 hover:scale-110 transition-all duration-300 hover:shadow-xl hover:shadow-[#3BC553]/25 animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
              <CardContent className="p-8">
                <div className="text-center mb-4">
                  <Badge className="bg-white/20 text-white animate-pulse">Most Popular</Badge>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Professional</h3>
                <div className="text-4xl font-bold text-white mb-6 font-afacad hover:scale-110 transition-transform">
                  $<AnimatedNumber value="79" /><span className="text-lg text-white/70">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-white hover:scale-105 transition-transform">
                    <CheckCircle className="w-5 h-5 text-white mr-3" />
                    Up to <AnimatedNumber value="10,000" className="text-white" /> products
                  </li>
                  <li className="flex items-center text-white hover:scale-105 transition-transform">
                    <CheckCircle className="w-5 h-5 text-white mr-3" />
                    Advanced AI features
                  </li>
                  <li className="flex items-center text-white hover:scale-105 transition-transform">
                    <CheckCircle className="w-5 h-5 text-white mr-3" />
                    Team collaboration
                  </li>
                  <li className="flex items-center text-white hover:scale-105 transition-transform">
                    <CheckCircle className="w-5 h-5 text-white mr-3" />
                    Priority support
                  </li>
                </ul>
                <Button className="w-full bg-white text-[#3BC553] hover:bg-gray-100 hover:scale-105 transition-all duration-300">Get Started</Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-700 hover:border-[#3BC553]/50 transition-all duration-300 hover:scale-105 hover:shadow-lg animate-fade-in" style={{
            animationDelay: '0.3s'
          }}>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
                <div className="text-4xl font-bold text-white mb-6 font-afacad hover:text-[#3BC553] transition-colors">
                  Custom<span className="text-lg text-gray-400"></span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300 hover:text-white transition-colors">
                    <CheckCircle className="w-5 h-5 text-[#3BC553] mr-3" />
                    Unlimited products
                  </li>
                  <li className="flex items-center text-gray-300 hover:text-white transition-colors">
                    <CheckCircle className="w-5 h-5 text-[#3BC553] mr-3" />
                    Custom integrations
                  </li>
                  <li className="flex items-center text-gray-300 hover:text-white transition-colors">
                    <CheckCircle className="w-5 h-5 text-[#3BC553] mr-3" />
                    Dedicated support
                  </li>
                </ul>
                <Button className="w-full bg-gray-700 hover:bg-gray-600 hover:scale-105 transition-all duration-300">Contact Sales</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section - consistent py-24 spacing */}
      <section className="px-6 lg:px-8 py-24">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl font-bold text-white mb-6 hover:text-[#3BC553] transition-colors duration-300">Ready to Transform Your Catalog?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses already using Catalog Genie to streamline their product management.
          </p>
          <Button size="lg" className="bg-[#3BC553] hover:bg-green-600 text-white px-8 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#3BC553]/25 group">
            Start Your Free Trial
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </section>

      {/* Comprehensive Footer */}
      <footer className="px-6 lg:px-8 py-16 border-t border-gray-800 bg-[#0D1117]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
            {/* Logo and Description */}
            <div className="md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-[#3BC553] rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white font-afacad">Catalog Genie</span>
              </div>
              <p className="text-sm text-gray-400 mb-6 max-w-xs">
                AI-powered catalog management platform that helps eCommerce businesses organize products through intelligent tagging, descriptions, and discovery features.
              </p>
              <div className="flex space-x-3">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#3BC553] transition-colors">
                  <Twitter className="w-5 h-5 text-gray-400 hover:text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#3BC553] transition-colors">
                  <Linkedin className="w-5 h-5 text-gray-400 hover:text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#3BC553] transition-colors">
                  <Github className="w-5 h-5 text-gray-400 hover:text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#3BC553] transition-colors">
                  <Instagram className="w-5 h-5 text-gray-400 hover:text-white" />
                </a>
              </div>
            </div>

            {/* Product */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-3">
                <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="/solutions" className="text-gray-400 hover:text-white transition-colors">Integrations</a></li>
                <li><a href="/api" className="text-gray-400 hover:text-white transition-colors">API</a></li>
                <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-3">
                <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-3">
                <li><a href="/docs" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
                <li><a href="/help" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="/community" className="text-gray-400 hover:text-white transition-colors">Community</a></li>
                <li><a href="/status" className="text-gray-400 hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-3">
                <li><a href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy</a></li>
                <li><a href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms</a></li>
                <li><a href="/security" className="text-gray-400 hover:text-white transition-colors">Security</a></li>
                <li><a href="/cookies" className="text-gray-400 hover:text-white transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="pt-8 border-t border-gray-800">
            <div className="text-center text-gray-400 text-sm">
              © 2025 Catalog Genie. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;