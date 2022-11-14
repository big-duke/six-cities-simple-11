import { createReducer } from '@reduxjs/toolkit';

import { changeCity, fetchOffers, loadOffers } from './actions';
import { OfferState } from './type';

const initialState: OfferState = {
  city: 'Paris',
  offers: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(fetchOffers.fulfilled, (state,action) => {
      state.offers = action.payload;
    });
});

export { reducer };
