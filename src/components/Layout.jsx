import { Outlet } from "react-router-dom";
import Navbar from "../components/Navigation/Navbar";

function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
