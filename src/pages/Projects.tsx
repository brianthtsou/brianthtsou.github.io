interface ProjectItemProps {
  svg: React.ReactNode;
  title: string;
  stack: string;
  content: string;
}

function ProjectItem({ svg, title, stack, content }: ProjectItemProps) {
  return (
    <div className="bg-white">
      <div className="my-6 px-8 sm:px-0 flex justify-center items-center">
        {svg}
      </div>
      <div className="space-y-2 my-6 px-8 sm:px-0 flex-col flex justify-center items-center">
        <h1 className="text-2xl">{title}</h1>
        <p className="text-custom-grey-text text-lg text-center">{stack}</p>
        <p className="text-custom-blue-text text-lg text-center mx-6">
          {content}
        </p>
      </div>
    </div>
  );
}

function Projects() {
  return (
    // Header
    <div id="projects" className="sm:h-screen page projects-page bg-green-300">
      <div className="grid grid-cols-1 px-8 sm:px-0 py-8">
        <div className="space-y-4">
          <h1 className="text-5xl font-semibold">Projects</h1>
          <p className="text-custom-grey-text text-2xl">View Github</p>
        </div>
      </div>
      {/* Project grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-6 gap-x-6">
        <ProjectItem
          svg={
            <svg
              className="h-20 w-20 text-slate-500"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <path d="M14 3v4a1 1 0 0 0 1 1h4" />{" "}
              <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />{" "}
              <circle cx="11" cy="16" r="1" />{" "}
              <polyline points="12 16 12 11 14 12" />
            </svg>
          }
          title="Spotify Playlist Generator"
          stack="Python, Flask, HTML/CSS, Javascript, Bootstrap, SQLAlchemy"
          content="A web application connected to a user's Spotify account that creates personalized playlists based on their music taste!"
        ></ProjectItem>
        <ProjectItem
          svg={
            <svg
              className="h-20 w-20 text-slate-500"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <path d="M14 3v4a1 1 0 0 0 1 1h4" />{" "}
              <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />{" "}
              <circle cx="11" cy="16" r="1" />{" "}
              <polyline points="12 16 12 11 14 12" />
            </svg>
          }
          title="E-Commerce Web Application"
          stack="Python, Django, HTML/CSS, Bootstrap, SQLite3"
          content="A full stack web application that allows users to create accounts, list and bid on items for auction, and comment on and keep track of item postings."
        ></ProjectItem>
        <ProjectItem
          svg={
            <svg
              className="h-20 w-20 text-slate-500"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <path d="M14 3v4a1 1 0 0 0 1 1h4" />{" "}
              <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />{" "}
              <circle cx="11" cy="16" r="1" />{" "}
              <polyline points="12 16 12 11 14 12" />
            </svg>
          }
          title="Productivity Bot - Discord.js"
          stack="JavaScript, Node, MongoDB"
          content="Productivity tracking Discord bot that can be added to servers, keeping track of days worked via messages and leaderboards, with data stored in MongoDB"
        ></ProjectItem>
      </div>
    </div>
  );
}

export default Projects;
