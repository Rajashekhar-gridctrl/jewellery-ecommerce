import ShippingBanner from "./ShippingBanner";
import MobileNavigation from "./MobileNavigation";
import DesktopNavigation from "./DesktopNavigation";
import DesktopMenu from "./DesktopMenu";

function Navbar() {
  return (
    <>
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
      <header className="sticky top-0 z-50 bg-white hidden md:flex justify-center">
        <DesktopMenu />
      </header>
    </>
  )
}

export default Navbar;