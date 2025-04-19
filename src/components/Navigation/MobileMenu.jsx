import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineMenu, HiOutlineX, HiChevronRight } from 'react-icons/hi';
import { menuLinks } from "../../data/MenuLinks"
import MobileBannerCover from "../../assets/images/mobile-menu-banner-5.jpg";

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => (document.body.style.overflow = 'auto');
  }, [isOpen]);

  return (
    <div className="md:hidden z-50">
      {!isOpen && (
        <button onClick={toggleMenu} className="text-[#996e21] focus:outline-none mt-3">
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <HiOutlineMenu size={30} />
          </motion.div>
        </button>
      )}

      {/* Slide Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/30 backdrop-blur-md z-30"
              onClick={toggleMenu}
            />

            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed inset-y-0 left-0 w-4/5 max-w-sm bg-white z-40 flex flex-col p-6 shadow-xl overflow-y-auto"
            >
              <div className="flex justify-end mb-5 border-b border-[#eee] pb-2">
                <motion.button
                  onClick={toggleMenu}
                  className="text-[#996e21] text-2xl focus:outline-none"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.3 }}
                >
                  <HiOutlineX size={30} />
                </motion.button>
              </div>

              <div className="w-full mb-8">
                <img 
                  src={MobileBannerCover} 
                  alt="Mobile Banner" 
                  className="w-full object-cover block rounded-2xl"
                  style={{ height: "150px" }}
                />
              </div>

              <ul className="flex flex-col gap-6 text-gray-700 text-lg">
                {menuLinks.map((item, index) => (
                  <motion.li key={index} whileTap={{ scale: 0.95 }}>
                    <a
                      onClick={toggleMenu}
                      className="flex justify-between items-center hover:text-gray-500"
                      href={item.href}
                    >
                      {item.name}
                      <HiChevronRight size={20} className="text-gray-400" />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default MobileMenu;