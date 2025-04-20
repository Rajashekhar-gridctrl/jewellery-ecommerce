import { motion } from "framer-motion";
import { menuLinks } from "../../data/MenuLinks";

function DesktopMenu() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="flex items-center justify-center gap-10 px-8 py-3"
    >
      <ul className="flex gap-8 text-gray-700 text-md font-medium">
        {menuLinks.map((item, index) => (
          <li key={index}>
            <a className="hover:text-gray-500" href={item.href}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default DesktopMenu;