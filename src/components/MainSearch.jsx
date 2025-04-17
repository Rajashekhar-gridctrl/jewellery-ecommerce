import Search from "./Search";
import UserIcons from "./UserIcons";

function MainSearch() {
  return (
    <div className="mx-4 md:mx-0 md:px-16 mt-2 border-b border-[#eee] pt-2 pb-6">
      <div className="flex flex-col md:flex-row w-full justify-between items-center gap-4 md:gap-[10%]">
        {/* Logo and Icons (together on mobile) */}
        <div className="flex w-full md:basis-[30%] justify-between items-center">
          <div className="font-logo text-xl text-[#996e21] text-center md:text-left w-full">
            Ramya Nagendra
          </div>
          <div className="flex md:hidden ml-4 gap-3">
            <UserIcons />
          </div>
        </div>

        {/* Search bar */}
        <div className="w-full md:basis-[50%] mt-3 md:mt-0">
          <Search />
        </div>

        {/* Icons on desktop */}
        <div className="hidden md:flex basis-[20%] justify-end gap-[10%]">
          <UserIcons />
        </div>
      </div>
    </div>
  );
}

export default MainSearch;
