import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, RootState } from 'store';
import { dropToken, saveToken } from 'token';

import { AuthorizationStatus, Offer, User } from 'types';
import { auth, setUser } from './actions';

export const fetchOffers = createAsyncThunk<
  Offer[],
  undefined,
  {
    extra: AxiosInstance;
  }
>('fetchOffers', async (_arg, { extra: api }) => {
  const response = await api.get('/hotels');
  const data = response.data as Offer[];

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
    await api.get('/login');
    dispatch(auth(AuthorizationStatus.Auth));
  } catch {
    dispatch(auth(AuthorizationStatus.NoAuth));
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
    const res = await api.post('/login', { email, password });
    const user:User = res.data as User;
    saveToken(user.token);
    dispatch(auth(AuthorizationStatus.Auth));
    dispatch(setUser(user));
  } catch {
    dispatch(auth(AuthorizationStatus.NoAuth));
  }
});

export const logout = createAsyncThunk<
  void, undefined ,
  {
    dispatch: AppDispatch;
    extra: AxiosInstance;
  }
>('user/login', async (_args, { dispatch, extra: api }) => {

  try {
    await api.delete('/login');
    dropToken();
    dispatch(auth(AuthorizationStatus.NoAuth));
  } catch {
    dispatch(auth(AuthorizationStatus.NoAuth));
  }
});
