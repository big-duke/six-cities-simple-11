import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus, Offer, SortOrder, User } from 'types';


export const changeCity = createAction<string>('changeCity');

export const auth = createAction<AuthorizationStatus>('auth');

export const sortOffers = createAction<SortOrder>('sort');
export const setOffers = createAction<Offer[]>('loadOffers');
export const setUser = createAction<User>('setUser');
