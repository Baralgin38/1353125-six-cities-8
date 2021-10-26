import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

function NotFoundScreen (): JSX.Element {
  return (
    <body>
      <div className="header__wrapper">
        <div className="header__left">
          <Link className="header__logo-link header__logo-link--active" to={AppRoute.Main}>
            <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
          </Link>
        </div>
      </div>
      <h1 style={{
        textAlign: 'center',
        fontWeight: 'bold',
      }}
      >
        404 Not Found
      </h1>
      <h2 style={{
        textAlign: 'center',
      }}
      >
        <Link to={AppRoute.Main}>please click here to go to the main page</Link>
      </h2>
    </body>
  );
}

export default NotFoundScreen;
