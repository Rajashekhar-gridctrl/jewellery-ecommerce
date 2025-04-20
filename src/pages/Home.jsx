import About from "../components/About";
import BannerVideo from "../components/BannerVideo"

function Home() {
  return (
    <>
      <BannerVideo />
      <div className="px-2 md:px-12">
        <About />
      </div>
    </>
  )
}

export default Home;