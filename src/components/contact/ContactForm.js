import React from 'react';

const ContactForm = () => {
  return (
    <form
      id="contact"
      name="ContactForm"
      method="POST"
      data-netlify="true"
      action="/form-success"
      data-netlify-recaptcha="true"
    >
      <input type="hidden" name="form-name" value="ContactForm" />
      <div>
        <label htmlFor="name">
          Name <span>*</span>
        </label>
        <input id="name" name="name" type="text" required />
      </div>
      <div>
        <label htmlFor="email">
          Email <span>*</span>
        </label>
        <input id="email" name="email" type="text" required />
      </div>
      <div>
        <label htmlFor="message">
          Message <span>*</span>
        </label>
        <textarea id="message" name="message" type="text" required />
      </div>
      <div data-netlify-recaptcha="true"></div>
      <button type="submit">Send message</button>
    </form>
  );
};

export default ContactForm;
