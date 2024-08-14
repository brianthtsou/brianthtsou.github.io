import headshot from "../assets/headshot.jpg";

function About() {
  return (
    <div className="min-h-screen page flex bg-red-100">
      <div className="about-page grid grid-cols-1 sm:grid-cols-2 items-stretch gap-y-8 sm:gap-y-0">
        <div className="rounded w-full mx-auto h-auto">
          <div className="space-y-8 px-8 sm:px-0">
            <h1 className="text-5xl font-semibold">About</h1>
            <p className="text-custom-grey-text text-2xl">
              Hello, I am Brian Tsou!
            </p>
            <p className="text-custom-blue-text text-xl">
              "Excepteur efficient emerging, minim veniam anim aute carefully
              curated Ginza conversation exquisite perfect nostrud nisi
              intricate Content. Qui international first-class nulla ut.
              Punctual adipisicing, essential lovely queen tempor eiusmod irure.
              Exclusive izakaya charming Scandinavian impeccable aute quality of
              life soft power pariatur Melbourne occaecat discerning. Qui
              wardrobe aliquip, et Porter destination Toto remarkable officia
              Helsinki excepteur Basset hound. Zürich sleepy perfect
              consectetur."
            </p>
            <div className="text-center sm:text-left">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Resume
              </button>
            </div>
          </div>
        </div>
        <div className="sm:relative w-full overflow-hidden">
          <img
            src={headshot}
            alt="Headshot photo"
            className="rounded-md w-3/4 mx-auto h-full object-scale-down"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default About;
