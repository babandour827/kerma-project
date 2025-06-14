import { Youtube } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

const Videofram = () => {
  return (
    <AnimatedSection animation="fadeIn" delay={200}>
      <div className="max-w-5xl mx-auto mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4">
            Découvrez Nos Réalisations en Vidéo
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            Plongez dans l'univers KĒRMA et découvrez nos projets immobiliers d'exception.
          </p>
        </div>

        <div className="relative group">
          <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl aspect-video">
            <iframe
              className="w-full h-full rounded-2xl"
              src="https://www.youtube.com/embed/AJFkU1bC3C0?si=OQ2bGiLyw6vs2izE"
              title="Résidence THANYS - Présentation Vidéo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{
                border: 'none'
              }}
            />
            
            <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium pointer-events-none">
              HD
            </div>
          </div>
        </div>

        {/* Informations sous la vidéo */}
        <div className="text-center mt-6">
          <h3 className="text-xl font-medium text-gray-900 mb-2">Résidence THANYS</h3>
          <p className="text-gray-600 font-light mb-4">Présentation Vidéo Exclusive</p>
          
          <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span>Nouveau projet</span>
            </div>
            <div className="flex items-center gap-2">
              <Youtube className="w-4 h-4" />
              <span>Qualité HD</span>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Videofram;
