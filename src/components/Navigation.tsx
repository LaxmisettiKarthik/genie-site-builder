
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sparkles, Package, Zap, Target, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();

  const solutions = [
    {
      title: "Automated Product Tagging",
      href: "/solutions/product-tagging",
      description: "AI-powered automatic tagging and categorization of your entire product catalog",
      icon: Package,
    },
    {
      title: "Content Generation",
      href: "/solutions/content-generation",
      description: "Generate compelling product descriptions and marketing copy with AI",
      icon: Zap,
    },
    {
      title: "Catalog Optimization",
      href: "/solutions/catalog-optimization",
      description: "Optimize your catalog for better search and conversion rates",
      icon: Target,
    },
    {
      title: "SEO Optimization",
      href: "/solutions/seo-optimization",
      description: "Boost product discoverability with AI-powered SEO optimization.",
      icon: TrendingUp,
    },
  ];

  return (
    <nav className="flex items-center justify-between p-6 lg:px-8">
      <Link to="/" className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-[#3BC553] rounded-lg flex items-center justify-center">
          <Sparkles className="w-5 h-5 text-white" />
        </div>
        <span className="text-xl font-bold text-white font-afacad">Catalog Genie</span>
      </Link>
      
      <div className="hidden md:flex items-center space-x-8">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-gray-300 hover:text-white">
                Solutions
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-6 w-[500px] bg-gray-900 border-gray-700">
                  {solutions.map((solution) => {
                    const Icon = solution.icon;
                    return (
                      <NavigationMenuLink key={solution.href} asChild>
                        <Link
                          to={solution.href}
                          className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-800 hover:text-white focus:bg-gray-800 focus:text-white",
                            location.pathname === solution.href && "bg-gray-800 text-white"
                          )}
                        >
                          <div className="flex items-center gap-3">
                            <Icon className="w-5 h-5 text-[#3BC553]" />
                            <div className="text-sm font-medium leading-none text-white">
                              {solution.title}
                            </div>
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                            {solution.description}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    );
                  })}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        <a href="/#demo" className="text-gray-300 hover:text-white transition-colors">Demo</a>
        <a href="/#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
        <a href="/#about" className="text-gray-300 hover:text-white transition-colors">About</a>
        <Button variant="outline" className="border-[#3BC553] text-[#3BC553] hover:bg-[#3BC553] hover:text-white">
          Book a Free Call
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
