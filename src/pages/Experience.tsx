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
    <div
      className={`${spacingClass} ${visualClass} w-full sm:w-3/4 mx-auto h-auto object-contain`}
    >
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
    <div>
      <div className="flex justify-center items-center">
        {" "}
        <div className="grid grid-cols-1 place-items-center">
          {" "}
          {/* Use grid-cols-1 if you want a single column layout */}
          <div className="space-y-8">
            <h1 className="text-5xl font-semibold">Experience</h1>
            <p className="text-custom-grey-text text-2xl">View LinkedIn</p>
          </div>
        </div>
      </div>
      {/* 2nd row */}
      <div className="grid grid-cols-3 place-items-center">
        <GridItem spacingClass="col-span-2" visualClass="bg-blue-100">
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
