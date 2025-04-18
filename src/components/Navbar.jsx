import MainSearch from "./MainSearch";
import ShippingBanner from "./ShippingBanner";
import MainMenu from "./MainMenu";
import MobileNavigation from "./MobileNavigation";
import DesktopNavigation from "./DesktopNavigation";

function Navbar() {
  return (
    <header className="border-b border-[#eee]">
      <nav>
        <ShippingBanner />
        <div className="md:hidden">
          <MobileNavigation />
        </div>
        <div className="hidden md:block">
          <DesktopNavigation />
        </div>
      </nav>
    </header>
  )
}

export default Navbar;