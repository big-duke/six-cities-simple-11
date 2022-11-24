import { createReducer } from '@reduxjs/toolkit';
import { AuthStatus, User } from 'types';

import { setAuth, changeCity, setUser, sortOffers } from './actions';
import { fetchOffers } from './api-action';
import { OfferState } from './type';

const initialState: OfferState = {
  city: 'Paris',
  offers: [],
  pending: false,
  sortOrder: 'Popular',
  authorizationStatus: AuthStatus.Unknown,
  user: {} as User,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fetchOffers.fulfilled, (state, action) => {
      state.offers = action.payload;
      state.pending = false;
    })
    .addCase(fetchOffers.pending, (state) => {
      state.pending = true;
    })
    .addCase(sortOffers, (state, action) => {
      state.sortOrder = action.payload;
    })
    .addCase(setAuth, (state,action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUser, (state,action) => {
      state.user = action.payload;
    });
});

export { reducer };
