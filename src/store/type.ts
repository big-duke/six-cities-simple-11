import { Offer, SortOrder } from 'types';

export type OfferState = {
  city: string;
  offers: Offer[];
  pending: boolean;
  sortOrder: SortOrder;
};
