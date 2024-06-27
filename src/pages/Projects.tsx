interface ProjectItemProps {
  svg: React.ReactNode;
  title: string;
  date: string;
  content: string;
}

function ProjectItem({ svg, title, date, content }: ProjectItemProps) {
  return (
    <div className="bg-white">
      <div className="my-6 px-8 sm:px-0 flex justify-center items-center">
        {svg}
      </div>
      <div className="space-y-2 px-8 sm:px-0">
        <h1 className="text-2xl">{title}</h1>
        <p className="text-custom-grey-text text-lg">{date}</p>
        <p className="text-custom-blue-text text-lg">{content}</p>
      </div>
    </div>
  );
}

function Projects() {
  return (
    // Header
    <div className="h-screen page projects-page">
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
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <path d="M14 3v4a1 1 0 0 0 1 1h4" />{" "}
              <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />{" "}
              <circle cx="11" cy="16" r="1" />{" "}
              <polyline points="12 16 12 11 14 12" />
            </svg>
          }
        ></ProjectItem>
        <ProjectItem
          svg={
            <svg
              className="h-20 w-20 text-slate-500"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <path d="M14 3v4a1 1 0 0 0 1 1h4" />{" "}
              <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />{" "}
              <circle cx="11" cy="16" r="1" />{" "}
              <polyline points="12 16 12 11 14 12" />
            </svg>
          }
        ></ProjectItem>
      </div>
    </div>
  );
}

export default Projects;
