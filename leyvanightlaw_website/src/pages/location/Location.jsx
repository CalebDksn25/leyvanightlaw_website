import React from "react";
import "./Location.css";

const Location = () => {
  const offices = [
    {
      id: 1,
      name: "Beverly Blvd Office",
      //addressLine1: "2632 W. Beverly Blvd",
      addressLine2: "2632 W. Beverly Blvd, Montebello, CA 90640",
      phone: "(323) 278-7000",
      hours: "Mon–Fri: 9:00 AM – 5:00 PM",
      mapsLink:
        "https://www.google.com/maps/search/?api=1&query=1234+Wilshire+Blvd+Suite+500+Los+Angeles+CA+90017",
    },
    {
      id: 2,
      name: "Santa Ana Office",
      //addressLine1: "1043 W. Civic Ctr. Dr, Suite 200",
      addressLine2: "1043 W. Civic Ctr. Dr, #200, Santa Ana, CA 92703",
      phone: "(714) 565-2760",
      hours: "Mon–Fri: 9:00 AM – 5:00 PM",
      mapsLink:
        "https://www.google.com/maps/search/?api=1&query=5678+Main+St+Suite+210+Santa+Ana+CA+92701",
    },
    {
      id: 3,
      name: "Riverside Office",
      addressLine1: "Riverside, CA 92501",
      addressLine2: "",
      phone: "(951) 689-8000",
      hours: "Mon–Fri: 9:00 AM – 5:00 PM",
      mapsLink:
        "https://www.google.com/maps/search/?api=1&query=3456+Market+St+Suite+300+Riverside+CA+92501",
    },
    {
      id: 4,
      name: "Hollywood Office",
      addressLine1: "North Hollywood, CA 91602",
      addressLine2: "",
      phone: "(818) 755-5040",
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
