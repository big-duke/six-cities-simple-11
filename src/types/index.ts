export type { Offer, City, Location, Point } from './offer';
export type { Review } from './review';

export type Nullable<T> = T | null;

export const sortOrder = ['Popular','Price: low to high','Price: high to low','Top rated first'] as const;
export type SortOrder = typeof sortOrder[number];
