interface GridItemProps {
  children: React.ReactNode;
  spacingClass: string;
  visualClass: string;
}

interface ExperienceItemProps {
  svg: React.ReactNode;
  title: string;
  location: string;
  date: string;
  content: string;
}

function GridItem({ children, spacingClass, visualClass }: GridItemProps) {
  return (
    <div className={`${spacingClass} ${visualClass} w-full mx-auto h-auto`}>
      {children}
    </div>
  );
}

function ExperienceItem({
  svg,
  title,
  location,
  date,
  content,
}: ExperienceItemProps) {
  return (
    <div>
      <div className="px-8 sm:px-0">{svg}</div>
      <div className="space-y-2 px-8 sm:px-0">
        <h1 className="text-2xl">{title}</h1>
        <p className="text-custom-grey-text text-lg">{location}</p>
        <p className="text-custom-grey-text text-lg">{date}</p>
        <p className="text-custom-blue-text text-lg">{content}</p>
      </div>
    </div>
  );
}

function Experience() {
  return (
    // Header
    <div className="h-screen experience-page">
      <div className="grid grid-cols-1 px-8 sm:px-0 py-8">
        <div className="space-y-4">
          <h1 className="text-5xl font-semibold">Experience</h1>
          <p className="text-custom-grey-text text-2xl">View LinkedIn</p>
        </div>
      </div>
      {/* grid of experience items */}
      <div className="grid grid-cols-6 space-y-6">
        <GridItem
          spacingClass="col-span-6 sm:col-span-5"
          visualClass="bg-blue-100"
        >
          <ExperienceItem
            svg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-9 mb-2 "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z"
                />
              </svg>
            }
            title="Systems/Software QA Analyst"
            location="Gatekeeper Systems - Abbotsford, BC"
            date="January 2024 - August 2024"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          ></ExperienceItem>
        </GridItem>
        <div className="side-col col-span-1 bg-red-100">Hi</div>
        <GridItem
          spacingClass="col-span-6 sm:col-span-5"
          visualClass="bg-blue-100"
        >
          <ExperienceItem
            svg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-9 mb-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V13.5Zm0 2.25h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V18Zm2.504-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25Z"
                />
              </svg>
            }
            title="Accounting Operations Associate"
            location="Gatekeeper Systems - Abbotsford, BC"
            date="January 2024 - August 2024"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          ></ExperienceItem>
        </GridItem>
        <div className="side-col col-span-1 bg-red-100">
          <br></br>Hi
        </div>
      </div>
    </div>
  );
}

export default Experience;
