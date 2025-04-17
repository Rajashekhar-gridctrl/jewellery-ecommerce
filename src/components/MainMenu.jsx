import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineMenu, HiOutlineX, HiChevronRight } from 'react-icons/hi';

export default function MainMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => (document.body.style.overflow = 'auto');
  }, [isOpen]);

  return (
    <header className="border-b border-[#eee]">
      <nav className="flex items-center justify-between w-[92%] mx-auto py-4 relative">
        {/* Mobile Hamburger Icon */}
        <div className="md:hidden flex items-center z-50">
          {!isOpen && (
            <button onClick={toggleMenu} className="text-gray-800 text-3xl focus:outline-none">
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <HiOutlineMenu size={30} />
              </motion.div>
            </button>
          )}
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 mx-auto">
          <ul className="flex gap-8 text-gray-700">
            <li><a className="hover:text-gray-500" href="#products">All Products</a></li>
            <li><a className="hover:text-gray-500" href="#solutions">Bestsellers</a></li>
            <li><a className="hover:text-gray-500" href="#solutions">Latest Collection</a></li>
            <li><a className="hover:text-gray-500" href="#solutions">Instagram Collection</a></li>
            <li><a className="hover:text-gray-500" href="#solutions">Necklaces</a></li>
            <li><a className="hover:text-gray-500" href="#resources">Earrings</a></li>
            <li><a className="hover:text-gray-500" href="#developers">Bangles</a></li>
            <li><a className="hover:text-gray-500" href="#pricing">Accessories</a></li>
            <li><a className="hover:text-gray-500" href="#pricing">Wedding Store</a></li>
          </ul>
        </div>

        {/* Mobile Fullscreen Menu */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/30 backdrop-blur-md z-30"
                onClick={toggleMenu}
              />

              {/* Slide-in Menu */}
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="fixed inset-y-0 left-0 w-4/5 max-w-sm bg-white z-40 flex flex-col p-6 shadow-xl overflow-y-auto"
              >
                {/* Cross button inside menu */}
                <div className="flex justify-end mb-10">
                  <motion.button
                    onClick={toggleMenu}
                    className="text-gray-800 text-3xl focus:outline-none"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.3 }}
                  >
                    <HiOutlineX size={30} />
                  </motion.button>
                </div>

                {/* Navigation Links */}
                <ul className="flex flex-col gap-8 text-gray-700 text-lg">
                  {[
                    { name: 'All Products', href: '#' },
                    { name: 'Bestsellers', href: '#' },
                    { name: 'Latest Collections', href: '#' },
                    { name: 'Instagram Collections', href: '#' },
                    { name: 'Necklaces', href: '#' },
                    { name: 'Earrings', href: '#' },
                    { name: 'Bangles', href: '#' },
                    { name: 'Accessories', href: '#' },
                    { name: 'Wedding Store', href: '#' },
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      whileTap={{ scale: 0.95 }} // 👈 this line adds tap animation
                    >
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
      </nav>
    </header>
  );
}
