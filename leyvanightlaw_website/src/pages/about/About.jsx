import React, { useState, useRef, useEffect } from "react";
import Michael from "../../assets/michaelleyvapic.webp";
import StockLawyer from "../../assets/stocklawyer1.webp";
import lawLogo from "../../assets/leyvanightlawlogo.webp";
import "./About.css";

const About = () => {
  const [expandedCard, setExpandedCard] = useState(null);
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

  const toggleCard = (cardIndex) => {
    setExpandedCard(expandedCard === cardIndex ? null : cardIndex);
  };

  const teamMembers = [
    {
      id: 1,
      name: "Michael Leyva, Esq.",
      title: "Senior Partner",
      image: Michael, // Fixed: removed the curly braces
      shortDescription:
        "Michael L. Leyva is a partner and founding member of LEYVA & NIGHT, APC, with law offices in Los Angeles, Orange and Riverside Counties.",
      fullDescription:
        "Michael L. Leyva is a partner and founding member of LEYVA & NIGHT, APC, with law offices in Los Angeles, Orange and Riverside Counties. He practices in the area of Workers’ Compensation and Personal Injury law representing seriously injured persons throughout the state of California. He has worked extensively with cases dealing with various types of catastrophic injuries, including head injuries, toxic exposure, automobile collisions and injuries at construction sites. Mr. Leyva has written and lectured on legal topics dealing primarily with Workers’ Compensation rights. The State Bar of California recognizes him as a Certified Specialist. He earned his Juris Doctor degree from Creighton University in Omaha, Nebraska and his Bachelor of Arts from the California State University in Los Angeles. Mr. Leyva is now in his 30th year of private practice with Leyva and Night, APC where he has represented thousands of satisfied clients.",
    },
    {
      id: 2,
      name: "Sanford Baddin, Esq.",
      title: "Personal Injury Attorney",
      image: StockLawyer,
      shortDescription:
        "Sanford S. Baddin has been a litigation attorney in the Southern California area for many years whose practice has emphasized automobile collision and other type accidents where there has been injuries due to someone else's  negligent behavior.",
      fullDescription:
        "Sanford S. Baddin has been a litigation attorney in the Southern California area for many years whose practice has emphasized automobile collision and other type accidents where there has been injuries due to someone else's  negligent behavior . He worked for many years for the best insurance companies before becoming a plaintiff's attorney.  This has given him unique experience on both sides of a personal injury claim. He knows best how insurance companies evaluate claims and as the result creates strategies for collecting the maximum amounts for his clients.",
    },
    {
      id: 3,
      name: "Our Paralegals",
      title: "Legal Consultant",
      image: lawLogo,
      shortDescription:
        "Our experienced legal assistants will guide you each step of the way to make insure that you are provided with the best medical care to bring you back to health and produce the best reward for your pain and suffering.",
      fullDescription:
        "Our experienced legal assistants will guide you each step of the way to make insure that you are provided with the best medical care to bring you back to health and produce the best reward for your pain and suffering. Rosa is bringing her personal injury and workers' compensation experience to our office in Montebello as well as AnnMarie and Elvia. In our Santa Ana office you will have the pleasure to be helped by Carmen who has been working for the law offices of Leyva & Night, APC for over 13 years.",
    },
  ];

  return (
    <div className="about-page">
      <h1>Our Team Workers' compensation and personal injury team</h1>
      {/* <p className="about-intro">Learn more about Leyva Night Law.</p> */}

      <div
        id="team-cards"
        ref={setSectionRef("team-cards")}
        className={`team-cards-container ${
          visibleSections.has("team-cards") ? "animate-in" : "animate-out"
        }`}>
        {teamMembers.map((member, index) => (
          <div key={member.id} className="team-card">
            <div className="card-image">
              <img src={member.image} alt={member.name} />
            </div>
            <div className="card-content">
              <h3 className="member-name">{member.name}</h3>
              <h4 className="member-title">{member.title}</h4>
              <p className="member-description">
                {expandedCard === index
                  ? member.fullDescription
                  : member.shortDescription}
              </p>
              <button
                className="show-more-btn"
                onClick={() => toggleCard(index)}>
                {expandedCard === index ? "Show Less" : "Show More"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Practice Areas Section */}
      <div
        id="practice-areas"
        ref={setSectionRef("practice-areas")}
        className={`practice-areas-section ${
          visibleSections.has("practice-areas") ? "animate-in" : "animate-out"
        }`}>
        <h2>Practice Areas</h2>
        <div className="practice-areas-grid">
          <div className="practice-area-item">Workers' Compensation</div>
          <div className="practice-area-item">Personal Injury</div>
          <div className="practice-area-item">Workplace Harassment</div>
          <div className="practice-area-item">Wrongful Death</div>
          <div className="practice-area-item">Civil Settlements</div>
          <div className="practice-area-item">Wrongful Termination</div>
          <div className="practice-area-item">Auto Accident</div>
          <div className="practice-area-item">Wage and Hour Claims</div>
        </div>
      </div>

      {/* Side-by-side sections */}
      <div
        id="side-by-side"
        ref={setSectionRef("side-by-side")}
        className={`side-by-side-sections ${
          visibleSections.has("side-by-side") ? "animate-in" : "animate-out"
        }`}>
        {/* Our Approach Section */}
        <div className="our-approach-section">
          <h2 className="our-approach-section-title">Our Approach</h2>
          <p>
            At Leyva & Night, APC, we bring the law to your corner. We are
            dedicated to understand what results you want and to help you
            understand what actions we can take on your behalf. We will work
            with you every step of the way to make sure that you understand the
            choices you are making and feel empowered to make them.
          </p>
        </div>

        {/* A Team in Your Corner Section */}
        <div className="team-corner-section">
          <h2 className="our-approach-section-title">A Team in Your Corner</h2>
          <p>
            No matter who you go within our firm, the expertise of the whole
            team weighs in on your case.
          </p>
        </div>
      </div>

      {/* Legacy of Success Section */}
      <div
        id="legacy"
        ref={setSectionRef("legacy")}
        className={`legacy-section ${
          visibleSections.has("legacy") ? "animate-in" : "animate-out"
        }`}>
        <h2>Legacy of Success</h2>
        <p>
          Leyva & Night, APC has been working together for over 30 years and has
          a proven track record of success. We use that experience to help you
          down a path to the results you need. Schedule your free phone
          consultation today.
        </p>
        <div className="cta-button">
          <a href="/contact" className="consultation-btn">
            Schedule Free Consultation
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
