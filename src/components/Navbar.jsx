import MainSearch from "./MainSearch";
import ShippingBanner from "./ShippingBanner";
import MainMenu from "./MainMenu";

function Navbar() {
  return (
    <>
      <nav>
        <ShippingBanner />
        <MainSearch />
        <MainMenu />
      </nav>
    </>
  )
}

export default Navbar;