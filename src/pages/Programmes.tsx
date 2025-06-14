
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ArrowRight, Building, MapPin, Download } from 'lucide-react';

const Programmes = () => {
  const commodities = [
    { icon: "🏊‍♂️", text: "Piscine sur toit-terrasse" },
    { icon: "💪", text: "Salle de sport équipée" },
    { icon: "🛋️", text: "Lounge exclusif résidents" },
    { icon: "🔒", text: "Sécurité 24h/7j" },
    { icon: "🚗", text: "Parking sécurisé" },
    { icon: "🌿", text: "Espaces verts aménagés" },
    { icon: "🏢", text: "Ascenseurs haute vitesse" },
    { icon: "✨", text: "Finitions haut de gamme" }
  ];

  return (
    <div className="min-h-screen bg-white py-20">
      {/* Logo Background */}
      <div 
        className="fixed inset-0 opacity-[0.01] pointer-events-none bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/204fb4d0-d00d-4292-954c-34279fd2b8d7.png')`,
          backgroundSize: '600px auto',
          backgroundPosition: 'center center'
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-gray-50 text-gray-700 rounded-full text-sm font-medium border">
              Nos Réalisations d'Exception
            </span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-light text-gray-900 mb-8 leading-tight">
            Nos Programmes
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Découvrez nos projets immobiliers d'exception, conçus pour allier élégance, confort et qualité de vie.
          </p>
          <div className="w-16 h-px bg-gray-300 mx-auto mt-8"></div>
        </div>

        {/* Main Project - Résidence THANYS */}
        <div className="max-w-6xl mx-auto mb-16">
          <Card className="overflow-hidden border-0 shadow-sm bg-white">
            <div className="grid grid-cols-1 xl:grid-cols-2">
              {/* Visual Section */}
              <div className="relative h-96 xl:h-auto bg-gray-50 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Building className="w-10 h-10 text-gray-600" />
                    </div>
                    <h3 className="text-3xl font-light text-gray-900 mb-3">
                      Résidence THANYS
                    </h3>
                    <p className="text-gray-600 font-light">Architecture d'Exception</p>
                    <p className="text-gray-500 mt-3 text-sm">Visuel 3D à venir</p>
                  </div>
                </div>
                
                <Badge className="absolute top-6 left-6 bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 text-sm font-normal rounded-none">
                  Projet Phare
                </Badge>
              </div>

              {/* Content Section */}
              <CardContent className="p-12 xl:p-16">
                <CardHeader className="px-0 pt-0 pb-8">
                  <div className="flex items-center gap-3 mb-6">
                    <MapPin className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-600 font-light">Dakar, Sénégal</span>
                  </div>
                  <CardTitle className="text-3xl font-light text-gray-900 leading-tight mb-4">
                    Résidence THANYS
                  </CardTitle>
                </CardHeader>

                <div className="space-y-10">
                  <p className="text-gray-600 leading-relaxed font-light">
                    Un projet immobilier d'exception conçu pour allier élégance, confort et qualité de vie. 
                    Implantée dans un quartier résidentiel prisé, la Résidence propose des appartements aux 
                    surfaces généreuses, pensées pour répondre aux besoins des familles, des professionnels 
                    et des investisseurs exigeants.
                  </p>

                  {/* Caractéristiques */}
                  <div className="bg-gray-50 p-8 border-l-2 border-gray-200">
                    <h4 className="font-medium text-gray-900 mb-6 text-lg flex items-center gap-3">
                      <Building className="w-5 h-5 text-gray-600" />
                      Caractéristiques
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                        <span className="text-gray-700 font-light">10 étages d'exception</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                        <span className="text-gray-700 font-light">Appartements F2, F3 et F4</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                        <span className="text-gray-700 font-light">Finitions soignées et matériaux premium</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                        <span className="text-gray-700 font-light">Terrasse commune avec vue panoramique</span>
                      </div>
                    </div>
                  </div>

                  {/* Commodités */}
                  <div>
                    <h4 className="font-medium text-gray-900 mb-8 text-lg">Commodités Exclusives</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {commodities.map((commodity, index) => (
                        <div key={index} className="flex items-center gap-4 p-3 hover:bg-gray-50 transition-colors duration-200">
                          <span className="text-lg">{commodity.icon}</span>
                          <span className="text-gray-700 font-light">{commodity.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-4 pt-6">
                    <Button asChild className="w-full bg-gray-900 hover:bg-gray-800 text-white py-4 rounded-none font-normal">
                      <Link to="/investir" className="flex items-center justify-center gap-3">
                        Pré-réserver maintenant
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </Button>
                    
                    <Button variant="outline" className="w-full py-4 rounded-none border-gray-300 text-gray-700 hover:bg-gray-50 font-normal">
                      <Download className="w-5 h-5 mr-3" />
                      Télécharger la plaquette PDF
                    </Button>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Programmes;
