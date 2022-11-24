import { createAction } from '@reduxjs/toolkit';
import { AuthStatus, SortOrder, User } from 'types';

export const sortOffers = createAction<SortOrder>('offers/sort');

export const changeCity = createAction<string>('offers/changeCity');

export const setAuth = createAction<AuthStatus>('user/setAuth');
export const setUser = createAction<User>('auth/setUser');
