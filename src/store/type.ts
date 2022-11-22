import { AuthorizationStatus, Offer, SortOrder, User } from 'types';

export type OfferState = {
  city: string;
  offers: Offer[];
  pending: boolean;
  sortOrder: SortOrder;
  authorizationStatus: AuthorizationStatus;
  user:User;

};
