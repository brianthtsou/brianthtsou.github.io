import spacePhoto from "../assets/laguna-torre-milky-way-1.jpg";

function ContactMe() {
  return (
    <div id="contactme" className="h-screen page contact-me-page">
      {/* Grid with two columns: one for header/form, one for the photo */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-8 py-8">
        {/* Header and Form in the left column */}
        <div className="space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-5xl font-semibold">Contact Me</h1>
            <p className="text-custom-grey-text text-2xl">View LinkedIn</p>
          </div>

          {/* Form */}
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
                <input
                  id="message"
                  name="message"
                  type="message"
                  className="block w-full rounded-md border-0 pl-2 pt-2 pb-20 text-top text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                ></input>
              </div>
            </div>
            <div className="text-center sm:text-left">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </div>
          </div>
        </div>

        {/* Photo in the right column */}
        <div className="flex justify-center items-center">
          <img
            src={spacePhoto}
            alt="spacePhoto"
            className="rounded-md w-4/5 sm:w-full h-auto"
            style={{ width: "65%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
