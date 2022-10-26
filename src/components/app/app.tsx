import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage, MainPage, NotFoundPage, RoomPage } from '../../pages';
import { AppRoutes } from '../../router/urlRouter';

type AppSettings = {
  offersCount: number;
}

const appSettings: AppSettings = {
  offersCount: 100
};

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.MAIN} element={<MainPage offersCount={appSettings.offersCount} />} />
        <Route path={AppRoutes.LOGIN} element={<LoginPage />} />
        <Route path={AppRoutes.ROOM} element={<RoomPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
