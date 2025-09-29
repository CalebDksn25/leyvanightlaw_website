import "./Home.css";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import heroImage from "../../assets/leyva3.webp";
import disClaims from "../../assets/disclaim.webp";
import wrongTermination from "../../assets/wrongfulterm.webp";
import imgHarassment from "../../assets/workplace2.webp";
import heroAlt from "../../assets/leyva4.webp";
import { testimonials as testimonialsData } from "../../pages/testimonials/data";
import leyvaLogo from "../../assets/leyvalogo2.jpg";
import TopCases from "../topCases/Topcases";

const Home = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const touchStartXRef = useRef(null);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const sectionRefs = useRef({});

  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    // Observe all sections
    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const setSectionRef = (id) => (ref) => {
    sectionRefs.current[id] = ref;
  };

  const totalTestimonials = testimonialsData.length;
  const showPrev = () => {
    setTestimonialIndex(
      (prev) => (prev - 1 + totalTestimonials) % totalTestimonials
    );
  };
  const showNext = () => {
    setTestimonialIndex((prev) => (prev + 1) % totalTestimonials);
  };

  const onTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    const startX = touchStartXRef.current;
    if (startX == null) return;
    const endX = e.changedTouches[0].clientX;
    const delta = endX - startX;
    if (Math.abs(delta) > 40) {
      if (delta > 0) showPrev();
      else showNext();
    }
    touchStartXRef.current = null;
  };
  return (
    <main className="home" role="main">
      <section className="hero" aria-label="Firm hero">
        <img
          className="hero__image"
          src={heroImage}
          alt="Leyva Night Law attorney portrait"
        />
        <div className="hero__overlay" />
        <div className="hero__content">
          <h1 className="hero__title">
            Leyva & Night - Injury Lawyers you can trust
          </h1>
          <p className="hero__subtitle">
            Workers' Compensation Attorneys in Los Angeles
          </p>
          <div className="hero__ctas">
            <Link to="/contact" className="btn btn--primary">
              Free Case Evaluation
            </Link>
            <Link to="/services" className="btn btn--ghost">
              View Our Services
            </Link>
          </div>
        </div>
      </section>

      <section
        id="trust"
        ref={setSectionRef("trust")}
        className={`trust ${
          visibleSections.has("trust") ? "animate-in" : "animate-out"
        }`}
        aria-label="Why choose us">
        <div className="container">
          <h2>Dedicated To Injured Workers</h2>
          <p className="trust__lead">
            Personal attention. Clear communication. Relentless advocacy.
          </p>
          <ul className="trust__highlights" aria-label="Key advantages">
            <li>
              <strong>Client-first approach</strong>
              <span>
                {" "}
                You get a dedicated attorney and coordinator keeping you
                informed.
              </span>
            </li>
            <li>
              <strong>No out-of-pocket fees</strong>
              <span> We only get paid when we win.</span>
            </li>
            <li>
              <strong>Multilingual support</strong>
              <span> English and Spanish support available.</span>
            </li>
          </ul>
        </div>
      </section>

      <section
        id="practice"
        ref={setSectionRef("practice")}
        className={`practice ${
          visibleSections.has("practice") ? "animate-in" : "animate-out"
        }`}
        aria-label="Workers' compensation practice areas">
        <div className="container">
          <h2 className="practice__title">Workers’ Comp Practice Areas</h2>
          <div className="practice__grid">
            <Link
              to="/services"
              className="card"
              aria-label="Accessing treatment">
              <img
                className="card__image"
                src={disClaims}
                alt="Doctor providing medical treatment"
              />
              <h3>Disability Claims</h3>
              <p>Temporary, permanent, and total disability benefits.</p>
            </Link>
            <Link to="/services" className="card" aria-label="Denials">
              <img
                className="card__image"
                src={imgHarassment}
                alt="Workers’ comp claim documents under review"
              />
              <h3>Workplace Harrassment</h3>
              <p>
                If you have been harassed at work, you may be entitled to
                compensation.
              </p>
            </Link>
            <Link
              to="/services"
              className="card"
              aria-label="On-the-job accidents">
              <img
                className="card__image"
                src={wrongTermination}
                alt="Car accident scene related to work"
              />
              <h3>Wrongful Termination</h3>
              <p>
                If you have been wrongfully terminated, you may be entitled to
                compensation.
              </p>
            </Link>
          </div>
          <div className="practice__cta">
            <Link to="/services" className="btn btn--primary">
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      <section
        id="info-split"
        ref={setSectionRef("info-split")}
        className={`info-split ${
          visibleSections.has("info-split") ? "animate-in" : "animate-out"
        }`}
        aria-label="We are here for you">
        <div className="container">
          <h2 className="info-split__title">WE ARE HERE FOR YOU</h2>
          <div className="info-split__grid">
            <div className="info-split__col">
              <p>
                Leyva & Night APC is dedicated to providing comprehensive legal
                support for workers’ compensation injuries across Los Angeles
                County. Our experienced attorneys fight tirelessly to ensure
                injured workers receive the medical care, wage benefits, and
                settlements they deserve.
              </p>
            </div>
            <div className="info-split__col">
              <p>
                At Leyva & Night, APC, we know these are challenging times for
                many in Los Angeles. Whether you've been injured at work, in an
                accident, or are dealing with the impact of COVID-19, we're here
                to help.
              </p>
              <p>
                We offer free consultations via Zoom, FaceTime, or phone — so
                getting legal support is safe and easy.
              </p>
              <p>
                We're here for you. Let us fight for the justice you deserve.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="home-testimonials"
        ref={setSectionRef("home-testimonials")}
        className={`home-testimonials ${
          visibleSections.has("home-testimonials")
            ? "animate-in"
            : "animate-out"
        }`}
        aria-label="Client testimonials">
        <div
          className="home-testimonials__bg"
          style={{ backgroundImage: `url(${heroAlt})` }}
        />
        <div className="container home-testimonials__inner">
          <div className="home-testimonials__content">
            <blockquote
              className="home-testimonials__quote"
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "ArrowLeft") showPrev();
                if (e.key === "ArrowRight") showNext();
              }}>
              “{testimonialsData[testimonialIndex]?.text}”
              <footer className="home-testimonials__footer">
                — {testimonialsData[testimonialIndex]?.name}
              </footer>
            </blockquote>
            <div
              className="home-testimonials__controls"
              role="group"
              aria-label="testimonial navigation">
              <button
                className="slider-btn"
                onClick={showPrev}
                aria-label="Previous testimonial">
                ‹
              </button>
              <button
                className="slider-btn"
                onClick={showNext}
                aria-label="Next testimonial">
                ›
              </button>
            </div>
          </div>
          <div className="home-testimonials__panel">
            <h2>Leyva & Night - Injury Lawyers</h2>
            <p>
              Injuries at work can happen any time. It does not matter if they
              are the result of company negligence or by mistake, you could be
              entitled to benefits through the California workers’ compensation
              system. This system could cover your medical bills and lost wages
              as you get back on your feet.
            </p>
            <p>
              While most on-the-job accidents entitle you to benefits, your
              employer or the insurance company might try to fight your claim.
              An experienced and knowledgeable attorney can explain your rights
              and make sure you file the strongest possible claim.
            </p>
            <Link to="/services" className="btn btn--ghost">
              View Our Services
            </Link>
          </div>
        </div>
      </section>

      <section
        id="hero-final"
        ref={setSectionRef("hero-final")}
        className={`hero-final ${
          visibleSections.has("hero-final") ? "animate-in" : "animate-out"
        }`}
        aria-label="Final call to action">
        <div className="hero-final__bg">
          <div className="hero-final__gradient hero-final__gradient--left"></div>
          <div className="hero-final__gradient hero-final__gradient--right"></div>
        </div>

        <div className="container hero-final__content">
          <div className="hero-final__block">
            <div className="hero-final__image-container">
              <img
                className="hero-final__image"
                src={leyvaLogo}
                alt="Leyva & Night APC professional team"
              />
            </div>

            <div className="hero-final__cta">
              <h2>Put Over 25 Years Of Knowledge On Your Side</h2>
              <p>
                Our staff members are fluent in Spanish and we will ensure that
                you receive all available benefits and are not cleared to return
                to work before you are able.
              </p>
              <Link to="/contact" className="btn btn--final">
                Start Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TopCases />

      <section
        id="values"
        ref={setSectionRef("values")}
        className={`values ${
          visibleSections.has("values") ? "animate-in" : "animate-out"
        }`}
        aria-label="Our values and approach">
        <div className="container">
          <div className="values__grid">
            <div className="values__column">
              <h3>Law You Can Understand</h3>
              <p>
                We know that legal action can sometimes be overwhelming. We are
                dedicated to providing you help in language that you best
                understand, not lawyer talk. If you don't feel like you
                understand your options, we will be happy to provide with an
                assessment that you can understand.
              </p>
            </div>
            <div className="values__column">
              <h3>A Focus on Results</h3>
              <p>
                The first step for our lawyers is to work with you and come up
                with the best plan to get the results for you. Through our
                understanding of the law and your understanding of the
                circumstances, we will craft a path to success. Call us when you
                need a Workers' Compensation Lawyers in Montebello.
              </p>
            </div>
            <div className="values__column">
              <h3>Get Started Today</h3>
              <p>
                Don't wait! Contact us for a free phone consultation if you or
                someone you know was involved in a car accident or work injury.
                Let us help you figure out what your next best steps are. The
                sooner you have a plan of action, the better your chances of
                taking the correct steps to get the results you want.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="locations"
        ref={setSectionRef("locations")}
        className={`locations ${
          visibleSections.has("locations") ? "animate-in" : "animate-out"
        }`}
        aria-label="Office locations">
        <div className="container">
          <div className="locations__header">
            <h2>Our Locations</h2>
            <p>Visit us at one of our convenient office locations</p>
          </div>

          <div className="locations__grid">
            <div className="location-card">
              <div className="location-card-header">
                <h3 className="office-name">Beverly Blvd Office</h3>
              </div>
              <div className="office-details">
                <div className="office-address">
                  <span>2632 W. Beverly Blvd, Montebello, CA 90640</span>
                </div>
                <div className="office-meta">
                  <div className="office-phone">(323) 278-7000</div>
                  <div className="office-hours">Mon–Fri: 9:00 AM – 5:00 PM</div>
                </div>
              </div>
              <div className="office-actions">
                <a href="tel:3232787000" className="btn btn-primary">
                  Call Office
                </a>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=2632+W+Beverly+Blvd+Montebello+CA+90640"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary">
                  Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
