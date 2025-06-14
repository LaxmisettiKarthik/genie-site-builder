
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Zap, Shield, Users, Star, CheckCircle, Clock, TrendingUp, Target, Package, Brain, Eye, MessageSquare, BarChart3, Lightbulb, Workflow } from "lucide-react";
import ProductTaggingDemo from "@/components/ProductTaggingDemo";
import AIContentGenerator from "@/components/AIContentGenerator";
import RetailDashboard from "@/components/RetailDashboard";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#231F20] via-gray-900 to-[#231F20]">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 lg:px-8">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-[#3BC553] rounded-lg flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-white">Catalog Genie</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
          <a href="#demo" className="text-gray-300 hover:text-white transition-colors">Demo</a>
          <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
          <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
          <Button variant="outline" className="border-[#3BC553] text-[#3BC553] hover:bg-[#3BC553] hover:text-white">
            Sign In
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-[#3BC553]/20 text-[#3BC553] border-[#3BC553]/30">
              ✨ AI-Powered Catalog Management
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Automate Product Catalog
              <span className="bg-gradient-to-r from-[#3BC553] to-green-400 bg-clip-text text-transparent"> Management </span>
              with AI Intelligence
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform manual catalog work into automated intelligence. Our AI automatically tags products, generates compelling descriptions, and optimizes your entire catalog in seconds - not hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-[#3BC553] hover:bg-green-600 text-white px-8 py-4 text-lg">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-4 text-lg">
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Hero Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-700">
              <div className="text-3xl font-bold text-[#3BC553] mb-2">95%</div>
              <div className="text-gray-400 text-sm">Time Saved</div>
            </div>
            <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-700">
              <div className="text-3xl font-bold text-[#3BC553] mb-2">10x</div>
              <div className="text-gray-400 text-sm">Faster Processing</div>
            </div>
            <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-700">
              <div className="text-3xl font-bold text-[#3BC553] mb-2">99.9%</div>
              <div className="text-gray-400 text-sm">Accuracy Rate</div>
            </div>
            <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-700">
              <div className="text-3xl font-bold text-[#3BC553] mb-2">24/7</div>
              <div className="text-gray-400 text-sm">Automated Processing</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="px-6 lg:px-8 py-20 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">The Manual Catalog Challenge</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              E-commerce teams waste countless hours on repetitive catalog tasks that could be automated
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-red-900/20 border-red-500/30">
              <CardContent className="p-6 text-center">
                <Clock className="w-12 h-12 text-red-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Time Consuming</h3>
                <p className="text-gray-300 mb-4">Teams spend 40+ hours weekly on manual product tagging and description writing</p>
                <div className="text-2xl font-bold text-red-400">40+ hrs/week</div>
              </CardContent>
            </Card>

            <Card className="bg-orange-900/20 border-orange-500/30">
              <CardContent className="p-6 text-center">
                <Eye className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Human Error</h3>
                <p className="text-gray-300 mb-4">Manual processes lead to inconsistent tagging and missed product attributes</p>
                <div className="text-2xl font-bold text-orange-400">30% Error Rate</div>
              </CardContent>
            </Card>

            <Card className="bg-yellow-900/20 border-yellow-500/30">
              <CardContent className="p-6 text-center">
                <TrendingUp className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Scaling Issues</h3>
                <p className="text-gray-300 mb-4">Growing product catalogs overwhelm manual processes and team capacity</p>
                <div className="text-2xl font-bold text-yellow-400">Can't Scale</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Infographic */}
      <section className="px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">AI-Powered Solution</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our intelligent automation transforms your catalog workflow
            </p>
          </div>

          {/* Process Flow */}
          <div className="relative">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
              
              {/* Step 1 */}
              <div className="flex-1 text-center">
                <div className="w-16 h-16 bg-[#3BC553] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Upload Products</h3>
                <p className="text-gray-400 text-sm">Simply upload your product images and basic information</p>
              </div>

              {/* Arrow */}
              <ArrowRight className="w-6 h-6 text-[#3BC553] hidden md:block" />

              {/* Step 2 */}
              <div className="flex-1 text-center">
                <div className="w-16 h-16 bg-[#3BC553] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">AI Analysis</h3>
                <p className="text-gray-400 text-sm">Our AI instantly analyzes and identifies product features</p>
              </div>

              {/* Arrow */}
              <ArrowRight className="w-6 h-6 text-[#3BC553] hidden md:block" />

              {/* Step 3 */}
              <div className="flex-1 text-center">
                <div className="w-16 h-16 bg-[#3BC553] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Auto Generation</h3>
                <p className="text-gray-400 text-sm">Tags, descriptions, and metadata generated automatically</p>
              </div>

              {/* Arrow */}
              <ArrowRight className="w-6 h-6 text-[#3BC553] hidden md:block" />

              {/* Step 4 */}
              <div className="flex-1 text-center">
                <div className="w-16 h-16 bg-[#3BC553] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Optimized Results</h3>
                <p className="text-gray-400 text-sm">Ready-to-publish, conversion-optimized product listings</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Demo Section */}
      <section id="demo" className="px-6 lg:px-8 py-20 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">See AI in Action</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Watch how our AI automatically tags products and generates compelling content for your retail business.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">AI Product Tagging</h3>
              <p className="text-gray-300 mb-6">
                Our AI instantly identifies and tags your products with relevant categories, attributes, and metadata.
              </p>
              <ProductTaggingDemo />
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Content Generation</h3>
              <p className="text-gray-300 mb-6">
                Generate compelling product titles, descriptions, and bullet points that convert visitors into customers.
              </p>
              <AIContentGenerator />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Real-Time Analytics Dashboard</h3>
            <p className="text-gray-300 mb-6 text-center max-w-2xl mx-auto">
              Track your AI-powered catalog optimization with detailed metrics and insights.
            </p>
            <RetailDashboard />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Transform Your Business Results</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              See the measurable impact of AI-powered catalog automation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-[#3BC553]/20 to-green-600/10 border-[#3BC553]/30">
              <CardContent className="p-6 text-center">
                <BarChart3 className="w-12 h-12 text-[#3BC553] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Increase Revenue</h3>
                <div className="text-3xl font-bold text-[#3BC553] mb-2">+40%</div>
                <p className="text-gray-300">Better product descriptions lead to higher conversion rates and sales</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-500/20 to-cyan-600/10 border-blue-500/30">
              <CardContent className="p-6 text-center">
                <Clock className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Save Time</h3>
                <div className="text-3xl font-bold text-blue-400 mb-2">95%</div>
                <p className="text-gray-300">Reduce manual catalog work from hours to minutes with automation</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500/20 to-pink-600/10 border-purple-500/30">
              <CardContent className="p-6 text-center">
                <Lightbulb className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Improve Quality</h3>
                <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
                <p className="text-gray-300">Consistent, accurate product information across your entire catalog</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-500/20 to-red-600/10 border-orange-500/30">
              <CardContent className="p-6 text-center">
                <Workflow className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Scale Effortlessly</h3>
                <div className="text-3xl font-bold text-orange-400 mb-2">10x</div>
                <p className="text-gray-300">Handle growing product catalogs without increasing team size</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-teal-500/20 to-emerald-600/10 border-teal-500/30">
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 text-teal-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Reduce Errors</h3>
                <div className="text-3xl font-bold text-teal-400 mb-2">-90%</div>
                <p className="text-gray-300">AI eliminates human errors in product categorization and tagging</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-500/20 to-amber-600/10 border-yellow-500/30">
              <CardContent className="p-6 text-center">
                <MessageSquare className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Better SEO</h3>
                <div className="text-3xl font-bold text-yellow-400 mb-2">+60%</div>
                <p className="text-gray-300">Optimized product descriptions improve search engine rankings</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 lg:px-8 py-20 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Powerful Features for Modern Retailers</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Everything you need to create, manage, and optimize your product catalogs with AI assistance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-900/50 border-gray-700 hover:border-[#3BC553]/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#3BC553] rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">AI Content Generation</h3>
                <p className="text-gray-400">
                  Generate compelling product descriptions, titles, and metadata in seconds with advanced AI technology.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-700 hover:border-[#3BC553]/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#3BC553] rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Smart Organization</h3>
                <p className="text-gray-400">
                  Automatically categorize and tag your products with intelligent organization systems.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-700 hover:border-[#3BC553]/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#3BC553] rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Team Collaboration</h3>
                <p className="text-gray-400">
                  Work together seamlessly with your team using real-time collaboration and approval workflows.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-12">Trusted by 10,000+ Businesses Worldwide</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="bg-gray-900/30 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">
                  "Catalog Genie transformed our product management workflow. We're now processing 10x more products in half the time."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3"></div>
                  <div>
                    <div className="text-white font-semibold">Sarah Chen</div>
                    <div className="text-gray-400 text-sm">E-commerce Director, TechFlow</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/30 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">
                  "The AI descriptions are incredibly accurate and engaging. Our conversion rates increased by 40% since switching."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-3"></div>
                  <div>
                    <div className="text-white font-semibold">Marcus Rodriguez</div>
                    <div className="text-gray-400 text-sm">Founder, RetailMax</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white">10,000+</div>
              <div className="text-gray-400">Active Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">2M+</div>
              <div className="text-gray-400">Products Processed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">99.9%</div>
              <div className="text-gray-400">Uptime</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-gray-400">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="px-6 lg:px-8 py-20 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
            <p className="text-gray-300 text-lg">Choose the plan that fits your business needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-900/50 border-gray-700">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
                <div className="text-4xl font-bold text-white mb-6">
                  $29<span className="text-lg text-gray-400">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-[#3BC553] mr-3" />
                    Up to 1,000 products
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-[#3BC553] mr-3" />
                    AI content generation
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-[#3BC553] mr-3" />
                    Basic templates
                  </li>
                </ul>
                <Button className="w-full bg-gray-700 hover:bg-gray-600">Get Started</Button>
              </CardContent>
            </Card>

            <Card className="bg-[#3BC553] border-[#3BC553] scale-105">
              <CardContent className="p-8">
                <div className="text-center mb-4">
                  <Badge className="bg-white/20 text-white">Most Popular</Badge>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Professional</h3>
                <div className="text-4xl font-bold text-white mb-6">
                  $79<span className="text-lg text-white/70">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-white">
                    <CheckCircle className="w-5 h-5 text-white mr-3" />
                    Up to 10,000 products
                  </li>
                  <li className="flex items-center text-white">
                    <CheckCircle className="w-5 h-5 text-white mr-3" />
                    Advanced AI features
                  </li>
                  <li className="flex items-center text-white">
                    <CheckCircle className="w-5 h-5 text-white mr-3" />
                    Team collaboration
                  </li>
                  <li className="flex items-center text-white">
                    <CheckCircle className="w-5 h-5 text-white mr-3" />
                    Priority support
                  </li>
                </ul>
                <Button className="w-full bg-white text-[#3BC553] hover:bg-gray-100">Get Started</Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-700">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
                <div className="text-4xl font-bold text-white mb-6">
                  Custom<span className="text-lg text-gray-400"></span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-[#3BC553] mr-3" />
                    Unlimited products
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-[#3BC553] mr-3" />
                    Custom integrations
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-[#3BC553] mr-3" />
                    Dedicated support
                  </li>
                </ul>
                <Button className="w-full bg-gray-700 hover:bg-gray-600">Contact Sales</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Catalog?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses already using Catalog Genie to streamline their product management.
          </p>
          <Button size="lg" className="bg-[#3BC553] hover:bg-green-600 text-white px-8 py-4 text-lg">
            Start Your Free Trial
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 lg:px-8 py-12 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#3BC553] rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Catalog Genie</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 Catalog Genie. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
