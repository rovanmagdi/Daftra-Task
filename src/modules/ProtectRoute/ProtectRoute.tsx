import { Outlet } from "react-router-dom";
import AuthGuard from "../../guards/WithGuard";
import { Layout } from "../../layout/Layout";

export const UnAuthRoute = AuthGuard(() => (
  <Layout>
    <Outlet />
  </Layout>
));

export const AuthRoute = Outlet;
