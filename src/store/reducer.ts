import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, User } from 'types';

import { auth, changeCity,setOffers, setUser, sortOffers } from './actions';
import { fetchOffers } from './api-action';
import { OfferState } from './type';

const initialState: OfferState = {
  city: 'Paris',
  offers: [],
  pending: false,
  sortOrder: 'Popular',
  authorizationStatus: AuthorizationStatus.Unknown,
  user: {} as User,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
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
    .addCase(auth, (state,action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUser, (state,action) => {
      state.user = action.payload;
    });
});

export { reducer };
