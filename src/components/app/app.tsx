import { MainPage } from '../../pages';

type AppSettings = {
  offersCount: number;
}

const appSettings: AppSettings = {
  offersCount: 100
};

function App(): JSX.Element {
  return <MainPage offersCount={appSettings.offersCount} />;

}

export default App;
