/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/unbound-method */
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { Offer } from 'types';

enum AppActions {
  CHANGE_CITY = 'CHANGE_CITY',
  LOAD_OFFERS = 'LOAD_OFFERS',
  FETCH_OFFERS = 'FETCH_OFFERS',
}
export const changeCity = createAction<string>(AppActions.CHANGE_CITY);

export const loadOffers = createAction<Offer[]>(AppActions.LOAD_OFFERS);

export const fetchOffers = createAsyncThunk<
  Offer[],
  undefined,
  {
    extra: AxiosInstance;
  }
>(AppActions.FETCH_OFFERS, async (_arg, { extra: api }) => {
  const response = await api.get('/hotels');
  const data = response.data as Offer[];

  return data;
});
