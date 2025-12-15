const Nav = () => {
  return (
    <>
      <section>
        <nav className="font-inter mx-auto h-auto w-full max-w-screen-2xl md:relative md:top-0">
          <div className="flex flex-col px-6 py-6 md:flex-row md:items-center md:justify-between md:px-10 md:py-4 xl:px-20">
            <a href="javascript:void(0);">
              <img src="/logo.png" alt="" className="h-24 w-auto" />
            </a>

            <div className="flex flex-col space-y-8 md:flex md:flex-row md:space-x-3 md:space-y-0">
              <a
                href="javascript:void(0);"
                className="font-inter rounded-lg md:px-6 md:py-4 md: md:hover:text-gray-800"
              >
                How did I built this ?
              </a>
              <a
                className="font-inter flex items-center gap-2 rounded-lg bg-black px-8 py-4 text-center text-white hover:bg-gray-800"
                target="_blank"
                href="https://github.com/ayushniraz"
              >
                <svg
                  xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 .5A11.5 11.5 0 0 0 .5 12.3c0 5.2 3.4 9.6 8.2 11.2.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1 1.6-.8 1.6-.8.9-1.6 2.4-1.1 3-.8.1-.7.4-1.1.7-1.3-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.3a11 11 0 0 1 6 0c2.3-1.6 3.3-1.3 3.3-1.3.6 1.6.2 2.8.1 3.1.8.9 1.2 2 1.2 3.3 0 4.6-2.7 5.6-5.3 5.9.4.4.8 1 .8 2v3c0 .3.2.7.8.6a11.7 11.7 0 0 0 7.7-11.1A11.5 11.5 0 0 0 12 .5Z"
                    clipRule="evenodd"
                  />
                </svg>
                Github
              </a>
            </div>
            <a
              href="javascript:void(0);"
              className="absolute right-5 md:hidden"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.75 12H20.25"
                  stroke="#160042"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M3.75 6H20.25"
                  stroke="#160042"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M3.75 18H20.25"
                  stroke="#160042"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </a>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Nav;
