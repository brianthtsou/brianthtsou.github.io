interface GridItemProps {
  children: React.ReactNode;
  spacingClass: string;
  visualClass: string;
}

interface ExperienceItemProps {
  link: string;
  svg: React.ReactNode;
  title: string;
  location: string;
  date: string;
  content: React.ReactNode;
}

function GridItem({ children, spacingClass, visualClass }: GridItemProps) {
  return (
    <div className={`${spacingClass} ${visualClass} w-full mx-auto h-auto`}>
      {children}
    </div>
  );
}

function ExperienceItem({
  link,
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
        <div className="text-custom-grey-text text-lg">
          <a href={link}>{location}</a>
        </div>
        <div className="text-custom-grey-text text-lg">{date}</div>
        <div className="text-custom-blue-text text-lg">{content}</div>
      </div>
    </div>
  );
}

function Experience() {
  return (
    // Header
    <div id="experience" className="min-h-screen page experience-page">
      <div className="grid grid-cols-1 px-8 sm:px-0 py-8">
        <div className="space-y-4">
          <h1 className="text-5xl font-semibold">Experience</h1>
          <p className="text-custom-grey-text text-2xl">
            <a href="https://www.linkedin.com/in/brianthtsou/">View LinkedIn</a>
          </p>
        </div>
      </div>
      {/* grid of experience items */}
      <div className="grid grid-cols-6 gap-y-12">
        <GridItem spacingClass="col-span-6 sm:col-span-5" visualClass="">
          <ExperienceItem
            link="https://www.gatekeeper-systems.com/"
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z"
                />
              </svg>
            }
            title="Systems/Software QA Analyst"
            location="Gatekeeper Systems - Abbotsford, BC"
            date="January 2024 - August 2024"
            content={
              <>
                In this role, my primary focus was to test proprietary software
                as well as digital video recording firmware, as well as
                implementing new tooling into the QA workflow.
                <br />
                <br />
                Some of my key contributions were: <br />
                <ul className="list-disc list-inside pl-4 pt-2">
                  <li>
                    Added and implemented a feature to an internal testing tool
                    using Python (Flask), streamlining and reducing the time
                    needed for log data retrieval by 60%
                  </li>
                  <li>
                    Developed Bash scripts to detect the presence of unwanted /
                    unsecured data within firmware files using Regex filters
                  </li>
                  <li>
                    {" "}
                    Wrote Powershell scripts to automate the execution processes
                    of internal testing tools, reducing manual input needed by
                    80%
                  </li>
                  <li>
                    {" "}
                    Created and presented detailed test reports and
                    documentation regarding test execution and outcome
                  </li>
                </ul>
              </>
            }
          ></ExperienceItem>
        </GridItem>
        <div className="side-col col-span-1"></div>
        <GridItem spacingClass="col-span-6 sm:col-span-5" visualClass="">
          <ExperienceItem
            link="https://www.bench.co/"
            svg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width-="1.5"
                stroke="currentColor"
                className="size-9 mb-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V13.5Zm0 2.25h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V18Zm2.504-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25Z"
                />
              </svg>
            }
            title="Accounting Operations Associate"
            location="Bench Accounting - Vancouver, BC"
            date="August 2020 - December 2021"
            content={
              <>
                My primary responsibilities in this role were to manage and
                maintain specialized bookkeeping services for a portfolio of 35+
                US-based small businesses.
                <br />
                <br />
                Some of the key skills and experiences of this role were: <br />
                <ul className="list-disc list-inside pl-4 pt-2">
                  <li>
                    Utilized software platforms such as Salesforce, Tableau,
                    Slack, Confluence, and Bench’s proprietary bookkeeping
                    software for cross-departmental collaboration and
                    communication
                  </li>
                  <li>
                    Spearheaded projects and created documentation for utilizing
                    Excel macros, particularly to streamline the processing of
                    data files from common merchant vendors, allowing for ∼60%
                    reduced turnaround time
                  </li>
                </ul>
              </>
            }
          ></ExperienceItem>
        </GridItem>
        <div className="side-col col-span-1">
          <br></br>
        </div>
      </div>
    </div>
  );
}

export default Experience;
