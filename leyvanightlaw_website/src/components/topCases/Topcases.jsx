import React, { useState, useEffect } from "react";
import "./Topcases.css";
import { Link } from "react-router-dom";
import settlement1 from "../../assets/settlement1.webp";
import settlement2 from "../../assets/settlement2.webp";
import settlement3 from "../../assets/settlement3.webp";
import settlement4 from "../../assets/settlement4.webp";
import settlement5 from "../../assets/settlement5.webp";

const caseImages = [
  {
    id: 1,
    title: "Workplace Injury Settlement",
    description:
      "Successfully recovered $250,000 for construction worker injured on site",
    image: settlement1,
    alt: "Construction site workplace injury case",
  },
  {
    id: 2,
    title: "Medical Malpractice Victory",
    description: "Obtained $180,000 settlement for medical negligence case",
    image: settlement2,
    alt: "Medical malpractice case result",
  },
  {
    id: 3,
    title: "Car Accident Compensation",
    description:
      "Secured $320,000 for client injured in motor vehicle collision",
    image: settlement3,
    alt: "Car accident injury case",
  },
  {
    id: 4,
    title: "Workers' Comp Denial Appeal",
    description: "Overturned denied claim and recovered $95,000 in benefits",
    image: settlement4,
    alt: "Workers compensation appeal success",
  },
  {
    id: 5,
    title: "Wrongful Termination Case",
    description:
      "Achieved $150,000 settlement for unlawfully terminated employee",
    image: settlement5,
    alt: "Wrongful termination case victory",
  },
];

const TopCases = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance slideshow
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === caseImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      currentIndex === 0 ? caseImages.length - 1 : currentIndex - 1
    );
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex(
      currentIndex === caseImages.length - 1 ? 0 : currentIndex + 1
    );
    setIsAutoPlaying(false);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <section className="top-cases" aria-label="Top case results">
      <div className="container">
        <div className="top-cases__header">
          <h2>Our Top Case Results</h2>
          <p>Proven track record of successful settlements and verdicts</p>
        </div>

        <div className="top-cases__slider">
          <div className="top-cases__slides">
            {caseImages.map((caseItem, index) => (
              <div
                key={caseItem.id}
                className={`top-cases__slide ${
                  index === currentIndex ? "active" : ""
                }`}>
                <div className="top-cases__slide-content">
                  <img
                    src={caseItem.image}
                    alt={caseItem.alt}
                    className="top-cases__image"
                  />
                  <div className="top-cases__overlay">
                    <h3>{caseItem.title}</h3>
                    <p>{caseItem.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="top-cases__controls">
            <button
              className="top-cases__btn top-cases__btn--prev"
              onClick={goToPrevious}
              aria-label="Previous case">
              ‹
            </button>
            <button
              className="top-cases__btn top-cases__btn--next"
              onClick={goToNext}
              aria-label="Next case">
              ›
            </button>
          </div>

          <div className="top-cases__indicators">
            {caseImages.map((_, index) => (
              <button
                key={index}
                className={`top-cases__indicator ${
                  index === currentIndex ? "active" : ""
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to case ${index + 1}`}
              />
            ))}
          </div>

          <div className="top-cases__autoplay">
            <button
              className={`top-cases__play-btn ${
                isAutoPlaying ? "playing" : "paused"
              }`}
              onClick={toggleAutoPlay}
              aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}>
              {isAutoPlaying ? "⏸" : "▶"}
            </button>
          </div>
        </div>

        <div className="top-cases__cta">
          <Link to="/contact" className="btn btn--primary">
            Get Your Free Case Evaluation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopCases;
