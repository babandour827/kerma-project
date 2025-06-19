
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Building2, Shield, Award, Users, ArrowRight } from 'lucide-react';
import { useResponsive } from '@/hooks/useResponsive';
import AnimatedSection from '@/components/AnimatedSection';

const ValuesSection = () => {
  const [expandedValue, setExpandedValue] = useState<number | null>(null);
  const { isMobile } = useResponsive();

  const values = [
    {
      icon: Building2,
      title: "Maîtrise technique",
      shortDescription: "Nos équipes de construction et notre encadrement technique expérimenté garantissent des ouvrages solides et fiables.",
      fullDescription: "Grâce à nos propres équipes de construction et à un encadrement technique expérimenté, nous assurons un haut niveau de contrôle sur l'ensemble du processus de réalisation. Cette expertise nous permet de garantir des ouvrages solides, fiables et réalisés dans les règles de l'art, avec une qualité de finition parfaite."
    },
    {
      icon: Shield,
      title: "Transparence",
      shortDescription: "Une relation claire et honnête avec nos clients et partenaires, dans un esprit de confiance mutuelle.",
      fullDescription: "Nous croyons en une relation claire et honnête avec nos clients et partenaires. Chaque information, chaque engagement est communiqué avec rigueur, dans un esprit de confiance mutuelle."
    },
    {
      icon: Award,
      title: "Qualité architecturale",
      shortDescription: "Des projets pensés avec une véritable exigence de design, d'harmonie et de fonctionnalité.",
      fullDescription: "Nous aspirons à challenger le niveau architectural dans notre région. Chaque projet est pensé avec une véritable exigence de design, d'harmonie et de fonctionnalité, pour offrir des espaces inspirants et durables. Dans un contexte où le bâti ordinaire domine, nous faisons le choix d'une architecture soignée, ambitieuse et porteuse de sens."
    },
    {
      icon: Users,
      title: "Conseil et Accompagnement",
      shortDescription: "Un accompagnement personnalisé tout au long de votre projet avec notre réseau de partenaires.",
      fullDescription: "Notre engagement ne s'arrête pas à la livraison de votre logement. Nous vous accompagnons tout au long de votre projet, avec des conseils personnalisés pour optimiser votre investissement. Grâce à notre réseau de partenaires triés sur le volet, nous facilitons votre mise en relation avec les meilleures agences immobilières de Dakar."
    }
  ];

  const toggleExpanded = (index: number) => {
    setExpandedValue(expandedValue === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-24 lg:py-32 px-4 lg:px-6 bg-white/95 backdrop-blur-sm relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection animation="fadeIn" className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-kerma-turquoise/10 text-kerma-brown rounded-full text-sm font-medium border border-kerma-turquoise/20 mb-6 lg:mb-8">
            <div className="w-1.5 h-1.5 bg-kerma-turquoise rounded-full mr-2"></div>
            Nos atouts
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-thin kerma-brown mb-4 tracking-tight">
            L'excellence au cœur
          </h2>
          <p className="text-base sm:text-lg kerma-turquoise font-light">
            de nos projets
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16">
          {values.map((value, index) => (
            <AnimatedSection 
              key={index} 
              animation="slideUp" 
              delay={index * 200}
              className="group relative bg-white border border-zinc-100 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-all duration-500 hover:border-kerma-turquoise/20"
            >
              <div className="flex items-start gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div className="flex-shrink-0">
                  <div className={`${isMobile ? 'w-10 h-10' : 'w-12 h-12'} bg-kerma-turquoise/10 rounded-xl flex items-center justify-center group-hover:bg-kerma-brown group-hover:scale-110 transition-all duration-500`}>
                    <value.icon className={`${isMobile ? 'w-4 h-4' : 'w-5 h-5'} kerma-turquoise group-hover:text-white transition-colors duration-500`} />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-medium kerma-brown mb-3 tracking-tight">
                    {value.title}
                  </h3>
                  <p className="text-zinc-600 leading-relaxed font-light mb-4 text-sm sm:text-base">
                    {expandedValue === index ? value.fullDescription : value.shortDescription}
                  </p>
                  <Button 
                    onClick={() => toggleExpanded(index)}
                    variant="ghost" 
                    className="kerma-turquoise hover:kerma-brown hover:bg-kerma-turquoise/5 p-0 h-auto font-normal text-sm group/btn"
                  >
                    {expandedValue === index ? 'Réduire' : 'Découvrir'}
                    <ArrowRight className={`w-3 h-3 ml-2 transition-transform group-hover/btn:translate-x-1 ${expandedValue === index ? 'rotate-90' : ''}`} />
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
