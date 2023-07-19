import { Outlet } from "react-router-dom";
import Header from "./Header";
// import Welcome from "../components/Welcome";// <- has updating user function

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default Layout;
