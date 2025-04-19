import Search from "./Search";
import UserIcons from "./UserIcons";
import DesktopMenu from "./DesktopMenu";
import Logo from "../Logo";

function DesktopNavigation() {
  return (
    <>
      <div className="mx-4 md:mx-0 md:px-16 mt-2 border-b border-[#eee] pt-2 pb-6">
        <div className="flex flex-col md:flex-row w-full justify-between items-center gap-4 md:gap-[10%]">
          <div className="flex w-full md:basis-[30%] items-center justify-between">
            <div className="flex items-center gap-3 w-full md:w-auto">
              <Logo />
            </div>
          </div>
          <div className="w-full md:basis-[50%] mt-4 md:mt-0">
            <Search />
          </div>
          <div className="hidden md:flex basis-[20%] justify-end gap-[10%]">
            <UserIcons />
          </div>
        </div>
      </div>
    </>
  );
}

export default DesktopNavigation;