import {Link} from 'react-router-dom';

function NotFoundScreen (): JSX.Element {
  return (
    <body>
      <div className="header__wrapper">
        <div className="header__left">
          <Link className="header__logo-link header__logo-link--active" to='/'>
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
        please <Link to='/'>click</Link> here to go to the main page
      </h2>
    </body>
  );
}

export default NotFoundScreen;
