import headshot from "../assets/headshot.jpg";

function About() {
  return (
    <div id="about" className="min-h-screen page flex bg-red-100 my-8 sm:my-0">
      <div className="about-page grid grid-cols-1 sm:grid-cols-2 items-stretch gap-y-8 sm:gap-y-0">
        <div className="rounded w-full mx-auto h-auto">
          <div className="space-y-8 px-8 sm:px-0">
            <h1 className="text-5xl font-semibold">About</h1>
            <p className="text-custom-grey-text text-2xl">Hello, I'm Brian!</p>
            <p className="text-custom-blue-text text-xl">
              I'm currently a 3rd - 4th year Computing Science student at Simon
              Fraser University, and I am currently on co-op at PayByPhone as a
              Software Test Developer. <br></br>
              <br></br> I am familiar with Python, Javascript, Java, C/C++,
              HTML/CSS, and SQL; some of the frameworks / technologies I am
              familiar with are Flask, Django, React, Express, and Node. You can
              view my resume below for more details!
              <br></br>
              <br></br>I hold a Bachelor's degree in Biology from the University
              of British Columbia, and am currently pursuing my second degree in
              Computing Science from Simon Fraser University.
              <br></br>
              <br></br>
              If you have any more questions about me or my background, or you
              just want to chat about programming, school/experiences, or life
              in general, feel free to reach out! I'm always happy to connect
              with and meet new people!
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
