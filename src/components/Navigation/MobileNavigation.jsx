import Search from "./Search";
import UserIcons from "./UserIcons";
import MobileMenu from "./MobileMenu";
import Logo from "../Logo";

function MobileNavigation() {
  return (
    <div className="mx-4 md:mx-0 md:px-16 mt-2 pt-2 pb-6">
      <div className="flex flex-col md:flex-row w-full justify-between items-center gap-4 md:gap-[10%]">
        <div className="flex w-full md:basis-[30%] items-center justify-between">
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="md:hidden">
              <MobileMenu />
            </div>
            <Logo />
          </div>
          <div className="flex md:hidden gap-3 ml-4">
            <UserIcons />
          </div>
        </div>
        <div className="w-full md:basis-[50%] mt-4 md:mt-0">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default MobileNavigation;