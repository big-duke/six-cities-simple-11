/* eslint-disable no-console */
import { useAppDispatch, useAppSelector } from 'hooks/redux';

import { Link } from 'react-router-dom';
import { AppRoutes } from 'router';
import { logout } from 'store/api-action';
import { AuthorizationStatus } from 'types';

function Header(): JSX.Element {
  const {user, authorizationStatus:auth} = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const handleLogout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    dispatch(logout());
  };
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {
          auth === AuthorizationStatus.Auth ?
            <>
              <li className="header__nav-item user">
                <div className="header__nav-profile">
                  <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                  <span className="header__user-name user__name">{user.email}</span>
                </div>
              </li>
              <li className="header__nav-item">
                <a className="header__nav-link" href="/" onClick={handleLogout}>
                  <span className="header__signout">Sign out</span>
                </a>
              </li>
            </>
            :
            <li className="header__nav-item">
              <Link className='header__nav-link' to={AppRoutes.LOGIN}>Login</Link>
            </li>
        }
      </ul>
    </nav>
  );
}
export default Header;
