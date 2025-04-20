import HeroImage from "../assets/images/woman.jpg";
import RingImage from "../assets/images/ring.jpg";

function About() {
  return (
    <>
      <section className="mt-16 flex flex-col md:flex-row px-4 md:px-0">
        <div className="w-full md:basis-1/2 md:pl-20">
          <div className="font-semibold">
            <div>
              <span className="text-4xl md:text-6xl">Experience the</span>
            </div>
            <div className="flex flex-wrap items-center gap-4 mt-3 mb-3 md:mt-4 md-mt-4">
              <span className="text-4xl md:text-6xl">Brilliance of</span>
              <img
                src={RingImage}
                alt="Pendant"
                className="rounded-xl object-cover"
                style={{
                  width: "100px",
                  height: "50px",
                }}
              />
            </div>
            <div>
              <span className="text-4xl md:text-6xl">Craftsmanship</span>
            </div>
          </div>
          <div className="hidden md:block mt-8 text-lg md:text-2xl">
            <span className="block">Discover a world where beauty meets craftsmanship,</span>
            <span className="block">where every piece of jewellery tells a story.</span>
          </div>
        </div>

        <div className="w-full md:basis-1/2 flex justify-center mt-10 md:mt-0 md:h-[500px]">
          <img
            src={HeroImage}
            alt="Right Side"
            className="object-cover rounded-3xl"
            style={{
              width: "100%",
              maxWidth: "400px",
              height: "auto",
            }}
          />
        </div>

        <div className="block md:hidden mt-8 text-lg md:text-2xl text-center">
          <span>Discover a world where beauty meets craftsmanship, where every piece of jewellery tells a story.</span>
        </div>
      </section>
    </>
  );
}

export default About;