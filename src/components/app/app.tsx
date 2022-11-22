import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage, LoginPage, RoomPage, NotFoundPage } from 'pages';
import { AppRoutes } from 'router';
import { HelmetProvider } from 'react-helmet-async';
import { useAppDispatch } from 'hooks/redux';
import { checkAuth } from 'store/api-action';


function App(): JSX.Element {
  const dispatch = useAppDispatch();
  dispatch(checkAuth());
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoutes.MAIN} element={<MainPage />} />
          <Route path={AppRoutes.LOGIN} element={<LoginPage />} />
          <Route path={AppRoutes.ROOM} element={<RoomPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
