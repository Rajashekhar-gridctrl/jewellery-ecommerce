import { useState } from "react";
import { BiRupee } from "react-icons/bi";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import featuredImg from "../assets/images/woman-2.jpg";
import productImg1 from "../assets/images/product-1.jpg";
import productImg2 from "../assets/images/product-2.jpg";
import productImg3 from "../assets/images/product-3.jpg";
import productImg4 from "../assets/images/product-4.jpg";
import productImg5 from "../assets/images/product-5.jpg";
import productImg6 from "../assets/images/product-6.jpg";
import productImg7 from "../assets/images/product-7.jpg";
import productImg8 from "../assets/images/product-8.jpg";
import productImg9 from "../assets/images/product-9.jpg";
import productImg10 from "../assets/images/product-10.jpg";
import productImg11 from "../assets/images/product-11.jpg";

const products = [
  { id: 1, name: "Sample Name Gold plated", price: 1050.0, oldPrice: 1150.0, discount: "-50%", image: productImg1 },
  { id: 2, name: "Sample Name Zircon Gold Plated Ring", price: 800.75, oldPrice: 900.54, image: productImg2 },
  { id: 3, name: "Sample Name Chain Necklace Gold", price: 900.00, oldPrice: 1000.00, image: productImg3 },
  { id: 4, name: "Sample Name Diamond Brooch", price: 750.00, oldPrice: 800.002, image: productImg4 },
  { id: 5, name: "Sample Name Emerald Ring", price: 1100.00, oldPrice: 1300.00, discount: "-20%", image: productImg5 },
  { id: 6, name: "Sample Name Silver Chain", price: 950.50, oldPrice: 1000.00, image: productImg6 },
  { id: 7, name: "Sample Name Sapphire Brooch", price: 1250.00, oldPrice: 1350.00, discount: "-15%", image: productImg7 },
  { id: 8, name: "Sample Name Gold Hoops", price: 600.00, oldPrice: 750.00, image: productImg8 },
  { id: 9, name: "Sample Name Rose Gold Bracelet", price: 1500.00, oldPrice: 1600.00, image: productImg9 },
  { id: 10, name: "Sample Name Platinum Studs", price: 2000.00, oldPrice: 2200.00, discount: "-10%", image: productImg1 },
  { id: 11, name: "Sample Name Amethyst Pendant", price: 1300.00, oldPrice: 1450.00, discount: "-10%", image: productImg2 },
  { id: 12, name: "Sample Name Pearl Earrings", price: 850.00, oldPrice: 950.00, image: productImg4 },
];

function FeaturedProducts() {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState("right");
  const productsPerPage = 4;
  const totalPages = Math.ceil(products.length / productsPerPage);

  const start = currentPage * productsPerPage;
  const visibleProducts = products.slice(start, start + productsPerPage);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentPage((prev) =>
      newDirection === "right"
        ? (prev + 1) % totalPages
        : (prev - 1 + totalPages) % totalPages
    );
  };

  const variants = {
    enter: (direction) => ({
      x: direction === "right" ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4 },
    },
    exit: (direction) => ({
      x: direction === "right" ? -300 : 300,
      opacity: 0,
      transition: { duration: 0.3 },
    }),
  };

  const arrowVariants = {
    rest: { x: 0 },
    hover: {
      x: [0, 5, -5, 0],
      transition: {
        duration: 0.6,
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  };  

  return (
    <section className="px-4 md:px-32 mt-16 md:mt-32">
      <div className="relative mb-8">
        <h3 className="text-4xl md:text-6xl font-semibold text-center">
          Featured Products
        </h3>
        <div className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 gap-2">
          <motion.button
            className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100"
            whileTap={{ scale: 0.8 }}
            onClick={() => paginate("left")}
          >
            <FiArrowLeft size={20} />
          </motion.button>

          <motion.button
            className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100"
            whileTap={{ scale: 0.8 }}
            onClick={() => paginate("right")}
          >
            <FiArrowRight size={20} />
          </motion.button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        <div className="hidden md:block flex-1">
          <img
            src={featuredImg}
            alt="Featured"
            className="object-cover rounded-2xl"
            style={{ width: "100%", height: "100%" }}
          />
        </div>

        <div className="flex-1 relative">
          <div className="hidden md:block relative">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={currentPage}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6 absolute w-full"
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                {visibleProducts.map((product) => (
                  <motion.a
                    // href={`/products/${product.id}`}
                    href="#"
                    key={product.id}
                    className="relative rounded-xl bg-white shadow-sm transition overflow-hidden group block"
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                  >                
                    {product.discount && (
                      <div className="absolute top-4 left-4 bg-yellow-300 text-xs font-medium px-2 py-1 rounded-full">
                        {product.discount}
                      </div>
                    )}
                    <motion.img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                      style={{ width: "100%", height: "auto" }}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.4 }}
                    />

                    <div className="p-4">
                      <h3 className="text-lg font-medium text-gray-800">
                        {product.name}
                      </h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <div className="flex items-center text-lg font-semibold text-gray-900">
                          <BiRupee className="text-lg" />
                          {product.price.toFixed(2)}
                        </div>
                        {product.oldPrice && (
                          <div className="flex items-center text-sm line-through text-gray-400">
                            <BiRupee className="text-sm" />
                            {product.oldPrice.toFixed(2)} INR
                          </div>
                        )}
                      </div>
                    </div>

                    <motion.div
                      className="absolute bottom-4 right-4 text-gray-500 group-hover:text-gray-800"
                      variants={arrowVariants}
                    >
                      <FiArrowRight size={20} />
                    </motion.div>
                  </motion.a>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile View */}
          <div className="flex md:hidden gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4">
            {products.map((product) => (
              <motion.a
                // href={`/products/${product.id}`}
                href="#"
                key={product.id}
                className="relative min-w-[80%] bg-white rounded-xl shadow-sm snap-center flex-shrink-0 overflow-hidden group block"
              >
                {product.discount && (
                  <div className="absolute top-4 left-4 bg-yellow-300 text-xs font-medium px-2 py-1 rounded-full">
                    {product.discount}
                  </div>
                )}
                
                <div className="h-[310px] w-full overflow-hidden rounded-t-xl">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="object-cover"
                    style={{ width: "100%", height: "100%" }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-800">{product.name}</h3>
                  <div className="flex items-center space-x-2 mt-1">
                    <div className="flex items-center text-lg font-semibold text-gray-900">
                      <BiRupee className="text-lg" />
                      {product.price.toFixed(2)}
                    </div>
                    {product.oldPrice && (
                      <div className="flex items-center text-sm line-through text-gray-400">
                        <BiRupee className="text-sm" />
                        {product.oldPrice.toFixed(2)} INR
                      </div>
                    )}
                  </div>
                </div>

                <motion.div
                  className="absolute bottom-4 right-4 text-gray-500 group-hover:text-gray-800"
                  variants={{
                    hover: {
                      x: [0, 5, -5, 0],
                      transition: {
                        duration: 0.6,
                        repeat: Infinity,
                        repeatType: "loop",
                      },
                    },
                  }}
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                >
                  <FiArrowRight size={20} />
                </motion.div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
