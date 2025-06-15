
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const ProductTaggingCTA = () => {
  return (
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
  );
};

export default ProductTaggingCTA;
