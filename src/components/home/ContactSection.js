import React, { useState } from "react";
import { useForm, useField } from "react-form";
import ContactImg from "images/microsite-192x192.png";
import { sendDatatoAWS } from "api/";

const INFO_EMAIL = "info@microsite.com";

const NameField = (props) => {
  const {
    meta: { error, isTouched, isValidating },
    getInputProps,
  } = useField("fullName", {
    validate: (value) => {
      if (!value) {
        return "a name is required";
      }
      return false;
    },
  });

  return (
    <>
      <input {...props} {...getInputProps()} />{" "}
      {isValidating ? (
        <em>Validating...</em>
      ) : isTouched && error ? (
        <em>{error}</em>
      ) : null}
    </>
  );
};

const EmailAddressField = (props) => {
  const {
    meta: { error, isTouched, isValidating },
    getInputProps,
  } = useField("emailAddress", {
    validate: (value) => {
      const regex = new RegExp("[a-z0-9]+@[a-z]+\\.[a-z]{2,3}");
      if (!value || !regex.test(value)) {
        return "please enter a valid email address";
      }
      return false;
    },
  });

  return (
    <>
      <input {...props} {...getInputProps()} />{" "}
      {isValidating ? (
        <em>Validating...</em>
      ) : isTouched && error ? (
        <em>{error}</em>
      ) : null}
    </>
  );
};

const MessageField = (props) => {
  const {
    meta: { error, isTouched, isValidating },
    getInputProps,
  } = useField("message", {
    validate: (value) => {
      if (!value) {
        return "a Message is required";
      }
      return false;
    },
  });

  return (
    <>
      <textarea {...props} {...getInputProps()} />{" "}
      {isValidating ? (
        <em>Validating...</em>
      ) : isTouched && error ? (
        <em>{error}</em>
      ) : null}
    </>
  );
};

export default function ContactSection() {
  const [isSent, setIsSent] = useState(false);
  const [isError, setError] = useState(false);
  const {
    Form,
    meta: { canSubmit },
  } = useForm({
    onSubmit: async (values, _instance) => {
      const response = await sendDatatoAWS(values);
      if (!response) {
        setError(true);
      } else {
        console.log("confirmed!");
        setIsSent(true);
      }
    },
    debugForm: false,
  });

  return (
    <section id="contact" className="blue-section">
      <div className="container">
        <div className="section-column">
          <div className="row">
            <div className="col-12 col-md-4">
              <img
                className="img-fluid contact-img"
                src={ContactImg}
                alt="contact I'm Loving Me Book"
              />
            </div>
            <div className="col-12 col-md-8">
              <p className="h2 display-6 fw-bold">Contact Us</p>
              <p className="fs-5 lh-base my-4">
              Thanks for visiting the site. Feel free to reach out with questions or just to say hello. We would love to hear from you.
              </p>
              <ul className="list-unstyled">
                <li className="fs-5">
                  Email: <a href={`mailto:${INFO_EMAIL}`}>{INFO_EMAIL}</a>
                </li>
              </ul>
              <div className="fs-5 lh-base border bg-light shadow p-4 my-4">
                {isSent && (
                  <div className="col-12">
                    <p className="h3">Confirmation</p>
                    <p className="fs-5">
                      Message Sent. We will get back to you shortly.
                    </p>
                  </div>
                )}
                {isError && (
                  <div className="col-12">
                    <p className="h3">Something Went Wrong</p>
                    <p className="fs-5">
                      Message was unable to be sent. Try again later.
                    </p>
                  </div>
                )}
                {!isSent && (
                  <Form id="contact-form">
                    <div className="mb-3">
                      <label htmlFor="fullName" className="form-label">
                        Name
                      </label>
                      <NameField
                        id="fullName"
                        type="text"
                        className="form-control"
                        placeholder="placeholder"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email address
                      </label>
                      <EmailAddressField
                        id="emailAddress"
                        text="email"
                        className="form-control"
                        placeholder="john.doe@email.com"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">
                        Message
                      </label>
                      <MessageField
                        id="message"
                        type="textarea"
                        className="form-control"
                        rows="3"
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={!canSubmit || isError}
                    >
                      Submit
                    </button>
                  </Form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
