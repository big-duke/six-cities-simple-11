import { AuthStatus, Offer, SortOrder, User } from 'types';

export type OfferState = {
  city: string;
  offers: Offer[];
  pending: boolean;
  sortOrder: SortOrder;
  authorizationStatus: AuthStatus;
  user:User;

};
