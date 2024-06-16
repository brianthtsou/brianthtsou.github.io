function Navbar() {
  return (
    <nav className="bg-white text-black">
      <div className="container mx-auto px-4 py-5 md:flex items-center justify-between gap-6">
        {/* <!--Logo --> */}
        <div className="flex items-center justify-between md:w-auto w-full">
          <a href="#" className="py-5 px-2 text-black flex-1 font-bold text-xl">
            Brian Tsou
          </a>

          {/* <!--Mobile menu icon --> */}
          <div className="md:hidden flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
              />
            </svg>
          </div>
        </div>

        <div className="hidden md:flex md:flex-row flex-col items-center justify-end md:space-x-1 pb-3 md:pb-0 navigation-menu">
          <a href="#" className="py-2 px-4 block">
            About
          </a>
          <a href="#" className="py-2 px-4 block">
            Experience
          </a>
          <a href="#" className="py-2 px-4 block">
            Projects
          </a>
          <a href="#" className="py-2 px-4 block">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
