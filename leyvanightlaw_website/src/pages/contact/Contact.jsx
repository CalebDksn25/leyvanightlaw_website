import React, { useState } from "react";
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitStatus("idle");

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Placeholder for form submission
    setSubmitStatus("not_configured");
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
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>Get in touch with Leyva Night Law for a free consultation.</p>
        <p className="phone-number">Phone: (323) 278-7000</p>
      </div>

      <div className="contact-form-container">
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

          {submitStatus === "not_configured" && (
            <div className="notice not-configured">
              Email sending is not yet configured. Share your preferred service
              (Formspree, EmailJS, or backend endpoint), and I will wire this
              up.
            </div>
          )}

          <div className="form-actions">
            <button type="submit" className="btn primary">
              Send Message
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
