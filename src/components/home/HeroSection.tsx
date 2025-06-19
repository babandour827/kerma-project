
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import OptimizedImage from '@/components/OptimizedImage';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 lg:px-6">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <AnimatedSection animation="fadeIn" delay={200}>
          <div className="mb-8 lg:mb-12">
            {/* Logo principal */}
            <div className="max-w-6xl mx-auto my-3 py-3 text-center  rounded-[10%]  relative z-10 w-[13rem] h-[13rem] flex items-center justify-center">
              <OptimizedImage
                src="/uploads/1acd9e00-26c7-4d47-ae6e-582e79e80298.png" 
                className="max-w-6xl mx-auto p-3 text-center  relative rounded-[10%] z-11 w-[17rem] transition-transform duration-300"
                alt="KĒRMA Developments Logo"
              />   
            </div>
            <span className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-white/95 via-white/98 to-white/95 backdrop-blur-md text-gray-700 rounded-full text-sm lg:text-base font-medium border border-gradient-to-r from-gray-200/60 via-gray-100/40 to-gray-200/60 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105">
              <div className="w-2 h-2 bg-kerma-turquoise rounded-full mr-3 animate-pulse"></div>
              
              <div className="w-2.5 h-2.5 bg-gradient-to-r from-kerma-turquoise to-kerma-turquoise-light rounded-full mr-4 animate-pulse-glow"></div>
              Promoteur Immobilier d'Excellence
            </span>
          </div>
        </AnimatedSection>
        
        {/* <AnimatedSection animation="slideUp" delay={400}>
          <div className="space-y-6 lg:space-y-8 mb-12 lg:mb-16">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-black kerma-brown leading-none tracking-tight">
              KĒRMA
            </h1>
            <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-medium kerma-turquoise tracking-[0.3em] uppercase">
              Developments
            </div>
          </div>
        </AnimatedSection> */}
        
        <AnimatedSection animation="fadeIn" delay={600}>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-12 lg:mb-16 leading-relaxed max-w-3xl mx-auto font-light">
            Chez <span className='text-black-800'> KĒRMA </span> <span className='text-black-300' >Developments</span>, Nous créons des espaces de vie pensés pour votre confort, votre bien-être et votre avenir.
          </p>
        </AnimatedSection>
        
        <AnimatedSection animation="slideUp" delay={800}>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <Button asChild className="group relative bg-kerma-brown hover:bg-kerma-brown/90 text-white border-0 px-10 py-6 h-auto text-base font-medium rounded-full transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl w-full sm:w-auto">
              <Link to="/programmes" className="flex items-center justify-center gap-3">
                Notre Programme
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="group bg-transparent hover:bg-white/50 border-2 border-kerma-brown kerma-brown hover:kerma-brown px-10 py-6 h-auto text-base font-medium rounded-full transition-all duration-300 hover:scale-[1.02] shadow-sm hover:shadow-md w-full sm:w-auto">
              <Link to="/investir" className="transition-colors justify-center">
                Investir avec nous
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default HeroSection;
