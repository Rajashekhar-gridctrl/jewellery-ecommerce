import React from 'react';
import { motion } from 'framer-motion';
import { scrollVariants, containerVariants, cardVariants } from '../variants/categoryVariants';
import Woman from "../assets/images/all-categories.jpg"

const categories = [
  {
    title: 'Earrings',
    href: '/product',
    img: 'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw83758477/homepage/shopByCategory/earrings-cat.jpg'
  },
  {
    title: 'Finger Rings',
    href: '/product',
    img: 'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw47da8133/homepage/shopByCategory/rings-cat.jpg'
  },
  {
    title: 'Pendants',
    href: '/product',
    img: 'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw63553376/homepage/shopByCategory/pendants-cat.jpg'
  },
  {
    title: 'Mangalsutra',
    href: '/product',
    img: 'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw442a2739/homepage/shopByCategory/mangalsutra-cat.jpg'
  },
  {
    title: 'Bracelets',
    href: '/product',
    img: 'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw2562a9fe/homepage/shopByCategory/bracelets-cat.jpg'
  },
  {
    title: 'Bangles',
    href: '/product',
    img: 'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw1226b98b/homepage/shopByCategory/bangles-cat.jpg'
  },
  {
    title: 'Chains',
    href: '/product',
    img: 'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwd0550e4c/homepage/shopByCategory/chains-cat.jpg'
  },
  {
    title: 'View All',
    href: '/product',
    img: Woman
  }
];

function FeaturedCategory() {
  return (
    <motion.section
      id="featured-categories"
      className="px-4 md:px-32 mt-16 md:mt-32"
      variants={scrollVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="text-center mb-10">
        <h3 className="text-4xl md:text-3xl font-semibold">Crafted With Love, Made for You</h3>
        <p className="text-lg md:text-2xl mt-2">Explore Our Curated Categories</p>
      </div>

      <motion.div
        className="overflow-x-auto pb-4 md:overflow-visible"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="flex gap-6 pl-4 pr-8 md:grid md:grid-cols-4 md:pl-0 md:pr-0">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 min-w-[150px] md:min-w-0"
              variants={cardVariants}
            >
              <a href={cat.href} className="block">
                <div className="overflow-hidden rounded-full w-[150px] h-[150px] mx-auto mb-4 md:w-full md:h-[200px] md:rounded-2xl">
                  <img
                    src={cat.img}
                    alt={cat.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    loading="lazy"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <h6 className="text-center text-lg font-medium">{cat.title}</h6>
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </motion.section>
  );
}

export default FeaturedCategory;
