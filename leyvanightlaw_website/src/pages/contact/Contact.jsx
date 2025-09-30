import React, { useState, useRef, useEffect } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    subject: "",
    customSubject: "",
    content: "",
    serviceType: "",
  });

  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState("idle");
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

  const services = [
    "Workers' Compensation",
    "Personal Injury",
    "Workplace Harassment",
    "Wrongful Death",
    "Civil Settlements",
    "Wrongful Termination",
    "Auto Accident",
    "Wage and Hour Claims",
    "Other",
  ];

  const emailRegex =
    /^(?:[a-zA-Z0-9_'^&/+-])+(?:\.(?:[a-zA-Z0-9_'^&/+-])+)*@(?:(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-zA-Z-]*[a-zA-Z]:.+)\])$/;
  const phoneRegex = /^[+]?[1-9][\d]{0,15}$/;

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.contact.trim()) {
      newErrors.contact = "Contact information is required";
    } else if (
      !emailRegex.test(formData.contact) &&
      !phoneRegex.test(formData.contact.replace(/[\s\-()]/g, ""))
    ) {
      newErrors.contact = "Please enter a valid email or phone number";
    }

    if (!formData.serviceType) {
      newErrors.serviceType = "Please select a service type";
    }

    if (formData.serviceType === "Other" && !formData.customSubject.trim()) {
      newErrors.customSubject = "Please specify the subject";
    }

    if (!formData.content.trim()) {
      newErrors.content = "Message content is required";
    }

    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleServiceChange = (e) => {
    const value = e.target.value;
    setFormData((prev) => ({
      ...prev,
      serviceType: value,
      subject: value === "Other" ? "" : value,
      customSubject: value === "Other" ? prev.customSubject : "",
    }));

    if (errors.serviceType) {
      setErrors((prev) => ({
        ...prev,
        serviceType: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus("idle");

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitStatus("sending");

    try {
      const subject =
        formData.serviceType === "Other"
          ? formData.customSubject
          : formData.subject;

      // Use API route for both development and production
      const apiUrl =
        process.env.NODE_ENV === "development"
          ? "http://localhost:3001/api/contact"
          : "/api/contact";

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.contact,
          subject: subject,
          serviceType: formData.serviceType,
          message: formData.content,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      } else {
        setSubmitStatus("success");
      }

      setSubmitStatus("success");

      handleReset();
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    }
    setSubmitStatus("success");
  };

  const handleReset = () => {
    setFormData({
      name: "",
      contact: "",
      subject: "",
      customSubject: "",
      content: "",
      serviceType: "",
    });
    setErrors({});
    setSubmitStatus("idle");
  };

  return (
    <div className="contact-page">
      <div
        id="contact-header"
        ref={setSectionRef("contact-header")}
        className={`contact-header ${
          visibleSections.has("contact-header") ? "animate-in" : "animate-out"
        }`}>
        <h1>Contact Us</h1>
        <p>Get in touch with Leyva Night Law for a free consultation.</p>
        <p className="phone-number">Phone: (323) 278-7000</p>
      </div>

      <div
        id="contact-form"
        ref={setSectionRef("contact-form")}
        className={`contact-form-container ${
          visibleSections.has("contact-form") ? "animate-in" : "animate-out"
        }`}>
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={errors.name ? "error" : ""}
              placeholder="Your full name"
            />
            {errors.name && (
              <span className="error-message">{errors.name}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="contact">Contact (Email or Phone) *</label>
            <input
              type="text"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleInputChange}
              className={errors.contact ? "error" : ""}
              placeholder="your@email.com or (323) 555-0123"
            />
            {errors.contact && (
              <span className="error-message">{errors.contact}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="serviceType">Service Type *</label>
            <select
              id="serviceType"
              name="serviceType"
              value={formData.serviceType}
              onChange={handleServiceChange}
              className={errors.serviceType ? "error" : ""}>
              <option value="">Select a service</option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
            {errors.serviceType && (
              <span className="error-message">{errors.serviceType}</span>
            )}
          </div>

          {formData.serviceType === "Other" && (
            <div className="form-group">
              <label htmlFor="customSubject">Subject *</label>
              <input
                type="text"
                id="customSubject"
                name="customSubject"
                value={formData.customSubject}
                onChange={handleInputChange}
                className={errors.customSubject ? "error" : ""}
                placeholder="Please specify your legal matter"
              />
              {errors.customSubject && (
                <span className="error-message">{errors.customSubject}</span>
              )}
            </div>
          )}

          <div className="form-group">
            <label htmlFor="content">Message *</label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleInputChange}
              className={errors.content ? "error" : ""}
              rows="6"
              placeholder="Please describe your legal situation in detail..."
            />
            {errors.content && (
              <span className="error-message">{errors.content}</span>
            )}
          </div>

          {submitStatus === "sending" && (
            <div className="notice sending">Sending your message...</div>
          )}

          {submitStatus === "success" && (
            <div className="notice success">
              <strong>✓ Success!</strong> Your message has been sent
              successfully. We'll get back to you soon.
              <button
                type="button"
                className="notice-close"
                onClick={() => setSubmitStatus("idle")}
                aria-label="Close notification">
                ×
              </button>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="notice error">
              Sorry, there was an error sending your message. Please try again
              or call us directly at (323) 278-7000.
            </div>
          )}

          {submitStatus === "not_configured" && (
            <div className="notice not-configured">
              Currently under maintenance. Please check back later.
            </div>
          )}

          <div className="form-actions">
            <button
              type="submit"
              className="btn primary"
              disabled={submitStatus === "sending"}>
              {submitStatus === "sending" ? "Sending..." : "Send Message"}
            </button>
            <button
              type="button"
              className="btn secondary"
              onClick={handleReset}>
              Clear Form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
