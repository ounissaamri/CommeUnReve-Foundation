export class FormMapper {
  // Propriétés de la classe qui correspondent à l'objet de destination
  name: string;
  lastName: string;
  emailto: string;
  message: string;
  info: {
    phone: string;
    typePartenariat: string;
    email: string;
    city: string;
    country: string;
    address: string;
    postalCode: string;
    company: {
      formeJuridique: string;
      raisonSociale: string;
      sirenSiret: string;
    };
  };

  constructor(formData: any) {
    // Utilisation de l'objet reçu pour mapper et créer la structure finale
    this.name = formData.firstname || null;
    this.lastName = formData.lastName || null;
    this.emailto = formData.email || null;
    this.message = formData.comment || null;

    // Structure de l'info avec ses sous-objets
    this.info = {
      phone: formData.phone || null,
      typePartenariat: formData.typePartenariat?.label || null,
      email: formData.email || null,
      city: formData.city || null,
      country: formData.country || null,
      address: formData.address || null,
      postalCode: formData.postalCode || null,
      company: {
        formeJuridique: formData.formeJuridique || null,
        raisonSociale: formData.raisonSociale || null,
        sirenSiret: formData.sirenSiret || null,
      },
    };
  }
}
