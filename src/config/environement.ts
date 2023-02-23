export enum SpecialCase{startWith= 'startWith', exact= 'exact', approx='approx'}
export type fieldQuery = {field: string, value: string, type?: SpecialCase, period: boolean};
export type RequiredFields = string[];
export type Query = {fields: fieldQuery[], requiredFields: RequiredFields, start?: number};

export const URL = 'https://api.insee.fr/entreprises/sirene/V3/siret';
export const Auth = 'Bearer 1ebfd7dc-cd14-3ee1-8d92-cbba18cbbf7d';