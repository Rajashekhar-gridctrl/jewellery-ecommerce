import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

function MainMenu() {
  return (
    <header className="border-b border-[#eee]">
      <nav className="flex items-center justify-between w-[92%] mx-auto py-4 relative">
        <MobileMenu />
        <DesktopMenu />
      </nav>
    </header>
  );
};

export default MainMenu;