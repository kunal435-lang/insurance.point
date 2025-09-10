import React from "react";

function Home() {
  return (
    <div className="home-container bg-gradient-to-b from-gray-50 to-white text-gray-800 px-6 md:px-20 py-10 space-y-16">
      
      {/* About Us Section */}
      <div className="about-container bg-white shadow-xl rounded-2xl p-8 md:p-12 fade-in">
        <h1 className="home-title text-3xl md:text-4xl font-bold text-blue-700 mb-6">
          About Insurance Point
        </h1>
        <p className="mb-4 text-lg leading-relaxed">
          At <strong>Insurance Point</strong>, led by{" "}
          <strong>Hemant Kumar</strong>, we make insurance simple and
          stress-free. Instead of confusing terms and endless choices, we help
          you find the plan that actually fits your needs.
        </p>
        <p className="mb-4 text-lg leading-relaxed font-medium text-gray-700">
          We have more than <strong>13 years of experience</strong> in the
          insurance industry and proudly serve{" "}
          <strong>350+ happy customers</strong>.
        </p>
        <p className="mb-4 text-lg leading-relaxed">
          We’re connected with top insurance companies like{" "}
          <strong>
            ICICI Prudential, ICICI Lombard, HDFC ERGO, Reliance, TATA AIG, Go
            Digit, Oriental, United India, SBI General, Sri Ram
          </strong>{" "}
          and more — so you can compare the best options in one place without
          hassle.
        </p>
        <p className="mb-4 text-lg leading-relaxed">
          For <strong>health & mediclaim</strong>, we partner with{" "}
          <strong>Star Health, Care Health, and Niva Bupa</strong> — ensuring
          your family always has the right protection when it matters most.
        </p>
        <p className="text-lg leading-relaxed font-medium text-blue-600">
          Our mission: to keep insurance{" "}
          <strong>clear, affordable, and truly helpful</strong> for every
          person, family, and business.
        </p>
      </div>

      {/* Why Choose Us Section */}
      <div className="why-container bg-white shadow-xl rounded-2xl p-8 md:p-12 fade-in">
        <h2 className="home-title text-3xl md:text-4xl font-bold text-green-700 mb-6">
          Why Choose Us?
        </h2>
        <p className="mb-6 text-lg leading-relaxed">
          At <strong>Insurance Point</strong>, insurance should give you{" "}
          <span className="text-green-600 font-semibold">peace of mind</span> —
          not stress. Here’s why people trust us:
        </p>
        <ul className="why-list grid md:grid-cols-2 gap-4 text-lg">
          <li className="p-4 bg-green-50 border-l-4 border-green-500 rounded-lg shadow-sm hover:shadow-md transition">
            <strong>Fast & Easy Claims –</strong> Quick settlements, no
            headaches.
          </li>
          <li className="p-4 bg-green-50 border-l-4 border-green-500 rounded-lg shadow-sm hover:shadow-md transition">
            <strong>Affordable Premiums –</strong> Best prices with the right
            coverage.
          </li>
          <li className="p-4 bg-green-50 border-l-4 border-green-500 rounded-lg shadow-sm hover:shadow-md transition">
            <strong>Always Here for You –</strong> Support anytime you need us.
          </li>
          <li className="p-4 bg-green-50 border-l-4 border-green-500 rounded-lg shadow-sm hover:shadow-md transition">
            <strong>Trusted Companies –</strong> Only reliable insurers.
          </li>
          <li className="p-4 bg-green-50 border-l-4 border-green-500 rounded-lg shadow-sm hover:shadow-md transition">
            <strong>Plans Made for You –</strong> Personalized insurance
            solutions.
          </li>
          <li className="p-4 bg-green-50 border-l-4 border-green-500 rounded-lg shadow-sm hover:shadow-md transition">
            <strong>Clear & Honest Advice –</strong> No jargon, just clarity.
          </li>
        </ul>
        <p className="mt-6 text-lg leading-relaxed font-medium text-green-600">
          With us, insurance isn’t complicated — it’s{" "}
          <strong>simple, clear, and built for you</strong>.
        </p>
      </div>
    </div>
  );
}

export default Home;
