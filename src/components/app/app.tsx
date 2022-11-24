/* eslint-disable no-console */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage, LoginPage, RoomPage, NotFoundPage } from 'pages';
import { AppRoutes } from 'router';
import { HelmetProvider } from 'react-helmet-async';
import { useAppDispatch } from 'hooks/redux';
import { checkAuth } from 'store/api-action';
import { useAuth } from 'hooks/useAuth';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  dispatch(checkAuth());
  const auth = useAuth();
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoutes.MAIN} element={<MainPage />} />
          <Route path={AppRoutes.LOGIN} element={auth === 'AUTH' ? <MainPage /> : <LoginPage />} />
          <Route path={AppRoutes.ROOM} element={<RoomPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
