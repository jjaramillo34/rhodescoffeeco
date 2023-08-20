import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const subject = [
  "General Inquiry",
  "Ordering",
  "Delivery",
  "Catering",
  "Other",
];

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  // get env variables
  const config = {
    EMAILJS_SERVICE_ID: process.env.EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID: process.env.EMAILJS_TEMPLATE_ID,
    EMAILJS_USER_ID: process.env.EMAILJS_USER_ID,
  };

  const [status, setStatus] = useState(null);
  const [IsSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const isFormValid = () => {
    return (
      formState.name &&
      formState.email &&
      formState.message &&
      formState.subject &&
      formState.phone
    );
  };

  const isFormEmpty = () => {
    return (
      !formState.name.length ||
      !formState.email.length ||
      !formState.message.length ||
      !formState.subject.length ||
      !formState.phone.length
    );
  };

  const displayError = (error) => {
    setError(error);
    setTimeout(() => {
      setError(null);
    }, 3000);
  };

  const displaySuccess = (message) => {
    setStatus(message);
    setTimeout(() => {
      setStatus(null);
    }, 3000);
  };

  const clearForm = () => {
    setFormState({
      name: "",
      email: "",
      message: "",
      subject: "",
      phone: "",
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    if (isFormEmpty()) {
      displayError("Please fill in all fields");
      setIsSubmitting(false);
    } else if (!isFormValid()) {
      displayError("Please fill in all fields");
      setIsSubmitting(false);
    } else {
      try {
        await emailjs.send(
          config.EMAILJS_SERVICE_ID,
          config.EMAILJS_TEMPLATE_ID,
          {
            name: formState.name,
            email: formState.email,
            message: formState.message,
            subject: formState.subject,
            phone: formState.phone,
          },
          config.EMAILJS_USER_ID
        );

        displaySuccess("Message sent successfully!");
        clearForm();
        setIsSubmitting(false);
      } catch (error) {
        displayError(error.message);
        setIsSubmitting(false);
      }
    }
  };

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const handleBlur = (event) => {
    if (event.target.name === "email") {
      const isValid = event.target.value.match(
        /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i
      );

      if (!isValid) {
        displayError("Please enter a valid email address");
      }
    }
  };

  return (
    <section className="section kf-contacts-form">
      <div className="container">
        <div
          className="kf-reservation-form element-anim-1 scroll-animate"
          data-animate="active"
        >
          <div className="kf-titles align-center">
            <div className="kf-subtitle">Contact Us</div>
            <h3 className="kf-title">Send Us Message</h3>
          </div>
          <form
            id="cform"
            method="post"
            className="kf-form"
            onSubmit={handleSubmit}
            onEmptied={clearForm}
          >
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div className="kf-field">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    onChange={handleChange}
                    value={formState.name}
                    required
                  />
                  <i className="fas fa-user" />
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div className="kf-field">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    onChange={handleChange}
                    value={formState.email}
                    required
                  />
                  <i className="fas fa-envelope" />
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                {subject && (
                  <div className="kf-field">
                    <select name="subject" onChange={handleChange} required>
                      <option value={formState.subject}>Subject</option>
                      {subject.map((item, index) => (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                    <i className="fas fa-chevron-down" />
                  </div>
                )}
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="kf-field">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Your Phone"
                    onChange={handleChange}
                    value={formState.phone}
                  />
                  <i className="fas fa-phone" />
                </div>
              </div>

              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="kf-field">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    required
                    onChange={handleChange}
                    defaultValue={""}
                    value={formState.message}
                  />
                  <i className="fas fa-pencil-alt" />
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="kf-bts">
                  <button
                    type="submit"
                    className="kf-btn kf-btn-2"
                    disabled={IsSubmitting}
                  >
                    {IsSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </div>
            </div>
          </form>
          {status && (
            <div className="kf-form-message">
              <div className="alert alert-success">
                <i className="fas fa-check-circle" />
                {status}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
