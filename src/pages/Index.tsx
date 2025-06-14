
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Zap, Shield, Users, Star, CheckCircle } from "lucide-react";

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
          <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
          <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
          <Button variant="outline" className="border-[#3BC553] text-[#3BC553] hover:bg-[#3BC553] hover:text-white">
            Sign In
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-[#3BC553]/20 text-[#3BC553] border-[#3BC553]/30">
            ✨ AI-Powered Catalog Management
          </Badge>
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Transform Your
            <span className="bg-gradient-to-r from-[#3BC553] to-green-400 bg-clip-text text-transparent"> Product Catalogs </span>
            with AI Magic
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Generate stunning product descriptions, optimize images, and manage your entire catalog with the power of artificial intelligence. Save hours of work while boosting conversions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#3BC553] hover:bg-green-600 text-white px-8 py-4 text-lg">
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-4 text-lg">
              Watch Demo
            </Button>
          </div>
          <div className="mt-12 text-sm text-gray-400">
            ⚡ No credit card required • 14-day free trial • Cancel anytime
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 lg:px-8 py-20 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Powerful Features for Modern Businesses</h2>
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
