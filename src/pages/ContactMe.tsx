function ContactMe() {
  return (
    // Header
    <div className="h-screen page contact-me-page">
      <div className="grid grid-cols-1 px-8 sm:px-0 py-8">
        <div className="space-y-4">
          <h1 className="text-5xl font-semibold">Contact Me</h1>
          <p className="text-custom-grey-text text-2xl">View LinkedIn</p>
        </div>
      </div>

      {/* Form and picture parent div*/}
      <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
        {/* Form div */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
          <div className="sm:col-span-3">
            {/* First / last name row */}
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
          <div className="sm:col-span-3">
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
          {/* Email address row */}
          <div className="sm:col-span-6">
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
          {/* Message row */}
          <div className="sm:col-span-6">
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Your Message
            </label>
            <div className="mt-2">
              <input
                id="message"
                name="message"
                type="message"
                className="block w-full rounded-md border-0 pl-2 pt-2 pb-20 text-top text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
              ></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
