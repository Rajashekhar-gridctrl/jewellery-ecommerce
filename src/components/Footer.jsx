import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiPlus, HiMinus } from 'react-icons/hi';

function Footer() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const sections = [
    {
      title: "Jewellery",
      key: "jewellery",
      links: [
        { name: "About us", href: "/about-us" },
        { name: "Earrings", href: "/" },
        { name: "Rings", href: "/" },
        { name: "Necklaces", href: "/" },
        { name: "Bracelets", href: "/" },
        { name: "Mangalsutra", href: "/" }
      ]
    },
    {
      title: "Collections",
      key: "collections",
      links: [
        { name: "Wedding", href: "/" },
        { name: "Workwear", href: "/" },
        { name: "Partywear", href: "/" }
      ]
    },
    {
      title: "Gifting",
      key: "gifting",
      links: [
        { name: "Birthday", href: "/" },
        { name: "Anniversary", href: "/" }
      ]
    },
    {
      title: "Information",
      key: "information",
      links: [
        { name: "Contact Us", href: "/contact-information" },
        { name: "FAQs", href: "/faqs" },
        { name: "Store Locator", href: "/contact-information" },
        { name: "Shipping Policy", href: "/shipping-policy" },
        { name: "Terms of Service", href: "/terms-of-service" },
        { name: "Track Order", href: "/track-order" },

      ]
    },
    {
      title: "My Account",
      key: "account",
      links: [
        { name: "Wishlist", href: "/account/wishlist" },
        { name: "Orders", href: "/order-details" },
        { name: "Sign In / Sign Up", href: "/login" }
      ]
    },
    {
      title: "Socials",
      key: "socials",
      links: [
        { name: "Instagram", href: "https://www.instagram.com/ramyanagendra_official/" },
        { name: "Youtube", href: "https://www.youtube.com/@RamyaNagendraimitations" }
      ]
    }
  ];

  return (
    <footer className="bg-[#F9F4F0] text-gray-700 pt-12 pb-6">
      <div className="w-[95%] mx-auto rounded-[30px] bg-[#CFB484] px-6 md:px-12 pt-12 pb-6">
        <div className="max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-5 gap-6 text-sm">
          {sections.map((section, index) => (
            <div
              key={section.key}
              // className={`w-full ${index !== sections.length - 1 ? 'border-b border-gray-300' : ''} md:border-0 md:pb-0`}
              className={`w-full border-b border-gray-300 md:border-0 md:pb-0`}
            >
              <div
                className="flex justify-between items-center md:block cursor-pointer"
                onClick={() => toggleSection(section.key)}
              >
                <h4 className="font-semibold text-2xl mb-4">
                  {section.title}
                </h4>

                <motion.div
                  className="md:hidden text-2xl"
                  initial={false}
                  animate={{ rotate: openSection === section.key ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {openSection === section.key ? <HiMinus /> : <HiPlus />}
                </motion.div>
              </div>

              <AnimatePresence initial={false}>
                {openSection === section.key && (
                  <motion.div
                    key="content"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { height: "auto", opacity: 1 },
                      collapsed: { height: 0, opacity: 0 }
                    }}
                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    className="overflow-hidden md:block"
                  >
                    <ul className="grid grid-cols-2 gap-x-1 gap-y-2 text-[18px] mb-6 md:block">
                      {section.links.map((link, idx) => (
                        <li key={idx}>
                          <a href={link.href} target={section.key === "socials" ? "_blank" : "_self"} rel="noopener noreferrer" className="hover:text-[#fffff2]">
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="hidden md:block">
                <ul className="space-y-2 text-[18px] mb-6">
                  {section.links.map((link, idx) => (
                    <li key={idx}>
                      <a href={link.href} target={section.key === "socials" ? "_blank" : "_self"} rel="noopener noreferrer" className="hover:text-[#fffff2]">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-2 md:border-t md:border-gray-300 pt-8 text-center text-sm text-gray-700">
          <p className="text-[16px]">&copy; {new Date().getFullYear()} Ramya Nagendra. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;