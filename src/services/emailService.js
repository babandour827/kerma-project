import emailjs from 'emailjs-com';

// Initialisation avec votre User ID (trouvable dans le dashboard EmailJS)
emailjs.init("VOTRE_USER_ID");

export const sendEmail = (templateId, templateParams) => {
  return emailjs.send(
    "VOTRE_SERVICE_ID",  // ID du service EmailJS
    templateId,          // ID du template
    templateParams       // Données du formulaire
  );
};

export const emailTemplates = {
  RESERVATION: "template_reservation",  // ID de votre template pour les réservations
  CONTACT: "template_contact"           // ID de votre template pour les contacts
};
