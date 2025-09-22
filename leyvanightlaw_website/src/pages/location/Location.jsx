import React from "react";
import "./Location.css";

const Location = () => {
  const offices = [
    {
      id: 1,
      name: "Los Angeles Office",
      addressLine1: "1234 Wilshire Blvd, Suite 500",
      addressLine2: "Los Angeles, CA 90017",
      phone: "(213) 000-0000",
      hours: "Mon–Fri: 9:00 AM – 5:00 PM",
      mapsLink:
        "https://www.google.com/maps/search/?api=1&query=1234+Wilshire+Blvd+Suite+500+Los+Angeles+CA+90017",
    },
    {
      id: 2,
      name: "Santa Ana Office",
      addressLine1: "5678 Main St, Suite 210",
      addressLine2: "Santa Ana, CA 92701",
      phone: "(714) 000-0000",
      hours: "Mon–Fri: 9:00 AM – 5:00 PM",
      mapsLink:
        "https://www.google.com/maps/search/?api=1&query=5678+Main+St+Suite+210+Santa+Ana+CA+92701",
    },
    {
      id: 3,
      name: "Riverside Office",
      addressLine1: "3456 Market St, Suite 300",
      addressLine2: "Riverside, CA 92501",
      phone: "(951) 000-0000",
      hours: "Mon–Fri: 9:00 AM – 5:00 PM",
      mapsLink:
        "https://www.google.com/maps/search/?api=1&query=3456+Market+St+Suite+300+Riverside+CA+92501",
    },
    {
      id: 4,
      name: "Montebello Office",
      addressLine1: "7890 Beverly Blvd, Suite 120",
      addressLine2: "Montebello, CA 90640",
      phone: "(323) 000-0000",
      hours: "Mon–Fri: 9:00 AM – 5:00 PM",
      mapsLink:
        "https://www.google.com/maps/search/?api=1&query=7890+Beverly+Blvd+Suite+120+Montebello+CA+90640",
    },
  ];

  return (
    <div className="location-page">
      <div className="location-header">
        <h1>Our Locations</h1>
        <p>Find Leyva Night Law offices near you</p>
      </div>

      <div className="locations-grid">
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Location;
