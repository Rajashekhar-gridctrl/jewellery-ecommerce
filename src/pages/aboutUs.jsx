import React from "react";

const AboutUs = () => {
    return (
        <div className="max-w-5xl  font-lato mx-auto">
            {/* Hero Banner */}
            <div
                className="relative mt-20 bg-cover bg-center h-[200px] flex items-center justify-center text-white"
                style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?gold,jewelry')" }}
            >
                <div className="bg-[#CFB484] bg-opacity-50 p-6 rounded-lg text-center">
                    <h1 className="text-5xl font-bold">Ramya Nagendra Imitations</h1>
                    <p className="text-lg mt-2">
                        Exquisite 1-gram jewelry crafted for elegance and affordability.
                    </p>
                    <hr className="my-6 border-slate-300" />
                    <h6 className="text-xl font-extrabold tracking-wide">
                        Crafted with Love, Worn with Pride
                    </h6>
                    <p className="mt-4 text-xl font-light italic">
                        Explore the Beauty of Elegant Jewelry & Timeless Style
                    </p>
                </div>
            </div>

            {/* Business Story */}
            <div className="p-8 mt-8 text-gray-800">
                <h2 className="text-3xl font-semibold mb-4">About Our Brand</h2>
                <p className="text-lg">
                    At Ramya Nagendra Imitations, we bring you the beauty of gold-inspired jewelry with
                    our finely crafted 1-gram jewelry collection. Combining affordability with luxury,
                    we cater to modern customers who seek elegance at the best prices.
                </p>
            </div>

            {/* Key Strengths */}
            <div className="p-8 bg-gray-100 rounded-lg shadow-md">
                <h2 className="text-3xl font-semibold mb-4">Why Choose Us?</h2>
                <ul className="list-disc pl-6 text-lg">
                    <li>High-quality gold-plated designs for a premium look.</li>
                    <li>Exclusive traditional & modern collections.</li>
                    <li>Trusted online order & delivery services.</li>
                    <li>Customer-centric approach for personalized shopping.</li>
                </ul>
            </div>

            {/* Image Showcase */}
            <div className="my-8 max-w-5xl mx-auto flex flex-col md:flex-row bg-white shadow-lg rounded-lg border border-gray-200 p-6">
                {/* Image Section */}
                <div className="w-full md:w-1/2">
                    <img
                        src="https://ramyanagendra.com/cdn/shop/files/who_we_are_2.jpg?v=1724339838&width=750"
                        alt="Who We Are"
                        className="rounded-lg w-full object-cover rounded-lg h-full"
                    />
                </div>

                {/* Content Section */}
                <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">Who We Are</h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        At RamyaNagendra Imitations, we are more than just a jewelry brand—we are storytellers,
                        celebrating the beauty of tradition and the elegance of modern design.
                    </p>
                    <p className="mt-3 text-gray-600 text-lg">
                        Founded by a passionate woman, Ramya, along with her husband Nagendra, our journey
                        began with a commitment to creating exquisite, handcrafted pieces that resonate with love,
                        culture, and artistry.
                    </p>
                    <p className="mt-3 text-gray-600 text-lg">
                        Each item in our collection is thoughtfully designed and meticulously crafted, embodying
                        the spirit of our founder’s vision: to bring affordable luxury to every woman.
                    </p>
                    <p className="mt-3 text-gray-600 text-lg">
                        Our work is admired by many, and we take pride in building a community of customers who see
                        us not just as a brand, but as an inspiration.
                    </p>
                </div>
            </div>


            <div className="my-8 max-w-5xl mx-auto flex flex-col md:flex-row bg-white shadow-lg rounded-lg border border-gray-200 p-6">
                {/* Content Section */}
                <div className="w-full md:w-1/2 p-6 flex flex-col justify-center font-lado">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">Why We Do It</h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        We do it because we believe in the power of jewelry to connect us to our roots,
                        celebrate our identities, and express our unique stories.
                    </p>
                    <p className="mt-3 text-gray-600 text-lg">
                        Our passion lies in creating pieces that aren’t just accessories but meaningful
                        symbols of tradition, love, and personal style.
                    </p>
                    <p className="mt-3 text-gray-600 text-lg">
                        We are committed to making high-quality, affordable jewelry accessible to
                        everyone, inspiring confidence and elegance in every piece we craft.
                    </p>
                    <p className="mt-3 text-gray-600 text-lg">
                        Our mission is to bring joy, beauty, and a sense of connection to every customer
                        who wears our creations.
                    </p>
                </div>

                {/* Image Section */}
                <div className="w-full md:w-1/2">
                    <img
                        src="https://ramyanagendra.com/cdn/shop/files/Why_We_2.jpg?v=1724349959&width=750"
                        alt="Why We Do It"
                        className="rounded-lg w-full object-cover h-full"
                    />
                </div>
            </div>

            <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200">
                {/* Heading */}
                <h5 className="text-4xl font-bold text-center text-gray-800 mb-6">
                    Our Family, Our Strength
                </h5>

                {/* Image Section */}
                <div className="flex justify-center">
                    <img
                        src="https://ramyanagendra.com/cdn/shop/files/group.jpg?v=1724339987&width=3840"
                        alt="Family"
                        className="rounded-lg shadow-md w-full object-cover"
                    />
                </div>

                {/* Description */}
                <div className="mt-6 text-center text-gray-700 text-lg">
                    <p>
                        Behind <b>RamyaNagendra Imitations</b> is a family-driven dream, built on values of trust, craftsmanship,
                        and passion. Our journey is rooted in the dedication of our founders, turning tradition into
                        timeless elegance.
                    </p>
                </div>
            </div>




            {/* Contact Info */}
            <div className="p-8 text-center">
                <h2 className="text-3xl font-semibold">Connect With Us</h2>
                <p className="text-lg">
                    For inquiries, reach out at <span className="font-semibold">info@ramyanagendra.com</span>
                </p>
            </div>

        </div>
    );
};

export default AboutUs;