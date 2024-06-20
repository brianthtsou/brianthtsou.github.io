interface GridItemProps {
  children: React.ReactNode;
  spacingClass: string;
  visualClass: string;
}

interface FlexItemProps {
  children: React.ReactNode;
  spacingClass: string;
  visualClass: string;
}

function GridItem({ children, spacingClass, visualClass }: GridItemProps) {
  return (
    <div className={`${spacingClass} ${visualClass} w-full mx-auto h-auto`}>
      {children}
    </div>
  );
}

function FlexItem({ children, spacingClass, visualClass }: FlexItemProps) {
  return (
    <div className={`${spacingClass} ${visualClass} w-full sm:w-3/4`}>
      {children}
    </div>
  );
}

function Experience() {
  return (
    <div className="h-screen experience-page">
      <div className="grid grid-cols-1 px-8 sm:px-0">
        {/* Use grid-cols-1 if you want a single column layout */}
        <div className="space-y-4">
          <h1 className="text-5xl font-semibold">Experience</h1>
          <p className="text-custom-grey-text text-2xl">View LinkedIn</p>
        </div>
      </div>
      {/* 2nd row */}
      <div className="grid grid-cols-6">
        <GridItem
          spacingClass="col-span-6 sm:col-span-5"
          visualClass="bg-blue-100"
        >
          <div className="px-8 sm:px-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6 mb-2 "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z"
              />
            </svg>
          </div>
          <div className="space-y-2 px-8 sm:px-0">
            <h1 className="text-2xl">Systems/Software QA Analyst</h1>
            <p className="text-custom-grey-text text-lg">
              Gatekeeper Systems - Abbotsford, BC
            </p>
            <p className="text-custom-blue-text text-lg">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
          </div>
        </GridItem>
        <div className="side-col col-span-1 bg-red-100">Hi</div>
      </div>
    </div>
  );
}

function Experience2() {
  return (
    <div className="experience-page grid grid-cols-1 sm:grid-cols-2 items-stretch gap-y-8 sm:gap-y-0 bg-green-100">
      <GridItem spacingClass="py-8" visualClass="bg-blue-100">
        <div className="space-y-8 px-8 sm:px-0">
          <h1 className="text-5xl font-semibold">Experience</h1>
          <p className="text-custom-grey-text text-2xl">View LinkedIn</p>
        </div>
      </GridItem>
      <div className="col-span-1"></div>
      <GridItem spacingClass="" visualClass="bg-blue-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-6 mb-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z"
          />
        </svg>
        <div className="space-y-2 px-8 sm:px-0">
          <h1 className="text-2xl">Systems/Software QA Analyst</h1>
          <p className="text-custom-grey-text text-lg">
            Gatekeeper Systems - Abbotsford, BC
          </p>
        </div>
      </GridItem>
    </div>
  );
}

export default Experience;
Experience2;
