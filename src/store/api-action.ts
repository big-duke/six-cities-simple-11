/* eslint-disable no-console */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, RootState } from 'store';
import { dropToken, saveToken } from 'token';

import { AuthStatus, Offer, User } from 'types';
import { setAuth, setUser } from './actions';

export const fetchOffers = createAsyncThunk<
  Offer[],
  undefined,
  {
    extra: AxiosInstance;
  }
>('offers/fetchOffers', async (_arg, { extra: api }) => {
  const { data } = await api.get<Offer[]>('/hotels');
  return data;
});

export const checkAuth = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AxiosInstance;
  }
>('user/checkAuth', async (_arg, { dispatch, extra: api }) => {
  try {
    const { data: user } = await api.get<User>('/login');
    dispatch(setAuth(AuthStatus.Auth));
    dispatch(setUser(user));
  } catch (e) {
    dispatch(setAuth(AuthStatus.Unknown));
  }
});

export const login = createAsyncThunk<
  void,
  { email: string; password: string },
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AxiosInstance;
  }
>('user/login', async (args, { dispatch, extra: api }) => {
  const { email, password } = args;
  try {
    const { data: user } = await api.post<User>('/login', { email, password });
    saveToken(user.token);
    dispatch(setAuth(AuthStatus.Auth));
    dispatch(setUser(user));
  } catch {
    dispatch(setAuth(AuthStatus.Unknown));
  }
});

export const logout = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    extra: AxiosInstance;
  }
>('user/logout', async (_args, { dispatch, extra: api }) => {
  try {
    await api.delete('/logout');
    dropToken();
    dispatch(setAuth(AuthStatus.NoAuth));
  } catch {
    dispatch(setAuth(AuthStatus.Unknown));
  }
});
