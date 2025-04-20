import PendentImage from "../assets/images/ring.jpg";
import HeroImage from "../assets/images/woman.jpg";

function About() {
  return (
    <>
      <section className="mt-16 flex">
        <div className="basis-1/2 md:pl-20">
          <div className="font-semobold">
            <div>
              <span className="text-6xl">Experience the</span>
            </div>
            <div className="flex items-center gap-6 mt-4 mb-4">
              <span className="text-6xl">Brilliance of</span>
              <img
                style={{
                  width: "128px",
                  height: "65px",
                  borderRadius: "20px",
                  objectFit: "cover",
                }}
                src={PendentImage}
                alt="Pendant"
              />
            </div>
            <div>
              <span className="text-6xl">Craftsmanship</span>
            </div>
          </div>
          <div className="mt-16 flex-col text-2xl">
            <span className="block">Discover a world where beauty meets craftsmanship, </span>
            <span className="block">where every piece of jewellery tells a story.</span>
          </div>
        </div>
        <div className="basis-1/2 flex justify-center h-[500px]">
          <img
            src={HeroImage}
            alt="Right Side"
            className="object-cover rounded-3xl"
            style={{"height": "100%", "width": "400px"}}
          />
        </div>
      </section>
    </>
  );
}

export default About;
