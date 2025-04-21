import { motion } from 'framer-motion';
import StoreImg from "../assets/images/store.jpg"

const LocateStore = () => {
  return (
    <div className=" text-gray-700 w-[95%] mx-auto rounded-[30px] mt-16 md:mt-32">
      <motion.div
        className="md:col-span-5 relative rounded-xl overflow-hidden shadow-md"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Desktop Image */}
        <img
          className="hidden lg:block w-full object-cover"
          src={StoreImg}
          alt="Store Locator Desktop"
          style={{"width": "100%", "height": "400px"}}
        />

        {/* Mobile Image */}
        <img
          className="lg:hidden w-full object-cover"
          src={StoreImg}
          alt="Store Locator Mobile"
          style={{"width": "100%", "height": "400px"}}
        />

        <div className="absolute inset-0 flex flex-col justify-center items-start px-6 lg:px-16 py-10 bg-gradient-to-t from-black/80 to-transparent text-white">
          <p className="text-lg">Locate your nearest</p>
          <h2 className="text-3xl lg:text-5xl font-semibold mb-2">Ramya Nagendra Store</h2>
          <p className="mb-4">For an exquisite jewellery experience</p>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hover:bg-[#CFB484] bg-[#c2a675] text-gray-700 px-6 py-2 rounded-md shadow-md transition-all"
            >
              Find Store
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LocateStore;
