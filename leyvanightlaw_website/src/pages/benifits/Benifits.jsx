import "./Benifits.css";
import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import athlete from "../../assets/athleteinj.png";
import death from "../../assets/deathbenifits.png";
import medicare from "../../assets/medicare.png";
import tempdisability from "../../assets/tempdis.png";
import supplemental from "../../assets/supplementjobdis.png";
import permmdisability from "../../assets/permdis.png";

const benefits = [
  {
    id: 1,
    image: medicare,
    title: "Medical Care",
    description:
      "Decades of combined experience focused on employment and injury law.",
  },
  {
    id: 2,
    image: tempdisability,
    title: "Temporary Disability Benefits",
    description:
      "Direct communication and tailored strategies for your unique situation.",
  },
  {
    id: 3,
    image: athlete,
    title: "Athlete Injuries",
    description:
      "A track record of favorable settlements and verdicts for our clients.",
  },
  {
    id: 4,
    image: permmdisability,
    title: "Permanent Disability Benefits",
    description:
      "Compassionate guidance that makes the process clear and stress-free.",
  },
  {
    id: 5,
    image: supplemental,
    title: "Supplemental Job Displacement Benefits",
    description:
      "We only get paid if we win your case, so your success is our priority.",
  },
  {
    id: 6,
    image: death,
    title: "Death Benefits",
    description:
      "English and Spanish-speaking team ready to assist you and your family.",
  },
];

const Benifits = () => {
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

  return (
    <div className="benefits-page">
      <div
        id="benefits-header"
        ref={setSectionRef("benefits-header")}
        className={`benefits-header ${
          visibleSections.has("benefits-header") ? "animate-in" : "animate-out"
        }`}>
        <h1>KNOW YOUR RIGHTS AND BENEFITS AVAILABLE TO INJURED WORKERS</h1>
        {/*<p>
          Have you had one of the following rights violated? Contact us today.
        </p>*/}
      </div>

      <div
        id="benefits-grid"
        ref={setSectionRef("benefits-grid")}
        className={`benefits-grid ${
          visibleSections.has("benefits-grid") ? "animate-in" : "animate-out"
        }`}>
        {benefits.map((b) => (
          <div key={b.id} className="benefit-card">
            <div className="benefit-image-wrap">
              <img src={b.image} alt={b.title} className="benefit-image" />
            </div>
            <div className="benefit-content">
              <h3 className="benefit-title">{b.title}</h3>
              <p className="benefit-description">{b.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div
        id="benefits-cta"
        ref={setSectionRef("benefits-cta")}
        className={`benefits-cta ${
          visibleSections.has("benefits-cta") ? "animate-in" : "animate-out"
        }`}>
        <div className="benefits-cta__card">
          <h2>Have You Had Any of These Rights Violated?</h2>
          <p>
            If you believe any of your workers' compensation rights have been
            violated, don't wait. Our experienced attorneys are here to help you
            fight for the benefits you deserve.
          </p>
          <Link to="/contact" className="benefits-cta__button">
            Contact Us Today
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Benifits;
