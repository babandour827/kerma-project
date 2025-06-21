import { Link } from 'react-router-dom';
import AnimatedSection from '@/components/AnimatedSection';
import { Helmet } from 'react-helmet';

const MentionsLegales = () => {
  return (
    <div className="min-h-screen bg-white py-16">
      <Helmet>
        <title>Mentions Légales | KĒRMA Developments</title>
        <meta name="description" content="Informations légales concernant notre société" />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeIn" className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-kerma-brown mb-4">
            Mentions Légales
          </h1>
          <p className="text-lg text-gray-600">
            Informations légales en vigueur au 20 juin 2025
          </p>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="prose prose-lg max-w-none bg-white p-6 sm:p-8 rounded-xl shadow-sm">
          <div className="flex items-center mb-8">
            <img 
              src="/uploads/KERMA - Transp. png en couleur.png" 
              alt="KĒRMA Developments" 
              className="h-16 w-auto mr-4"
            />
            <div>
              <h2 className="text-2xl font-bold text-kerma-brown">KĒRMA Developments</h2>
              <p className="text-gray-600">Construction & Immobilier</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-kerma-brown mt-10">Éditeur du site</h2>
          <div className="space-y-2 text-gray-700">
            <p>Dakar, Sénégal</p>
            <p>Téléphone: <a href="tel:+221773103371" className="text-kerma-turquoise hover:underline">+221 773103371</a></p>
            <p>
              Email: 
              <a href="mailto:racinetoure@kermadevelopments.com" className="text-kerma-turquoise hover:underline ml-1">
                racinetoure@kermadevelopments.com
              </a>
            </p>
            <p>
              <a href="mailto:amadoubadiane@kermadevelopments.com" className="text-kerma-turquoise hover:underline">
                amadoubadiane@kermadevelopments.com
              </a>
            </p>
          </div>

          <h2 className="text-2xl font-bold text-kerma-brown mt-10">Hébergement</h2>
          <p>
            <strong>OVH SAS</strong><br />
            2 rue Kellermann - 59100 Roubaix - France<br />
            Téléphone : +33 9 72 10 10 07
          </p>

          <h2 className="text-2xl font-bold text-kerma-brown mt-10">Propriété intellectuelle</h2>
          <p>
            L'ensemble des éléments du site (textes, images, vidéos, logos, etc.) 
            sont la propriété exclusive de KERMA Developments ou de ses partenaires. 
            Toute reproduction, distribution, modification ou utilisation sans autorisation écrite préalable 
            est strictement interdite.
          </p>

          <h2 className="text-2xl font-bold text-kerma-brown mt-10">Responsabilité</h2>
          <p>
            Les informations présentes sur ce site sont fournies à titre indicatif. 
            KERMA Developments ne peut garantir l'exactitude, l'exhaustivité ou l'actualité des informations diffusées. 
            L'utilisateur reconnaît utiliser ces informations sous sa responsabilité exclusive.
          </p>

          <h2 className="text-2xl font-bold text-kerma-brown mt-10">Liens hypertextes</h2>
          <p>
            Les liens vers d'autres sites ne sauraient engager la responsabilité de KERMA Developments 
            quant à leur contenu. L'accès à ces sites se fait sous la responsabilité de l'utilisateur.
          </p>

          <h2 className="text-2xl font-bold text-kerma-brown mt-10">Réseaux sociaux</h2>
          <div className="flex space-x-4 mt-2">
            <a 
              href="#" 
              className="bg-gray-100 p-2 rounded-full text-kerma-brown hover:bg-kerma-turquoise/20 transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a 
              href="#" 
              className="bg-gray-100 p-2 rounded-full text-kerma-brown hover:bg-kerma-turquoise/20 transition-colors"
              aria-label="Instagram"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>

          <h2 className="text-2xl font-bold text-kerma-brown mt-10">Règlement des litiges</h2>
          <p>
            En cas de litige, le consommateur peut recourir à un médiateur de la consommation 
            ou à tout autre mode alternatif de règlement des litiges.
          </p>

          <h2 className="text-2xl font-bold text-kerma-brown mt-10">Réglementation</h2>
          <p>
            Ce site est soumis au droit sénégalais et aux réglementations en vigueur 
            dans l'Union Économique et Monétaire Ouest-Africaine (UEMOA).
          </p>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Conformément à la loi n° 2008-12 du 25 janvier 2008 sur la protection des données personnelles au Sénégal
            </p>
            <div className="mt-4">
              <Link 
                to="/politique-confidentialite" 
                className="inline-flex items-center text-kerma-turquoise hover:text-kerma-brown transition-colors"
              >
                Consulter notre Politique de Confidentialité
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default MentionsLegales;