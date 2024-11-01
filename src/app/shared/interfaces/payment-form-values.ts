export interface DonationFormGroupValues {
    amount: number | null;
    type: string | null;
  }
  
  export interface SummaryFormGroupValues {
    cgu: boolean;
  }
  
  export interface PersonalInfoFormGroupValues {
    isCompany: boolean;
    postalCode: string | null;
    sirenSiret: string | null;
    firstname: string | null;
    lastName: string | null;
    email: string | null;
    confirmEmail: string | null;
    address: string | null;
    city: string | null;
    country: string | null;
    raisonSociale: string | null;
    formeJuridique: string | null;
  }
  
  export interface PaymentFormValues {
    donationFormGroup: DonationFormGroupValues;
    summaryFormGroup: SummaryFormGroupValues;
    personalInfoFormGroup: PersonalInfoFormGroupValues;
  }
  