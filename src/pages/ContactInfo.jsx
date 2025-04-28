import React from "react";

const ContactInfo = () => {
  return (
    <div className="max-w-3xl mt-5 mx-auto p-6 bg-gradient-to-r text-white shadow-xl rounded-lg"
    style={{
        background: "linear-gradient(352.75deg, rgb(194 166 117) -5.77%, rgb(117, 117, 117) 102.02%, rgb(252, 255, 248) 102.02%)"
    }}>
      <h1 className="text-4xl font-bold text-center mb-6">Contact Information</h1>

      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <span className="text-2xl">🏢</span>
          <div>
            <h2 className="text-xl font-semibold">Trade Name</h2>
            <p className="text-lg">Ramya Nagendra Imitations</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-2xl">📞</span>
          <div>
            <h2 className="text-xl font-semibold">Phone Number</h2>
            <p className="text-lg">9381433360</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-2xl">📧</span>
          <div>
            <h2 className="text-xl font-semibold">Email</h2>
            <p className="text-lg">info@ramyanagendra.com</p>
          </div>
        </div>

        <div className="flex items-center gap-4 pb-5">
          <span className="text-2xl">📍</span>
          <div>
            <h2 className="text-xl font-semibold">Physical Address</h2>
            <p className="text-lg">
              RamyaNagendra Imitations, 1-2-161/A/1, Krishna Nagar, 505327 Jagtial, TS, India
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;