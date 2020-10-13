import React, { useState } from "react";
import styles from "./contactus.module.scss";
import classNames from "classnames";
import axios from "axios";
export const ContactUs = () => {
  const [firstname, setFirstName] = useState();
  const [lastname, setLastName] = useState();
  const [email, setEmail] = useState();
  const [validEmail, setValidEmail] = useState(true);
  const [message, setMessage] = useState();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  function emailSubmit(event) {
    event.preventDefault();
    setShowLoading(true);
    axios
      .post("/email", { message, email, first: firstname, last: lastname })
      .then((res) => {
        setShowLoading(false);
        setShowConfirmation(true);
      });
  }
  return (
    <div className={styles.ContactUs}>
      <div className={styles.header}>
        <h5>Got a question ?</h5>
        <h1>CONTACT TEST-N-FLY&trade;</h1>
      </div>
      <div className={styles.bodyContainer}>
        <div>
          <img src="/images/email.png" />
        </div>
        {showConfirmation ? (
          <div className={styles.confirmation}>
            {" "}
            <h2>Thank you for reaching out! We will be in touch shortly.</h2>
          </div>
        ) : (
          <form onSubmit={emailSubmit}>
            <div className={styles.inputHolder}>
              <input
                value={firstname}
                onChange={({ target }) => setFirstName(target.value)}
                name="first_name"
                id="first_name"
                className={classNames({ [styles.hasVal]: firstname })}
              />
              <label htmlFor="first_name">First Name</label>
            </div>
            <div className={styles.inputHolder}>
              <input
                value={lastname}
                onChange={({ target }) => setLastName(target.value)}
                name="last_name"
                id="last_name"
                className={classNames({ [styles.hasVal]: lastname })}
              />
              <label htmlFor="last_name">Last Name</label>
            </div>
            <div className={styles.inputHolder}>
              <input
                value={email}
                onChange={({ target }) => {
                  setEmail(target.value);
                  if (validateEmail(target.value))
                    setValidEmail(validateEmail(target.value));
                }}
                name="email"
                id="email"
                className={classNames({ [styles.hasVal]: email })}
                onBlur={() => setValidEmail(validateEmail(email))}
              />
              <label htmlFor="email">Email</label>
              {validEmail ? (
                ""
              ) : (
                <span className={styles.error}>
                  Please insert a valid email
                </span>
              )}
            </div>

            <textarea
              value={message}
              onChange={({ target }) => setMessage(target.value)}
              name="message"
              placeholder="Your message here"
            />

            <button
              disabled={!(firstname && lastname && validEmail && message)}
              className="flip"
              type="submit"
              className={classNames({ [styles.loading]: showLoading })}
            >
              {showLoading ? "" : "Send"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
