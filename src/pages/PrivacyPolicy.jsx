import { useState } from 'react';
import { Helmet } from 'react-helmet';
import AnimatedSection from '@/components/AnimatedSection';

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState('collecte');

  return (
    <div className="min-h-screen bg-white py-16">
      <Helmet>
        <title>Politique de Confidentialité | Kerma</title>
        <meta name="description" content="Découvrez comment nous protégeons vos données personnelles" />
      </Helmet>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeIn" className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-kerma-brown mb-4">
            Politique de Confidentialité
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Dernière mise à jour : 20 juin 2025
          </p>
        </AnimatedSection>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4">
            <div className="bg-gray-50 p-6 rounded-xl sticky top-24">
              <h2 className="text-lg font-semibold text-kerma-brown mb-4">Navigation</h2>
              <ul className="space-y-3">
                {['collecte', 'utilisation', 'protection', 'droits', 'cookies'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => setActiveSection(item)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        activeSection === item
                          ? 'bg-kerma-turquoise/10 text-kerma-brown font-medium'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      {item === 'collecte' && 'Collecte des données'}
                      {item === 'utilisation' && 'Utilisation des informations'}
                      {item === 'protection' && 'Protection des données'}
                      {item === 'droits' && 'Vos droits'}
                      {item === 'cookies' && 'Cookies'}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:w-3/4">
            <AnimatedSection animation="slideUp" className="prose prose-lg max-w-none">
              {/* Section: Collecte des données */}
              {activeSection === 'collecte' && (
                <div>
                  <h2 className="text-2xl font-bold text-kerma-brown mb-6">Collecte des données</h2>
                  <p>
                    Nous collectons différentes catégories d'informations lorsque vous utilisez nos services :
                  </p>
                  <ul className="space-y-2">
                    <li><strong>Informations personnelles</strong> : Nom, prénom, adresse email, numéro de téléphone</li>
                    <li><strong>Informations de projet</strong> : Détails de votre projet immobilier, préférences</li>
                    <li><strong>Données techniques</strong> : Adresse IP, type de navigateur, pages visitées</li>
                    <li><strong>Communications</strong> : Historique de nos échanges par email ou téléphone</li>
                  </ul>
                  <p className="mt-4">
                    Ces données sont collectées via nos formulaires de contact, lors de rendez-vous physiques,
                    ou automatiquement via notre site web.
                  </p>
                </div>
              )}

              {/* Section: Utilisation des informations */}
              {activeSection === 'utilisation' && (
                <div>
                  <h2 className="text-2xl font-bold text-kerma-brown mb-6">Utilisation des informations</h2>
                  <p>
                    Vos données personnelles sont utilisées dans les buts suivants :
                  </p>
                  <ul className="space-y-2">
                    <li>Répondre à vos demandes d'information et vous accompagner dans votre projet</li>
                    <li>Fournir nos services immobiliers et de construction</li>
                    <li>Améliorer la qualité de nos services et notre site web</li>
                    <li>Vous informer des actualités et offres concernant nos services (avec votre consentement)</li>
                    <li>Remplir nos obligations légales et réglementaires</li>
                  </ul>
                  <p className="mt-4">
                    Nous ne vendons ni ne louons vos données personnelles à des tiers à des fins commerciales.
                  </p>
                </div>
              )}

              {/* Section: Protection des données */}
              {activeSection === 'protection' && (
                <div>
                  <h2 className="text-2xl font-bold text-kerma-brown mb-6">Protection des données</h2>
                  <p>
                    Nous mettons en œuvre des mesures techniques et organisationnelles strictes pour protéger vos données :
                  </p>
                  <ul className="space-y-2">
                    <li>Chiffrement des données sensibles</li>
                    <li>Systèmes de sécurité physique et électronique</li>
                    <li>Accès restreint aux données personnelles</li>
                    <li>Audits réguliers de sécurité</li>
                    <li>Formation de notre personnel à la protection des données</li>
                  </ul>
                  <p className="mt-4">
                    Vos données sont conservées uniquement pendant la durée nécessaire aux finalités pour lesquelles elles sont traitées, 
                    conformément aux exigences légales.
                  </p>
                </div>
              )}

              {/* Section: Vos droits */}
              {activeSection === 'droits' && (
                <div>
                  <h2 className="text-2xl font-bold text-kerma-brown mb-6">Vos droits</h2>
                  <p>
                    Conformément au RGPD, vous disposez des droits suivants concernant vos données personnelles :
                  </p>
                  <ul className="space-y-2">
                    <li><strong>Droit d'accès</strong> : Obtenir une copie de vos données</li>
                    <li><strong>Droit de rectification</strong> : Corriger des données inexactes</li>
                    <li><strong>Droit à l'effacement</strong> : Supprimer vos données ("droit à l'oubli")</li>
                    <li><strong>Droit à la portabilité</strong> : Recevoir vos données dans un format structuré</li>
                    <li><strong>Droit d'opposition</strong> : S'opposer à certains traitements</li>
                  </ul>
                  <p className="mt-4">
                    Pour exercer ces droits ou pour toute question sur notre politique de confidentialité, 
                    contactez notre Délégué à la Protection des Données :<br />
                    <a href="mailto:dpo@kerma.com" className="text-kerma-turquoise hover:underline">
                      dpo@kerma.com
                    </a>
                  </p>
                </div>
              )}

              {/* Section: Cookies */}
              {activeSection === 'cookies' && (
                <div>
                  <h2 className="text-2xl font-bold text-kerma-brown mb-6">Cookies</h2>
                  <p>
                    Notre site utilise des cookies pour améliorer votre expérience utilisateur :
                  </p>
                  <ul className="space-y-2">
                    <li><strong>Cookies essentiels</strong> : Nécessaires au fonctionnement du site</li>
                    <li><strong>Cookies analytiques</strong> : Nous aident à comprendre l'utilisation de notre site</li>
                    <li><strong>Cookies de préférences</strong> : Mémorisent vos choix</li>
                  </ul>
                  <p className="mt-4">
                    Vous pouvez gérer vos préférences cookies à tout moment via notre 
                    <a href="#" className="text-kerma-turquoise hover:underline mx-1">
                      centre de préférences
                    </a>
                    ou dans les paramètres de votre navigateur.
                  </p>
                </div>
              )}

              <div className="mt-12 pt-8 border-t border-gray-200">
                <p>
                  Cette politique peut être mise à jour périodiquement. Nous vous invitons à la consulter régulièrement.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;