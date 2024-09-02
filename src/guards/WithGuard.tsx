import { useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const UnAuthGuard =
  (
    Component: React.ComponentType<{ permission: { [key: string]: boolean } }>
  ) =>
  ({ ...props }) => {
    const token = true;
    const { pathname } = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
      if (token && pathname === "/") navigate("/");
    }, [pathname]);

    const permission: { [key: string]: boolean } = {
      canWrite: true,
      canRead: true,
      canDelete: true,
    };
    return token ? (
      <Component {...props} permission={permission} />
    ) : (
      <Navigate to="/login" />
    );
  };

export default UnAuthGuard;
