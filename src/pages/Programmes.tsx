import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Download, ArrowRight, MapPin, Waves, Dumbbell, Sofa, 
  Shield, ParkingCircle, Layout, DoorOpen, Sparkles,
  ChevronDown, ChevronUp, Building
} from "lucide-react";
import { Link } from "react-router-dom";

const commodities = [
  { icon: Waves, title: "Piscine panoramique", description: "Espace de détente avec vue imprenable sur le ciel de Dakar" },
  { icon: Dumbbell, title: "Salle de sport", description: "Équipements modernes dans un cadre intimiste sur la terrasse" },
  { icon: Sofa, title: "Lounge exclusif", description: "Espace chic et apaisant pour recevoir ou se détendre" },
  { icon: DoorOpen, title: "Lobby raffiné", description: "Hall d'accueil lumineux aux finitions haut de gamme" },
  { icon: ParkingCircle, title: "Parking sécurisé", description: "Places disponibles au sous-sol et au rez-de-chaussée" },
  { icon: Shield, title: "Sécurité 24h/24", description: "Gardiennage et vidéosurveillance permanente" },
  { icon: Layout, title: "Confort thermique et acoustique", description: "Grandes baies vitrées avec double vitrage pour une meilleure isolation et un éclairage naturel" },
  { icon: Sparkles, title: "Finitions premium", description: "Matériaux de qualité et attention aux détails" },
];

const iconColors = [
  "bg-blue-100 text-blue-600",
  "bg-red-100 text-red-600",
  "bg-green-100 text-green-600",
  "bg-yellow-100 text-yellow-600",
  "bg-purple-100 text-purple-600",
  "bg-pink-100 text-pink-600",
  "bg-indigo-100 text-indigo-600",
  "bg-teal-100 text-teal-600"
];

export default function Programmes() {
  const [expanded, setExpanded] = useState(null);

  return (
    <div className="bg-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <div className="mt-6">
          <span className="inline-block px-4 py-1 bg-gray-100 text-gray-800 text-sm rounded-full font-medium mb-4">
            Nos Programmes d'Exception
          </span>
        </div>
        
        <img
          src="/uploads/brand-kerma-gold.png"
          alt="KĒRMA DEVELOPMENTS"
          className="mx-auto w-44 sm:w-52 mb-6"
        />
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        {/* Conteneur relatif pour positionner la bannière */}
        <div className="relative">
          <div className="aspect-w-16 aspect-h-9">
            <img
              src="/uploads/view_building_3D.jpg"
              alt="Résidence Thanys"
              className="object-cover w-full h-full"
            />
          </div>
          
          {/* Bannière élégante et discrète */}
          <div className="absolute bottom-4 left-4 bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm text-white px-4 py-2 rounded-sm flex items-center">
            <div className="w-1 h-1 bg-emerald-400 rounded-full mr-2 animate-pulse"></div>
            <span className="font-light text-sm tracking-wider">PROGRAMME EN COURS</span>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center text-gray-600 text-sm mb-2">
            <MapPin className="w-4 h-4 mr-1" /> Dakar, Sénégal
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Résidence <em>THANYS</em>
          </h2>
          <p className="text-gray-700 text-sm md:text-base mb-6">
            Programme immobilier d'exception alliant élégance, confort et qualité de vie. Appartements généreux pour familles, professionnels et investisseurs exigeants. À l'image de <strong>Tanis</strong>, ancienne capitale de l'Égypte antique connue pour son urbanisme raffiné et ses constructions monumentales en pierre, <strong><em>Thanys</em> </strong>rend hommage à une architecture puissante, sobre et élégante.
            Ce lien symbolique se retrouve dans la conception du bâtiment : lignes épurées, matériaux nobles, structure imposante et harmonie des volumes.
            Comme <strong>Tanis</strong>, <strong><em>Thanys</em> </strong> est pensé pour traverser le temps, en alliant héritage architectural et exigence contemporaine.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-gradient-to-br from-gray-50 to-white p-5 rounded-xl border border-gray-100 shadow-sm">
              <h4 className="font-medium text-gray-900 mb-4 text-base flex items-center gap-2">
                <Building className="w-5 h-5 text-blue-600" />
                Caractéristiques
              </h4>
              <ul className="space-y-3">
                {[
                  "10 étages d'exception",
                  "Appartements F2, F3, F4",
                  "Finitions et matériaux premium",
                  "Terrasse commune aménagée avec vue panoramique"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-gray-900">Commodités Exclusives</h3>
              <div className="space-y-4">
                {commodities.map((item, idx) => (
                  <div key={idx} className="border border-gray-100 rounded-lg overflow-hidden transition-all hover:border-gray-200">
                    <div 
                      className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50" 
                      onClick={() => setExpanded(expanded === idx ? null : idx)}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-md flex items-center justify-center ${iconColors[idx % iconColors.length]}`}>
                          <item.icon className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-medium text-gray-800">{item.title}</span>
                      </div>
                      {expanded === idx ? 
                        <ChevronUp className="w-4 h-4 text-gray-500" /> : 
                        <ChevronDown className="w-4 h-4 text-gray-500" />
                      }
                    </div>
                    {expanded === idx && (
                      <div className="bg-gray-50 border-t border-gray-100 px-4 py-3 animate-fadeIn">
                        <p className="text-xs text-gray-600 italic">{item.description}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              className="flex-1 bg-gray-900 text-white py-3 shadow hover:bg-gray-800"
            >
              <Link to="/investir" onClick={() => window.scrollTo(0, 0)}>
                Pré-réserver maintenant <ArrowRight className="ml-2 w-4 h-4 inline" />
              </Link>
            </Button>
            <Button
              variant="outline"
              className="flex-1 border-gray-300 text-gray-800 py-3 hover:bg-gray-50"
            >
              <Download className="mr-2 w-4 h-4 inline" /> Télécharger la plaquette PDF
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}