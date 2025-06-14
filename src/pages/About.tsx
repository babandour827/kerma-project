
import { Card, CardContent } from '@/components/ui/card';
import { Building2, Users, Award, Heart, Target, Lightbulb, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50/30 relative">
      {/* Logo Background - Ultra subtle */}
      <div 
        className="fixed inset-0 opacity-[0.008] pointer-events-none bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/204fb4d0-d00d-4292-954c-34279fd2b8d7.png')`,
          backgroundSize: '400px auto',
          backgroundPosition: 'center center'
        }}
      />

      <div className="container mx-auto px-4 py-16 relative z-10 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 text-sm text-gray-600 mb-8">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            Notre Histoire
          </div>
          <h1 className="text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">
            À Propos de
            <br />
            <span className="font-medium text-gray-800">KĒRMA Developments</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Notre vision, notre équipe, nos valeurs - Découvrez qui nous sommes et ce qui nous anime.
          </p>
        </div>

        <div className="space-y-16">
          {/* Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50/50 rounded-full mb-6">
                <Target className="w-4 h-4 text-blue-600" />
                <span className="text-sm text-blue-700 font-medium">Notre Vision</span>
              </div>
              <h2 className="text-3xl font-light text-gray-900 mb-6">
                Un immobilier qui concilie esthétique et exigence
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Chez KĒRMA DEVELOPMENTS, nous croyons en un immobilier qui concilie esthétique, exigence et ancrage local. 
                Notre vision est de concevoir des cadres de vie durables, élégants et fonctionnels.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Nos projets sont pensés pour les familles, les investisseurs, d'ici et de l'étranger. Notre ambition : 
                élever les standards de l'immobilier au Sénégal et en Afrique de l'Ouest.
              </p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50">
              <div className="aspect-square bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl flex items-center justify-center">
                <Building2 className="w-16 h-16 text-blue-600" />
              </div>
            </div>
          </div>

          {/* Équipe */}
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-gray-200/50">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-50/50 rounded-full mb-6">
                <Users className="w-4 h-4 text-purple-600" />
                <span className="text-sm text-purple-700 font-medium">Notre Équipe</span>
              </div>
              <h2 className="text-3xl font-light text-gray-900 mb-4">
                Une équipe multidisciplinaire
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                KĒRMA Developments réunit des experts en architecture, ingénierie, finance immobilière et gestion de projet.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Expertise Technique</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Architectes diplômés</li>
                      <li>• Ingénieurs BTP expérimentés</li>
                      <li>• Maîtres d'œuvre qualifiés</li>
                      <li>• Équipes de construction intégrées</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Accompagnement Commercial</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Conseillers en investissement</li>
                      <li>• Experts en financement immobilier</li>
                      <li>• Gestionnaires de patrimoine</li>
                      <li>• Réseau d'agences partenaires</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Valeurs */}
          <div>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50/50 rounded-full mb-6">
                <Heart className="w-4 h-4 text-red-500" />
                <span className="text-sm text-red-600 font-medium">Nos Valeurs</span>
              </div>
              <h2 className="text-3xl font-light text-gray-900 mb-4">
                Nos Valeurs Humaines
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 text-center">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-medium text-gray-900 mb-3">Proximité et Écoute</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Une relation de proximité basée sur l'écoute et la compréhension de vos besoins spécifiques.
                </p>
              </div>
              
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 text-center">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-medium text-gray-900 mb-3">Intégrité et Transparence</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  L'honnêteté guide nos actions avec une communication claire sur nos processus et engagements.
                </p>
              </div>
              
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 text-center">
                <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-medium text-gray-900 mb-3">Excellence et Innovation</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Nous repoussons les limites de la qualité architecturale et des techniques de construction.
                </p>
              </div>
            </div>
          </div>

          {/* Engagement */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 lg:p-12 text-white">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                <Building2 className="w-4 h-4 text-white" />
                <span className="text-sm text-white/80 font-medium">Notre Engagement</span>
              </div>
              <h2 className="text-3xl font-light mb-6">
                Architecture Locale et Durable
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto mb-8">
                Nous sommes convaincus que l'architecture contemporaine africaine a un immense potentiel.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-medium mb-2">Valoriser le savoir-faire local</h4>
                  <p className="text-sm text-white/70">en travaillant avec des artisans et entreprises sénégalaises</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-medium mb-2">Respecter l'environnement</h4>
                  <p className="text-sm text-white/70">en utilisant des matériaux durables et techniques éco-responsables</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-medium mb-2">Promouvoir l'architecture contemporaine</h4>
                  <p className="text-sm text-white/70">en alliant modernité et identité culturelle</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-medium mb-2">Contribuer au développement urbain</h4>
                  <p className="text-sm text-white/70">en créant des espaces qui enrichissent le tissu urbain local</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button asChild className="bg-white text-gray-900 hover:bg-gray-100 px-6 py-2 rounded-full font-medium transition-all duration-200 hover:scale-105">
                <Link to="/programmes" className="inline-flex items-center gap-2">
                  Découvrir nos programmes
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
