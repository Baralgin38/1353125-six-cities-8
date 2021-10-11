import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {AppRoute} from '../../const';
import MainScreen from '../main-screen/main-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import RoomScreen from '../room-screen/room-screen';
// import RoomNotLoggedScreen from '../room-not-logged-screen/room-not-logged-screen';
import SignInScreen from '../sign-in-screen/sign-in-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';

type AppProps = {
  placeCount: number,
}

function App({placeCount}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <MainScreen placeCount = {placeCount}/>
        </Route>
        <Route exact path={AppRoute.Favorites}>
          <FavoritesScreen/>
        </Route>
        <Route exact path={AppRoute.Room}>
          <RoomScreen/>
        </Route>
        <Route exact path={AppRoute.SignIn}>
          <SignInScreen/>
        </Route>
        <Route>
          <NotFoundScreen/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
