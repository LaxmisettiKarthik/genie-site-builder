
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BarChart3, Clock, Lightbulb, Workflow, Shield, MessageSquare, Sparkles } from "lucide-react";
import AnimatedNumber from "./AnimatedNumber";

const benefits = [{
  title: "Increase Revenue",
  value: "+40%",
  description: "Better product descriptions lead to higher conversion rates and sales.",
  icon: BarChart3
}, {
  title: "Save Time",
  value: "95%",
  description: "Reduce manual catalog work from hours to minutes with automation.",
  icon: Clock
}, {
  title: "Improve Quality",
  value: "99.9%",
  description: "Consistent, accurate product information across your entire catalog.",
  icon: Lightbulb
}, {
  title: "Scale Effortlessly",
  value: "10x",
  description: "Handle growing product catalogs without increasing team size.",
  icon: Workflow
}, {
  title: "Reduce Errors",
  value: "-90%",
  description: "AI eliminates human errors in product categorization and tagging.",
  icon: Shield
}, {
  title: "Better SEO",
  value: "+60%",
  description: "Optimized product descriptions improve search engine rankings.",
  icon: MessageSquare
}];

const BusinessResults = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-[#3BC553]/10 border border-[#3BC553]/30 rounded-full px-6 py-2 mb-6">
          <Sparkles className="w-4 h-4 text-[#3BC553]" />
          <span className="text-[#3BC553] font-medium">Transformative Results</span>
        </div>
        <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent mb-6">
          Transform Your Business Results
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          See the measurable impact of AI-powered catalog automation
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full" defaultValue="item-0">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;
          return (
            <AccordionItem value={`item-${index}`} key={index} className="border-b-2 border-gray-800 last:border-b-0">
              <AccordionTrigger className="py-6 text-white hover:no-underline group text-left">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-gray-800 group-hover:bg-[#3BC553] transition-colors duration-300 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#3BC553] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="text-2xl font-bold">{benefit.title}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-4xl font-black bg-gradient-to-r from-[#3BC553] to-green-400 bg-clip-text text-transparent">
                      <AnimatedNumber value={benefit.value} />
                    </span>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 text-lg pl-[72px] pb-6 text-left">
                {benefit.description}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default BusinessResults;
