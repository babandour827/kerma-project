import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const CTASection = () => {
  return (
    <AnimatedSection animation="fadeIn">
      <section className="py-16 sm:py-24 lg:py-32 px-4 lg:px-6 bg-gradient-to-br from-kerma-brown via-kerma-brown to-kerma-brown/95 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.05),transparent)] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm text-kerma-turquoise-light rounded-full text-sm font-medium border border-white/20 mb-6 lg:mb-8">
            <div className="w-1.5 h-1.5 bg-kerma-turquoise rounded-full mr-2 animate-pulse"></div>
            Prêt à investir ?
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-thin text-gray-400 mb-6 tracking-tight">
            Donner du sens à votre capital
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 mb-8 sm:mb-12 font-light max-w-2xl mx-auto">
            Découvrez nos programmes immobiliers d'exception à Dakar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <Button
              asChild
              className="group bg-white hover:bg-gray-50 kerma-brown border-0 px-8 sm:px-10 py-4 sm:py-6 h-auto text-sm sm:text-base font-normal rounded-full transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl w-full sm:w-auto"
            >
              <Link
                to="/programmes"
                className="flex items-center justify-center gap-3"
              >
                Voir nos programmes
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              className="group bg-transparent  border-white/30 bg-amber-800 text-white px-8 sm:px-10 py-4 sm:py-6 h-auto text-sm sm:text-base font-normal rounded-full transition-all duration-300 hover:scale-[1.02] w-full sm:w-auto"
            >
              <Link to="/a-propos" className="justify-center">
                En savoir plus
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default CTASection;
