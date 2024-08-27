import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState("");
  const sendEmail = (e) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          setStateMessage("Message sent!");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage("");
          }, 5000); // hide message after 5 seconds
        },
        (error) => {
          setStateMessage("Something went wrong, please try again later");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage("");
          }, 5000); // hide message after 5 seconds
        }
      );

    // Clears the form after sending the email
    e.target.reset();
  };

  return (
    <form onSubmit={sendEmail}>
      <div className="space-y-4">
        <div className="sm:flex sm:space-x-6">
          <div className="flex-1">
            <label className="block text-sm font-medium leading-6 text-gray-900">
              First name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="first-name"
                id="first-name"
                className="block w-full rounded-md border-0 pl-2 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
              ></input>
            </div>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Last name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="last-name"
                id="last-name"
                className="block w-full rounded-md border-0 pl-2 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
              ></input>
            </div>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              className="block w-full rounded-md border-0 pl-2 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
            ></input>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Your Message
          </label>
          <div className="mt-2">
            <textarea
              id="message"
              name="message"
              className="block w-full rounded-md border-0 pl-2 pt-2 pb-20 text-top text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
              required
            ></textarea>
          </div>
        </div>
        <div className="text-center sm:text-left">
          <button
            type="button"
            disabled={isSubmitting}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </button>
        </div>
      </div>
      {stateMessage && <p>{stateMessage}</p>}
    </form>
  );
};

export default ContactForm;
