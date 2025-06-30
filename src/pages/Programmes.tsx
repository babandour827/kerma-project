import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building,
  MapPin,
  Download,
  Waves,
  Dumbbell,
  Sofa,
  Shield,
  ParkingCircle,
  Layout,
  DoorOpen,
  Sparkles,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import Videofram from "@/pages/videoFram";

const Programmes = () => {
  // État pour gérer les commodités déployées
  const [expandedCommodity, setExpandedCommodity] = useState<number | null>(
    null
  );

  // Palette de couleurs pour les icônes
  const iconColors = {
    blue: "text-blue-500",
    teal: "text-teal-500",
    amber: "text-amber-500",
    indigo: "text-indigo-500",
    gray: "text-gray-500",
  };

  const commodities = [
    {
      icon: <Waves className={`w-5 h-5 ${iconColors.blue}`} />,
      title: "Piscine panoramique",
      description: "Espace de détente avec vue imprenable sur le ciel de Dakar",
    },
    {
      icon: <Dumbbell className={`w-5 h-5 ${iconColors.teal}`} />,
      title: "Salle de sport",
      description:
        "Équipements modernes dans un cadre intimiste sur la terrasse",
    },
    {
      icon: <Sofa className={`w-5 h-5 ${iconColors.amber}`} />,
      title: "Lounge exclusif",
      description: "Espace chic et apaisant pour recevoir ou se détendre",
    },
    {
      icon: <DoorOpen className={`w-5 h-5 ${iconColors.indigo}`} />,
      title: "Lobby raffiné",
      description: "Hall d'accueil lumineux aux finitions haut de gamme",
    },
    {
      icon: <ParkingCircle className={`w-5 h-5 ${iconColors.gray}`} />,
      title: "Parking sécurisé",
      description: "Places disponibles au sous-sol et au rez-de-chaussée",
    },
    {
      icon: <Shield className={`w-5 h-5 ${iconColors.indigo}`} />,
      title: "Sécurité 24h/24",
      description: "Gardiennage et vidéosurveillance permanente",
    },
    {
      icon: <Layout className={`w-5 h-5 ${iconColors.blue}`} />,
      title: "Baies vitrées",
      description: "Double vitrage pour isolation thermique et acoustique",
    },
    {
      icon: <Sparkles className={`w-5 h-5 ${iconColors.amber}`} />,
      title: "Finitions premium",
      description: "Matériaux de qualité et attention aux détails",
    },
  ];

  const toggleCommodity = (index: number) => {
    setExpandedCommodity(expandedCommodity === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white py-12 md:py-16">
      {/* Logo Background */}
      <div
        className="fixed inset-0 opacity-[0.01] pointer-events-none bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/uploads/204fb4d0-d00d-4292-954c-34279fd2b8d7.png')`,
          backgroundSize: "600px auto",
          backgroundPosition: "center center",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-1 bg-gray-50 text-gray-700 rounded-full text-sm font-medium border">
              Nos Programmes d'Exception
            </span>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/uploads/brand-kerma-gold.png"
              alt="KĒRMA DEVELOPMENTS"
              className="transition-transform duration-300 drop-shadow-lg"
              style={{ width: "20rem", height: "auto" }}
            />
          </div>

          <div className="w-16 h-px bg-gray-300 mx-auto mt-6"></div>
        </div>

        {/* Main Project - Résidence THANYS */}
        <div className="max-w-6xl mx-auto">
          <Card className="overflow-hidden border-0 shadow-sm bg-white">
            <div className="grid grid-cols-1 xl:grid-cols-2">
              {/* Visual Section */}
              <div className="relative h-64 md:h-80 xl:h-auto bg-gray-50 overflow-hidden flex items-start justify-center">
                <div className="text-center p-6">
                  <img
                    src="/uploads/view_building_3D.jpg"
                    alt="KĒRMA DEVELOPMENTS"
                    className="transition-transform duration-300 drop-shadow-lg"
                    style={{ width: "40rem", height: "auto" }}
                  />
                </div>

                {/* <Badge className="absolute top-4 left-4 bg-gray-900 hover:bg-gray-800 text-white px-3 py-1 text-xs font-normal rounded-none">
                  Programme en cours
                </Badge> */}
              </div>

              {/* Content Section */}
              <CardContent className="p-6 md:p-8 xl:p-10">
                {/* En-tête simplifiée - Sans boutons */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600 text-sm">
                      Dakar, Sénégal
                    </span>
                  </div>
                  <CardTitle className="text-2xl md:text-3xl font-light text-gray-900">
                    Résidence THANYS
                  </CardTitle>
                </div>

                {/* Description concise */}
                <p className="text-gray-600 text-sm md:text-base mb-6">
                  Programme immobilier d'exception alliant élégance, confort et
                  qualité de vie. Appartements généreux pour familles,
                  professionnels et investisseurs exigeants.
                </p>

                {/* Grille combinée Caractéristiques + Commodités */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Caractéristiques */}
                  <div className="bg-gray-50 p-5 border-l-2 border-gray-200">
                    <h4 className="font-medium text-gray-900 mb-4 text-base flex items-center gap-2">
                      <Building className="w-4 h-4 text-gray-600" />
                      Caractéristiques
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-700 text-sm">
                          10 étages d'exception
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-700 text-sm">
                          Appartements F2, F3, F4
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-700 text-sm">
                          Finitions et matériaux premium
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-700 text-sm">
                          Terrasse commune aménagée avec vue panoramique
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Commodités avec boutons "Découvrir" */}
                  <div>
                    <h4 className="font-medium text-gray-900 mb-4 text-base">
                      Commodités Exclusives
                    </h4>
                    <div className="space-y-3">
                      {commodities.map((commodity, index) => (
                        <div
                          key={index}
                          className="border border-gray-100 rounded-lg overflow-hidden transition-all duration-300 hover:border-gray-200"
                        >
                          <div
                            className="flex items-center justify-between p-3 cursor-pointer hover:bg-gray-50 transition-colors"
                            onClick={() => toggleCommodity(index)}
                          >
                            <div className="flex items-center gap-3">
                              <div className="flex-shrink-0 w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                                {commodity.icon}
                              </div>
                              <span className="text-gray-700 font-medium text-sm">
                                {commodity.title}
                              </span>
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="w-6 h-6 text-gray-500 hover:bg-transparent"
                            >
                              {expandedCommodity === index ? (
                                <ChevronUp className="w-4 h-4" />
                              ) : (
                                <ChevronDown className="w-4 h-4" />
                              )}
                            </Button>
                          </div>

                          {expandedCommodity === index && (
                            <div className="p-4 bg-gray-50 border-t border-gray-100 animate-fadeIn">
                              <p className="text-gray-600 text-sm italic">
                                {commodity.description}
                              </p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Vidéo */}
                <div className="mb-6">
                  <Videofram />
                </div>

                {/* Boutons unifiés - Toujours en bas */}
                <div className="flex flex-col md:flex-row gap-4">
                  <Button
                    asChild
                    className="bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white py-4 md:py-3 rounded-lg font-medium shadow-md transition-all"
                  >
                    {/* Modification: Ajout de onClick pour scroller en haut */}
                    <Link
                      to="/investir"
                      onClick={() => window.scrollTo(0, 0)}
                      className="flex items-center justify-center gap-2"
                    >
                      <span>
                        Pré-réserver{" "}
                        {window.innerWidth >= 768 ? "" : "maintenant"}
                      </span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>

                  <Button
                    variant="outline"
                    className="py-4 md:py-3 rounded-lg border-gray-300 text-gray-700 hover:bg-gray-50 font-medium transition-all hover:shadow"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    <span>Télécharger la plaquette PDF</span>
                  </Button>
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
