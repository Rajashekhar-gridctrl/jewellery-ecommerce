import Search from "./Search";
import UserIcons from "./UserIcons";
import MobileMenu from "./MobileMenu"; // assuming it's just the hamburger + slide-out

function MainSearch() {
  return (
    <div className="mx-4 md:mx-0 md:px-16 mt-2 border-b border-[#eee] pt-2 pb-6">
      <div className="flex flex-col md:flex-row w-full justify-between items-center gap-4 md:gap-[10%]">

        {/* Logo + Mobile Menu + Icons in mobile */}
        <div className="flex w-full md:basis-[30%] items-center justify-between">
          {/* Left: Hamburger + Ramya Text */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="md:hidden">
              <MobileMenu />
            </div>
            <div className="font-logo text-xl text-[#996e21] text-center md:text-left w-full">
              Ramya Nagendra
            </div>
          </div>

          {/* Right: Icons in mobile */}
          <div className="flex md:hidden gap-3 ml-4">
            <UserIcons />
          </div>
        </div>

        {/* Search Bar */}
        <div className="w-full md:basis-[50%] mt-4 md:mt-0">
          <Search />
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex basis-[20%] justify-end gap-[10%]">
          <UserIcons />
        </div>
      </div>
    </div>
  );
}

export default MainSearch;
