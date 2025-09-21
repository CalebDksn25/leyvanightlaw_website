import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";
import workerscomp from "../../assets/workerscomp.jpg";
import injury from "../../assets/personalinjury.jpg";
import workplace from "../../assets/workplace2.webp";
import wrongfuldeath from "../../assets/wrongfuldeath.jpg";
import carcrash from "../../assets/carcrash.jpg";
import wrongfulterm from "../../assets/wrongfulterm.webp";

const Services = () => {
  const services = [
    {
      id: 1,
      serviceType: "Workers' Compensation",
      image: workerscomp,
      description:
        "If you suffered a work injury we can help you. Use our 'Contact Us' form or call our location that is closer to your home or place of work so we can assess your situation. Remember that consultations at Leyva & Night, APC are always free.",
    },
    {
      id: 2,
      serviceType: "Personal Injury",
      image: injury,
      description:
        "Auto insurance companies have attorneys to defend their interest and so should you. If you are the victim of an auto collision, you can reach out to Leyva & Night, APC so we can look at the situation to best help you. Personal Injury could also take place in a private home or a business. Let us find out if you have a claim.",
    },
    {
      id: 3,
      serviceType: "Workplace Harrassment",
      image: workplace,
      description:
        "Under federal law and Department of Labor policy, harassment of employees based on race, color, religion, sex (including gender identity and pregnancy), national origin, age, disability, genetic information, sexual orientation, or parental status is prohibited. The best way to find out more is to call Leyva & Night, APC, or send us a message.",
    },
    {
      id: 4,
      serviceType: "Wrongful Death",
      image: wrongfuldeath,
      description:
        "When someone dies in an accident due to negligence of another person or entity, the survivors may be able to bring a wrongful death lawsuit. Contact the law offices of Leyva & Night, APC to find out about your rights. A lawsuit seeks compensation to defend the survivors' rights. Find out more by contacting us.",
    },
    {
      id: 5,
      serviceType: "Auto Accidents",
      image: carcrash,
      description:
        "If you have been involved in a car accident, you may be wondering how to best proceed with settling a vehicle damage or injury claim against the other driver, so you can put the accident behind you and get on with your life. Contact the law offices of Leyva & Night, APC so we can guide you to the best direction.",
    },
    {
      id: 6,
      serviceType: "Wrongful Termination",
      image: wrongfulterm,
      description:
        "Wrongful termination is a situation in which an employee's contract of employment has been terminated by the employer, where the termination breaches one or more terms of the contract of employment. The law offices of Leyva & Night, APC are here to find out if a wrong has been done to you.",
    },
  ];

  return (
    <div className="services-page">
      <h1>Our Services</h1>
      <p className="services-intro">
        Discover the legal services offered by Leyva Night Law.
      </p>

      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <h3 className="service-type">{service.serviceType}</h3>
            <div className="service-image">
              <img src={service.image} alt={service.serviceType} />
            </div>
            <p className="service-description">{service.description}</p>
            <Link to="/contact" className="contact-us-btn">
              Contact Us
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
