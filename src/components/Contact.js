import React, { useState } from "react";
import { db } from "./firebase-config"; // Firebase Firestore
import { addDoc, collection } from "firebase/firestore"; // Import Firestore functions
import "./Contact.css"; // Import CSS for styling

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!formData.name || !formData.email || !formData.message) {
      setError("All fields are required.");
      setLoading(false);
      return;
    }

    try {
      const docRef = await addDoc(collection(db, "messages"), formData);
      console.log("Document written with ID: ", docRef.id);

      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error adding document: ", error);
      setError("Failed to send your message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact">
      <h2>Contact Us</h2>
      {submitted ? (
        <p className="success-message">Thank you for your message! We'll get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          {error && <p className="error-message">{error}</p>}

          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            rows="5"
            required
          ></textarea>

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;
