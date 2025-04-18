import { menuLinks } from "../data/MenuLinks"

function DesktopMenu() {
  return (
    <div className="hidden md:flex items-center gap-10 mx-auto justify-center mt-4 pb-4">
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