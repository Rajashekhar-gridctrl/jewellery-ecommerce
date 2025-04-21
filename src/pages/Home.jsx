import About from "../components/About";
import BannerVideo from "../components/BannerVideo"
import FeaturedCategory from "../components/FeaturedCategory";
import FeaturedCollection from "../components/FeaturedCollection";
import FeaturedProducts from "../components/FeaturedProducts";
import LocateStore from "../components/LocateStore";

function Home() {
  return (
    <>
      <BannerVideo />
      <div className="px-2 md:px-12">
        <About />
      </div>
      <FeaturedCollection />
      <FeaturedCategory />
      <FeaturedProducts />
      <LocateStore />
    </>
  )
}

export default Home;