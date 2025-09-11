import React from "react";
import {
  FaCheckCircle,
  FaBolt,
  FaWallet,
  FaHeadset,
  FaBuilding,
  FaClipboardCheck,
} from "react-icons/fa";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      {/* About Us Section */}
      <div className="about-container">
        <h1 className="home-title">About Insurance Point</h1>
        <div className="about-content">
          <p>
            At <strong>Insurance Point</strong>, led by{" "}
            <strong>Hemant Kumar</strong>, we make insurance simple and
            stress-free. Instead of confusing terms and endless choices, we help
            you find the plan that actually fits your needs.
          </p>
          <p>
            We have more than <strong>13 years of experience</strong> in the
            insurance industry and proudly serve{" "}
            <strong>350+ happy customers</strong>.
          </p>
          <p>
            We’re connected with top insurance companies like{" "}
            <strong>
              ICICI Prudential, ICICI Lombard, HDFC ERGO, Reliance, TATA AIG, Go
              Digit, Oriental, United India, SBI General, Sri Ram
            </strong>{" "}
            and more — so you can compare the best options in one place without
            hassle.
          </p>
          <p>
            For <strong>health & mediclaim</strong>, we partner with{" "}
            <strong>Star Health, Care Health, and Niva Bupa</strong> — ensuring
            your family always has the right protection when it matters most.
          </p>
          <p className="highlight">
            Our mission: to keep insurance{" "}
            <strong>clear, affordable, and truly helpful</strong> for every
            person, family, and business.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="why-container">
        <h2 className="home-title">Why Choose Us?</h2>
        <p className="why-intro">
          At <strong>Insurance Point</strong>, insurance should give you{" "}
          <span className="highlight-green">peace of mind</span> — not stress.
          Here’s why people trust us:
        </p>

        <ul className="why-list">
          <li className="why-item">
            <FaBolt className="icon" />
            <span>
              <strong>Fast & Easy Claims –</strong> Quick settlements, no
              headaches.
            </span>
          </li>
          <li className="why-item">
            <FaWallet className="icon" />
            <span>
              <strong>Affordable Premiums –</strong> Best prices with the right
              coverage.
            </span>
          </li>
          <li className="why-item">
            <FaHeadset className="icon" />
            <span>
              <strong>Always Here for You –</strong> Support anytime you need
              us.
            </span>
          </li>
          <li className="why-item">
            <FaBuilding className="icon" />
            <span>
              <strong>Trusted Companies –</strong> Only reliable insurers.
            </span>
          </li>
          <li className="why-item">
            <FaClipboardCheck className="icon" />
            <span>
              <strong>Plans Made for You –</strong> Personalized insurance
              solutions.
            </span>
          </li>
          <li className="why-item">
            <FaCheckCircle className="icon" />
            <span>
              <strong>Clear & Honest Advice –</strong> No jargon, just clarity.
            </span>
          </li>
        </ul>

        <p className="why-footer">
          With us, insurance isn’t complicated — it’s{" "}
          <strong>simple, clear, and built for you</strong>.
        </p>
      </div>
    </div>
  );
}

export default Home;
