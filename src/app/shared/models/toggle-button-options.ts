import { AmountPaymentContantes, TypePaymentContantes } from "./constantes/toggle-button-option";

export interface toggleButtonOption{
id?:number,
   libelle: TypePaymentContantes.LIBELLE | AmountPaymentContantes.LIBELLE,
   type ?: TypePaymentContantes.TYPE_PAYMENT
}