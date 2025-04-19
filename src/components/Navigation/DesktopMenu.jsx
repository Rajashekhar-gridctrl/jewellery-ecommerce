import { menuLinks } from "../../data/MenuLinks"

function DesktopMenu() {
  return (
    <div className="hidden md:flex items-center gap-10 mx-auto justify-center mt-4 pb-4 sticky top-0 z-50 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]">
      <ul className="flex gap-8 text-gray-700">
        {
          menuLinks.map((item, index) => (
              <li key={index}>
              <a className="hover:text-gray-500" href={item.href}>
                {item.name}
              </a>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default DesktopMenu;