import { createReducer } from '@reduxjs/toolkit';

import { changeCity, fetchOffers, loadOffers, sortOffers } from './actions';
import { OfferState } from './type';

const initialState: OfferState = {
  city: 'Paris',
  offers: [],
  pending: false,
  sortOrder: 'Popular',
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(fetchOffers.fulfilled, (state, action) => {
      state.offers = action.payload;
      state.pending = false;
    })
    .addCase(fetchOffers.pending, (state, action) => {
      state.pending = true;
    })
    .addCase(sortOffers, (state, action) => {
      state.sortOrder = action.payload;
    });
});

export { reducer };
