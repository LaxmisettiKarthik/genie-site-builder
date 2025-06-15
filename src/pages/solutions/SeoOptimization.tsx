
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, Globe, Search, Tag, TrendingUp, Sparkles, Bot, PenSquare } from "lucide-react";
import FloatingParticles from "@/components/FloatingParticles";
import { useState, useEffect } from "react";

const SeoOptimization = () => {
    const [seoScore, setSeoScore] = useState(65);
    const [isGenerating, setIsGenerating] = useState(false);
    const [generatedContent, setGeneratedContent] = useState("");

    useEffect(() => {
        if (!isGenerating) {
            const timer = setTimeout(() => {
                const newScore = Math.floor(Math.random() * (95 - 75 + 1) + 75);
                setSeoScore(newScore);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [isGenerating, seoScore]);

    const handleGenerateContent = () => {
        setIsGenerating(true);
        setGeneratedContent("");
        const phrases = [
            "Analyzing keywords...",
            "Optimizing for search intent...",
            "Crafting compelling meta descriptions...",
            "Generating alt text for images...",
            "Building high-authority backlinks (simulated)...",
            "Finalizing SEO-rich content..."
        ];
        let i = 0;
        const interval = setInterval(() => {
            if (i < phrases.length) {
                setGeneratedContent(prev => prev + phrases[i] + "\n");
                i++;
            } else {
                clearInterval(interval);
                setGeneratedContent(prev => prev + "\n" + `**Generated Content:**\n\n**Title:** Premium All-Weather Men's Performance Jacket\n\n**Description:** Discover the ultimate blend of style and functionality with our Premium All-Weather Performance Jacket. Engineered for the modern man, this jacket provides superior protection against wind and rain while maintaining breathability. Perfect for urban exploration or mountain trails, its sleek design is enhanced with SEO-rich keywords like 'waterproof men's jacket', 'breathable outerwear', and 'lightweight technical coat' to boost online discoverability. Elevate your wardrobe and your search ranking today!`);
                setIsGenerating(false);
            }
        }, 800);
    };

    const features = [
        {
            icon: PenSquare,
            title: "SEO-Optimized Content Generation",
            description: "Automatically create product titles and descriptions that are rich in relevant keywords to rank higher in search results.",
        },
        {
            icon: Globe,
            title: "Locale & Marketplace Specific SEO",
            description: "Tailor your SEO strategy for different regions and marketplaces, using localized keywords and cultural nuances.",
        },
        {
            icon: Search,
            title: "Boost Product Discoverability",
            description: "Optimize for traditional search engines and new AI-powered browsers to ensure your products are seen everywhere.",
        },
        {
            icon: Tag,
            title: "AI-Powered SEO Tag Generation",
            description: "Instantly generate a full spectrum of SEO tags, from meta tags to schema markup, for every product in your catalog.",
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0D1117] via-[#161B22] to-[#21262D] relative overflow-hidden text-white">
            <FloatingParticles />
            
            <section className="px-6 lg:px-8 py-20 lg:py-32 relative z-10">
                <div className="max-w-6xl mx-auto text-center">
                    <Badge className="bg-[#3BC553]/20 text-[#3BC553] border-[#3BC553]/30 mb-6">
                        <TrendingUp className="mr-2 h-4 w-4"/> AI-Powered SEO
                    </Badge>
                    <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                        SEO Product
                        <span className="bg-gradient-to-r from-[#3BC553] via-green-400 to-emerald-300 bg-clip-text text-transparent animate-pulse"> Optimization</span>
                    </h1>
                    <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                        Supercharge your product visibility and climb the search rankings with our AI-driven SEO toolkit.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-[#3BC553] hover:bg-green-600 text-white px-8 py-4 text-lg transform hover:scale-105 transition-all">
                            Optimize My Catalog
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                        <Button size="lg" variant="outline" className="border-[#3BC553] text-[#3BC553] hover:bg-[#3BC553] hover:text-white px-8 py-4 text-lg transform hover:scale-105 transition-all">
                            See Demo
                        </Button>
                    </div>
                </div>
            </section>

            <section className="px-6 lg:px-8 py-20 bg-black/20 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-6">Core SEO Features</h2>
                        <p className="text-xl text-gray-300">A complete suite of tools to dominate search engine results.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <Card key={index} className="bg-gray-900/50 border-gray-700 hover:border-[#3BC553]/50 transition-all duration-300 hover:scale-105 text-center">
                                    <CardContent className="p-6">
                                        <div className="w-16 h-16 bg-[#3BC553]/20 rounded-lg flex items-center justify-center mx-auto mb-4 border border-[#3BC553]/30">
                                            <Icon className="w-8 h-8 text-[#3BC553]" />
                                        </div>
                                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                        <p className="text-gray-400 text-sm">{feature.description}</p>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>
            
            <section className="px-6 lg:px-8 py-20 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold mb-6">Live SEO Scoring & Content Generation</h2>
                            <p className="text-xl text-gray-300 mb-8">
                                See our AI in action. We'll analyze a sample product and generate SEO-optimized content, giving you a real-time score.
                            </p>
                            <Card className="bg-gray-900/50 border-gray-700">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Bot className="text-[#3BC553]" />
                                        AI Content Generator
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-center justify-between mb-4">
                                        <p>Product: "Men's Jacket"</p>
                                        <Button onClick={handleGenerateContent} disabled={isGenerating} className="bg-[#3BC553] hover:bg-green-600 text-white">
                                            {isGenerating ? "Generating..." : "Generate Content"}
                                            <Sparkles className="ml-2 w-4 h-4"/>
                                        </Button>
                                    </div>
                                    {generatedContent && (
                                        <div className="mt-4 p-4 bg-black/30 rounded-lg border border-gray-700 whitespace-pre-wrap text-sm font-mono max-h-64 overflow-y-auto">
                                            {generatedContent}
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3 className="text-2xl font-bold mb-4">Live SEO Score</h3>
                            <div className="relative w-48 h-48">
                                <svg className="w-full h-full" viewBox="0 0 100 100">
                                    <circle className="text-gray-700" strokeWidth="10" stroke="currentColor" fill="transparent" r="45" cx="50" cy="50" />
                                    <circle
                                        className="text-[#3BC553] transition-all duration-1000 ease-out"
                                        strokeWidth="10"
                                        strokeDasharray={2 * Math.PI * 45}
                                        strokeDashoffset={(2 * Math.PI * 45) - (seoScore / 100) * (2 * Math.PI * 45)}
                                        strokeLinecap="round"
                                        stroke="currentColor"
                                        fill="transparent"
                                        r="45"
                                        cx="50"
                                        cy="50"
                                        transform="rotate(-90 50 50)"
                                    />
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <span className="text-4xl font-bold text-white">{seoScore}</span>
                                    <span className="text-gray-400">out of 100</span>
                                </div>
                            </div>
                            <p className="text-gray-300 mt-4 text-center max-w-xs">Our AI has calculated this score based on keyword density, meta-data, and discoverability potential.</p>
                        </div>
                    </div>
                </div>
            </section>

             <section className="px-6 lg:px-8 py-20 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                  <div className="bg-gradient-to-r from-[#3BC553]/20 to-green-400/20 rounded-3xl p-12 border border-[#3BC553]/30">
                    <h2 className="text-4xl font-bold text-white mb-6">Ready to Dominate Search?</h2>
                    <p className="text-xl text-gray-300 mb-8">
                      Let our AI put your products at the top of every search result page.
                    </p>
                    <Button size="lg" className="bg-[#3BC553] hover:bg-green-600 text-white px-12 py-6 text-xl transform hover:scale-105 transition-all">
                      Start Your Free Trial
                      <TrendingUp className="ml-2 w-6 h-6" />
                    </Button>
                  </div>
                </div>
            </section>
        </div>
    );
};

export default SeoOptimization;
