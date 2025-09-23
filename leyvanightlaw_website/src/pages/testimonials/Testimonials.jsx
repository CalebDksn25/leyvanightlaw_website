import React from "react";
import "./Testimonials.css";
import { testimonials } from "./data";

const Testimonials = () => {
  // Using shared testimonials data from ./data

  // Configuration for the upload review link - you can change this URL
  const uploadReviewLink =
    "https://www.yelp.com/writeareview/biz/0PZ0QI8cIShIGz_mI2IT4g?return_url=%2Fbiz%2F0PZ0QI8cIShIGz_mI2IT4g&review_origin=biz-details-war-button"; // Replace with your preferred review platform

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`star ${index < rating ? "filled" : ""}`}>
        ★
      </span>
    ));
  };

  return (
    <div className="testimonials-page">
      <div className="testimonials-header">
        <h1>Client Testimonials</h1>
        <p>Read what our clients say about Leyva Night Law</p>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="testimonial-header">
              <div className="client-name">{testimonial.name}</div>
              <div className="testimonial-date">{testimonial.date}</div>
            </div>
            <div className="testimonial-rating">
              {renderStars(testimonial.rating)}
            </div>
            <div className="testimonial-text">"{testimonial.text}"</div>
          </div>
        ))}
      </div>

      <div className="upload-review-section">
        <div className="upload-review-content">
          <h2>Share Your Experience</h2>
          <p>Help others by sharing your experience with Leyva Night Law</p>
          <a
            href={uploadReviewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="upload-review-button">
            Upload a Review
          </a>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
