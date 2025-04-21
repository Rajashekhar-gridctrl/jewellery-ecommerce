import { useEffect, useState } from "react";
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
  { id: 1, name: "Copper Gold plated", price: 105.0, oldPrice: 115.0, discount: "-50%", image: productImg1 },
  { id: 2, name: "Zircon Gold Plated Ring", price: 80.75, oldPrice: 90.54, image: productImg2 },
  { id: 3, name: "Chain Necklace Gold", price: 90.0, oldPrice: 100.0, image: productImg3 },
  { id: 4, name: "Diamond Brooch", price: 75.0, oldPrice: 80.02, image: productImg4 },
  { id: 5, name: "Emerald Ring", price: 110.0, oldPrice: 130.0, discount: "-20%", image: productImg5 },
  { id: 6, name: "Silver Chain", price: 95.5, oldPrice: 100.0, image: productImg6 },
  { id: 7, name: "Sapphire Brooch", price: 125.0, oldPrice: 135.0, discount: "-15%", image: productImg7 },
  { id: 8, name: "Gold Hoops", price: 60.0, oldPrice: 75.0, image: productImg8 },
  { id: 9, name: "Rose Gold Bracelet", price: 150.0, oldPrice: 160.0, image: productImg9 },
  { id: 10, name: "Platinum Studs", price: 200.0, oldPrice: 220.0, discount: "-10%", image: productImg10 },
  { id: 11, name: "Amethyst Pendant", price: 130.0, oldPrice: 145.0, discount: "-10%", image: productImg11 },
  { id: 12, name: "Pearl Earrings", price: 85.0, oldPrice: 95.0, image: productImg4 },
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

  return (
    <section className="px-4 md:px-32 mt-16 md:mt-32">
      <div className="relative mb-8">
        <h3 className="text-4xl md:text-6xl font-semibold text-center">
          Featured Products
        </h3>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 flex gap-2">
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
        <div className="flex-1">
          <img
            src={featuredImg}
            alt="Featured"
            className="object-cover rounded-2xl"
            style={{ width: "100%", height: "100%" }}
          />
        </div>

        <div className="flex-1 relative">
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
                  href={`/products/${product.id}`}
                  key={product.id}
                  className="relative rounded-xl bg-white shadow-sm transition overflow-hidden group block"
                >
                  {product.discount && (
                    <div className="absolute top-4 left-4 bg-yellow-300 text-xs font-medium px-2 py-1 rounded-full">
                      {product.discount}
                    </div>
                  )}

                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-contain bg-white"
                    style={{ width: "100%", height: "auto" }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                  />

                  <div className="p-4">
                    <h3 className="text-lg font-medium text-gray-800">
                      {product.name}
                    </h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-lg font-semibold text-gray-900">
                        ${product.price.toFixed(2)}
                      </span>
                      {product.oldPrice && (
                        <span className="text-sm line-through text-gray-400">
                          ${product.oldPrice.toFixed(2)} USD
                        </span>
                      )}
                    </div>
                  </div>

                  <motion.div
                    className="absolute bottom-4 right-4 text-gray-500 hover:text-gray-800"
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
                    whileHover="hover"
                  >
                    <FiArrowRight size={20} />
                  </motion.div>
                </motion.a>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
