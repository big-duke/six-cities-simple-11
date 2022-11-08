import { createAction } from '@reduxjs/toolkit';
import { Offer } from 'types';

enum AppActions {
  CHANGE_CITY = 'CHANGE_CITY',
  LOAD_OFFERS = 'LOAD_OFFERS',
}
export const changeCity = createAction<{ city: string }>(
  AppActions.CHANGE_CITY
);

export const loadOffers = createAction<{offers: Offer[]}>(AppActions.LOAD_OFFERS);
