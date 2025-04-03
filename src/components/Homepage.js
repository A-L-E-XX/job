import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <h1>Together, We Build a Better Community</h1>
        <p>Empowering our people, creating opportunities, and fostering unity for a brighter future.</p>
        <button className="cta-button">Join Us</button>
      </section>

      {/* Zones Section */}
      <section className="zones-section">
        <h2>Our Zones</h2>
        <p>Graceland Community is divided into zones A to F. Click to explore:</p>
        <div className="zones">
          {["A", "B", "C", "D", "E", "F"].map((zone) => (
            <Link to={`/zone/${zone}`} key={zone} className="zone-card">
              Zone {zone}
            </Link>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Our Programs</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <img src="https://via.placeholder.com/150" alt="Education" />
            <h3>Education</h3>
            <p>Providing resources to educate and empower the youth in our community.</p>
          </div>
          <div className="feature-card">
            <img src="https://via.placeholder.com/150" alt="Skill Development" />
            <h3>Skill Development</h3>
            <p>Organizing workshops to enhance skills and create job opportunities.</p>
          </div>
          <div className="feature-card">
            <img src="https://via.placeholder.com/150" alt="Health & Wellness" />
            <h3>Health & Wellness</h3>
            <p>Promoting healthy living through awareness and support programs.</p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="vision">
        <h2>Our Vision</h2>
        <p>
          We envision a community where everyone has equal access to opportunities, resources, and support. By
          coming together, we aim to uplift each other and create a sustainable environment for future generations.
        </p>
      </section>

      {/* Get Involved Section */}
      <section className="get-involved">
        <h2>Get Involved</h2>
        <p>Your participation matters! Here’s how you can contribute:</p>
        <ul>
          <li>Volunteer in our programs</li>
          <li>Donate to support our initiatives</li>
          <li>Share our mission with others</li>
        </ul>
        <Link to="/contact" className="cta-button">Learn More</Link>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Members Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p>"Joining this community has been life-changing. The support is incredible!"</p>
            <h4>- Amina Bello</h4>
          </div>
          <div className="testimonial-card">
            <p>"I’ve learned so many new skills through their programs. Thank you!"</p>
            <h4>- Chukwudi Okoro</h4>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-section">
        <h2>About Us</h2>
        <p>
          Graceland Community is committed to fostering unity, growth, and development for everyone. We believe in
          working together to make our zones vibrant and supportive places for all.
        </p>
        <Link to="/contact" className="cta-button">Learn More</Link>
      </section>
    </div>
  );
};

export default Homepage;
