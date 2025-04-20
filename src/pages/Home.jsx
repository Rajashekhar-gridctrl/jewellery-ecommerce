import About from "../components/About";
import BannerVideo from "../components/BannerVideo"
import FeaturedCategory from "../components/FeaturedCategory";
import FeaturedCollection from "../components/FeaturedCollection";

function Home() {
  return (
    <>
      <BannerVideo />
      <div className="px-2 md:px-12">
        <About />
      </div>
      <div>
        <FeaturedCollection />
      </div>
      <div>
        <FeaturedCategory />
      </div>
    </>
  )
}

export default Home;