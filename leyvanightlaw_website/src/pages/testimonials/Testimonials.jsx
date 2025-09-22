import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  // Sample testimonials data - you can replace this with your actual testimonials
  const testimonials = [
    {
      id: 1,
      name: "Viridiana L.",
      rating: 5,
      text: "I was recommended to Leyva & Night after a horrible nightmare at work. Neither HR or management could help me. Once I was contacted by Leyva & Night they quickly met me at home to speak to me about my case. Then & there I signed I was dead nervous never had any problems before. All I have to say is I DONT REGRET IT. Leyva & Night have the best customer service helped me with everything I needed answered me when I called kept in touch & took care of everything for me. I am very happy with their hard work and easy communication. I'm very happy with the result. Thank you once again! God bless you guys!",
      date: "April 5, 2019",
    },
    {
      id: 2,
      name: "Edith V.",
      rating: 5,
      text: "We hired these attorneys after my husband got injured at work and they fired him. The office staff is very nice and always explained everything thoroughly. My husbands case was closed with no problem and he got a great settlement at the end.",
      date: "November 9, 2016",
    },
    {
      id: 3,
      name: "Margaret R.",
      rating: 5,
      text: "Laura and all her assistants we're always available to answer all my questions, And concern. Always reply to my emails they researched if they have to get an answer for my question. very professional very kind made the whole process from beginning to end very calm and comfortable and very reassuring . They say what they mean and they mean what they say. I'm not one to post ratings or my opinion but I really feel they deserve all five stars and a high five thank you, LOURA",
      date: "January 13, 2020",
    },
    {
      id: 4,
      name: "Hector C.",
      rating: 5,
      text: "This Law Firm was recommended to me from a family friend, now I'm recommending them to you. They we're fairly quick on returning my calls which is a main part of any case. My case was settled quick, I got my settlement money. Give them a call to see what they can do for you.",
      date: "April 23, 2019",
    },
    {
      id: 5,
      name: "Omar V.",
      rating: 5,
      text: "Really proffesional individuals, they explain In understandable terms and are clear with the situation. Would recommend them if you have workers comp related issues.",
      date: "Febuary 28, 2022",
    },
    {
      id: 6,
      name: "Tonantzin N.",
      rating: 5,
      text: "Very professional friendly staff Laura is very knowledgeable. She answered all my questions and very prompt with returning phone calls. She remembers all her clients no matter how long it has been. I HIGHLY recommend this firm. They go above and beyond for their clients.",
      date: "November 11, 2019",
    },
  ];

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
