import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage, LoginPage, RoomPage, NotFoundPage } from 'pages';
import useApp from './useApp';
import { AppRoutes } from 'router';



function App(): JSX.Element {
  const {offersCount} = useApp();
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.MAIN} element={<MainPage offersCount={offersCount} />} />
        <Route path={AppRoutes.LOGIN} element={<LoginPage />} />
        <Route path={AppRoutes.ROOM} element={<RoomPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
