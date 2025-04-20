import { motion } from "framer-motion";

function FeaturedCollection() {
  const collections = [
    {
      title: "Dailywear Earrings",
      image:
        "https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw80160994/homepage/tanishq-collections/dailywear-earrings-desktop.jpg",
      link: "#",
    },
    {
      title: "Auspicious Jewellery",
      image:
        "https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwf5f2c9f4/homepage/tanishq-collections/auspicious-jewellery.jpg",
      link: "#",
    },
    {
      title: "Dailywear Chains",
      image:
        "https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw1eded5b5/homepage/tanishq-collections/dailywear-chains.jpg",
      link: "#",
    },
  ];

  const scrollVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.15 },
    },
  };

  const hoverEffect = {
    whileHover: {
      scale: 1.03,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
  };

  return (
    <motion.section
      className="px-4 md:px-32 mt-16 md:mt-32"
      variants={scrollVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="text-center mb-10">
        <h3 className="text-4xl md:text-6xl font-semibold">Ramya Nagendra's Collections</h3>
        <p className="text-lg md:text-2xl mt-6">Explore our Authentic Collection</p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 justify-center items-center md:items-stretch">
        {/* Left large image */}
        <motion.a
          href={collections[0].link}
          className="w-full md:w-1/2 overflow-hidden rounded-xl shadow-md"
          {...hoverEffect}
        >
          <img
            src={collections[0].image}
            alt={collections[0].title}
            className="object-cover w-full h-[300px] md:h-[500px]"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </motion.a>

        {/* Right stacked images */}
        <div className="flex flex-col gap-6 w-full md:w-1/2">
          {collections.slice(1).map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              className="overflow-hidden rounded-xl shadow-md"
              {...hoverEffect}
            >
              <img
                src={item.image}
                alt={item.title}
                className="object-cover w-full h-[200px] md:h-[245px]"
                style={{ width: "100%", height: "auto" }}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default FeaturedCollection;
