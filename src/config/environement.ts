export enum SpecialCase{startWith= 'startWith', exact= 'exact', approx='approx'}
export type fieldQuery = {field: string, value: string, type?: SpecialCase, period: boolean};
export type RequiredFields = string[];
export type Query = {fields: fieldQuery[], requiredFields: RequiredFields, start?: number};

export const URL = 'https://api.insee.fr/entreprises/sirene/V3/siret';
export const Auth = 'Bearer 1ebfd7dc-cd14-3ee1-8d92-cbba18cbbf7d';

export const environment = {
  firebase: {
    apiKey: "AIzaSyAMprQDFDGMd-nYR8Omt1jH8z_K9wnYK98",
    authDomain: "siret-finder.firebaseapp.com",
    projectId: "siret-finder",
    storageBucket: "siret-finder.appspot.com",
    messagingSenderId: "710359511471",
    appId: "1:710359511471:web:9f50f188943c6d864cff5a"
  },
  api: {
    url: 'https://api.insee.fr/entreprises/sirene/V3/siret',
    token: 'Bearer 1ebfd7dc-cd14-3ee1-8d92-cbba18cbbf7d',
  }
}