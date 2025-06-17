
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';

const Investir = () => {
  const [formData, setFormData] = useState({
    nom: '',
    telephone: '',
    email: '',
    pays: '',
    typeBien: '',
    etage: '',
    financement: '',
    commentaires: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation simple
    if (!formData.nom || !formData.telephone || !formData.email || !formData.pays || !formData.typeBien) {
      toast.error('Veuillez remplir tous les champs obligatoires');
      return;
    }

    console.log('Formulaire soumis:', formData);
    toast.success('Votre pré-réservation a été envoyée avec succès !');
    
    // Reset form
    setFormData({
      nom: '',
      telephone: '',
      email: '',
      pays: '',
      typeBien: '',
      etage: '',
      financement: '',
      commentaires: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const vefaSteps = [
    {
      title: "Pré-réservation",
      description: "Manifestez votre intérêt sans engagement ferme"
    },
    {
      title: "Réservation (5%)",
      description: "Confirmation avec acompte de 5% du prix de vente"
    },
    {
      title: "Signature devant notaire ",
      description: "Signature du contrat de vente en état futur d'achèvement"
    },
    {
      title: "Versements échelonnés",
      description: "Paiements selon l'avancement des travaux"
    },
    {
      title: "Livraison",
      description: "Remise des clés et finalisation (solde restant)"
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-kerma-brown mb-6">
            Investir avec KĒRMA Developments
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Saisissez nos opportunités d'investissement  et bénéficiez d'un accompagnement personnalisé.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Formulaire de Pré-Réservation */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-kerma-brown">
                Formulaire de Pré-Réservation
              </CardTitle>
              <p className="text-sm text-gray-600">
                (Sans Engagement) - Manifestez votre intérêt pour l'un de nos biens. Cette pré-réservation n'est pas un engagement ferme. Un acompte de 5% vous sera demandé ultérieurement pour confirmer la réservation.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Informations personnelles */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-kerma-brown border-b pb-2">
                    1. Vos informations personnelles
                  </h3>
                  
                  <div>
                    <Label htmlFor="nom">Nom complet *</Label>
                    <Input
                      id="nom"
                      value={formData.nom}
                      onChange={(e) => handleInputChange('nom', e.target.value)}
                      placeholder="Votre nom complet"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="telephone">Téléphone *</Label>
                    <Input
                      id="telephone"
                      type="tel"
                      value={formData.telephone}
                      onChange={(e) => handleInputChange('telephone', e.target.value)}
                      placeholder="+221 XX XXX XX XX"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Adresse e-mail *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="votre.email@exemple.com"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="pays">Pays de résidence *</Label>
                    <Select value={formData.pays} onValueChange={(value) => handleInputChange('pays', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez votre pays" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="senegal">Sénégal</SelectItem>
                        <SelectItem value="france">France</SelectItem>
                        <SelectItem value="cote-ivoire">Côte d'Ivoire</SelectItem>
                        <SelectItem value="mali">Mali</SelectItem>
                        <SelectItem value="burkina-faso">Burkina Faso</SelectItem>
                        <SelectItem value="autre">Autre</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Bien souhaité */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-kerma-brown border-b pb-2">
                    2. Bien souhaité
                  </h3>
                  
                  <div>
                    <Label>Type de bien *</Label>
                    <div className="flex gap-4 mt-2">
                      {['F2', 'F3', 'F4'].map((type) => (
                        <div key={type} className="flex items-center space-x-2">
                          <Checkbox
                            id={type}
                            checked={formData.typeBien === type}
                            onCheckedChange={() => handleInputChange('typeBien', type)}
                          />
                          <Label htmlFor={type}>{type}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                     <div>
              <Label htmlFor="etage">Étage souhaité (si disponible)</Label>
              <Select value={formData.etage} onValueChange={(value) => handleInputChange('etage', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez un étage" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">Rez-de-chaussée</SelectItem>
                  <SelectItem value="1">1er étage</SelectItem>
                  <SelectItem value="2">2ème étage</SelectItem>
                  <SelectItem value="3">3ème étage</SelectItem>
                  <SelectItem value="4">4ème étage</SelectItem>
                  <SelectItem value="5">5ème étage</SelectItem>
                  <SelectItem value="6">6ème étage</SelectItem>
                  <SelectItem value="7">7ème étage</SelectItem>
                  <SelectItem value="8">8ème étage</SelectItem>
                  <SelectItem value="9">9ème étage</SelectItem>
                  <SelectItem value="10">10ème étage</SelectItem>
                </SelectContent>
              </Select>
            </div>
                </div>

                {/* Financement */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-kerma-brown border-b pb-2">
                    3. Modalité de financement envisagée
                  </h3>
                  
                  <div className="flex gap-4">
                    {['Fonds propres', 'Crédit bancaire'].map((option) => (
                      <div key={option} className="flex items-center space-x-2">
                        <Checkbox
                          id={option}
                          checked={formData.financement === option}
                          onCheckedChange={() => handleInputChange('financement', option)}
                        />
                        <Label htmlFor={option}>{option}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Commentaires */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-kerma-brown border-b pb-2">
                    4. Commentaires ou précisions (facultatif)
                  </h3>
                  
                  <Textarea
                    value={formData.commentaires}
                    onChange={(e) => handleInputChange('commentaires', e.target.value)}
                    placeholder="Vos questions ou précisions..."
                    rows={4}
                  />
                </div>

                {/* Validation */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-kerma-brown mb-2">Validation</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    En soumettant ce formulaire, vous exprimez votre intérêt pour un bien immobilier. 
                    Cette démarche ne vous engage pas de manière définitive. Notre équipe vous contactera 
                    dans les plus brefs délais pour vous informer des suites et des modalités liées à la 
                    réservation.
                  </p>
                  
                  <Button type="submit" className="w-full bg-kerma-brown hover:bg-kerma-brown/90">
                    Soumettre ma demande de pré-réservation
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Processus VEFA */}
          <div className="space-y-8">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-kerma-brown">
                  Processus VEFA
                </CardTitle>
                <p className="text-sm text-gray-600">
                  Vente en État Futur d'Achèvement - Sécurité et transparence garanties
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {vefaSteps.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-kerma-blue rounded-full flex items-center justify-center text-white text-sm font-semibold">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold text-kerma-brown mb-1">
                          {step.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

           {/* Échéancier VEFA */}
<Card className="shadow-xl">
  <CardHeader>
    <CardTitle className="text-xl text-kerma-brown">
      Échéancier VEFA
    </CardTitle>
  </CardHeader>
  <CardContent>
    <ul className="space-y-3 text-sm">
      <li className="flex justify-between border-b pb-1">
        <span>Signature du contrat de réservation</span>
        <span className="text-kerma-blue font-semibold">5%</span>
      </li>
      <li className="flex justify-between border-b pb-1">
        <span>Démarrage des travaux (ouverture de chantier)</span>
        <span className="text-kerma-blue font-semibold">15%</span>
      </li>
      <li className="flex justify-between border-b pb-1">
        <span>Achèvement de l’étage 1</span>
        <span className="text-kerma-blue font-semibold">10%</span>
      </li>
      <li className="flex justify-between border-b pb-1">
        <span>Achèvement de l’étage 4</span>
        <span className="text-kerma-blue font-semibold">10%</span>
      </li>
      <li className="flex justify-between border-b pb-1">
        <span>Achèvement de l’étage 7</span>
        <span className="text-kerma-blue font-semibold">10%</span>
      </li>
      <li className="flex justify-between border-b pb-1">
        <span>Mise hors d’eau (toiture posée)</span>
        <span className="text-kerma-blue font-semibold">15%</span>
      </li>
      <li className="flex justify-between border-b pb-1">
        <span>Revêtements muraux et de sol (carrelage, peinture, etc.)</span>
        <span className="text-kerma-blue font-semibold">10%</span>
      </li>
      <li className="flex justify-between border-b pb-1">
        <span>Pose appareillage électrique + équipements sanitaires</span>
        <span className="text-kerma-blue font-semibold">8%</span>
      </li>
      <li className="flex justify-between border-b pb-1">
        <span>Mise hors d’air (menuiseries extérieures posées)</span>
        <span className="text-kerma-blue font-semibold">8%</span>
      </li>
      <li className="flex justify-between border-b pb-1">
        <span>Pré-réception (avant remise officielle)</span>
        <span className="text-kerma-blue font-semibold">5%</span>
      </li>
      <li className="flex justify-between">
        <span>Remise des clés (livraison)</span>
        <span className="text-kerma-blue font-semibold">4%</span>
      </li>
    </ul>
  </CardContent>
</Card>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Investir;
