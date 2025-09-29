import React, { useRef, useEffect, useState } from "react";
import "./Location.css";

const Location = () => {
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

  const offices = [
    {
      id: 1,
      name: "Beverly Blvd Office",
      addressLine1: "",
      addressLine2: "2632 W. Beverly Blvd, Montebello, CA 90640",
      phone: "(323) 278-7000",
      hours: "Mon–Fri: 9:00 AM – 5:00 PM",
      mapsLink:
        "https://www.google.com/maps/search/?api=1&query=2632+W+Beverly+Blvd+Montebello+CA+90640",
    },
  ];

  return (
    <div className="location-page">
      <div
        id="location-header"
        ref={setSectionRef("location-header")}
        className={`location-header ${
          visibleSections.has("location-header") ? "animate-in" : "animate-out"
        }`}>
        <h1>Our Locations</h1>
        <p>Find Leyva Night Law offices near you</p>
      </div>

      <div
        id="locations-grid"
        ref={setSectionRef("locations-grid")}
        className={`locations-grid ${
          visibleSections.has("locations-grid") ? "animate-in" : "animate-out"
        }`}>
        {offices.map((office) => (
          <div key={office.id} className="location-card">
            <div className="location-card-header">
              <h3 className="office-name">{office.name}</h3>
            </div>
            <div className="office-details">
              <div className="office-address">
                <span>{office.addressLine1}</span>
                <span>{office.addressLine2}</span>
              </div>
              <div className="office-meta">
                <div className="office-phone">{office.phone}</div>
                <div className="office-hours">{office.hours}</div>
              </div>
            </div>
            <div className="office-actions">
              <a
                href={`tel:${office.phone.replace(/[^\d]/g, "")}`}
                className="btn btn-primary">
                Call Office
              </a>
              <a
                href={office.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary">
                Directions
              </a>
            </div>

            {/* Embedded Google Map */}
            <div className="location-map">
              <iframe
                title="Leyva & Night APC - Montebello Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.8735283042674!2d-118.132733623153!3d34.021457173168585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2cfc8e2f2c44b%3A0x17d359ced30b1d3a!2sLeyva%20%26%20Night%2C%20APC!5e0!3m2!1sen!2sus!4v1759156947369!5m2!1sen!2sus"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Location;
