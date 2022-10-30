import { AuthorizationStatus } from "const"
import { Navigate } from "react-router-dom";
import { AppRoutes } from "router";

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element
}
function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const { authorizationStatus, children } = props;
  return (
    authorizationStatus === AuthorizationStatus.Auth ? children : <Navigate to={AppRoutes.LOGIN} />
  );
}

export default PrivateRoute;
