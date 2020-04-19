import React from 'react';

const ContactForm = () => {
  return (
    <form
      id="contact"
      name="contact"
      method="post"
      data-netlify="true"
      action="/form-success"
    >
      <input type="hidden" name="bot-field" />
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
      <button type="submit">Send message</button>
    </form>
  );
};

export default ContactForm;
