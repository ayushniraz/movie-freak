const MovieList = ({ movies }:any) => {
  return (
    <>
      <section>
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
          <h2 className="text-center text-3xl font-bold md:text-5xl">
            {" "}
            Filtered Movies{" "}
          </h2>{" "}
          <p className="mx-auto mb-8 mt-4 text-center text-sm text-gray-500 sm:text-base md:mb-12 lg:mb-16">
            {" "}
            Here are a few of our favorite movies.
          </p>
          <div className="grid grid-cols-2 justify-center justify-items-center gap-5 sm:justify-items-stretch md:grid-cols-2 md:gap-8">
            {movies ? (
              <>
                {movies.map((eachMovie:any) => {
                  return (
                    <>
                      <div className="grid w-full grid-cols-1 gap-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg md:grid-cols-2">
                        {/* Poster */}
                        <img
                          src={
                            eachMovie?.Poster !== "N/A"
                              ? eachMovie?.Poster
                              : "https://ih1.redbubble.net/image.4905811447.8675/flat,750x,075,f-pad,750x1000,f8f8f8.jpg"
                          }
                          alt={eachMovie?.Title}
                          className="h-80 w-full rounded-xl object-cover"
                        />

                        {/* Details */}
                        <div className="flex flex-col justify-between">
                          <div>
                            <h2 className="text-2xl font-bold text-gray-900">
                              {eachMovie?.Title}
                            </h2>

                            <div className="mt-2 flex flex-col gap-1 text-gray-600">
                              <p>
                                <span className="font-medium">Year:</span>{" "}
                                {eachMovie?.Year}
                              </p>
                              <p>
                                <span className="font-medium">IMDb ID:</span>{" "}
                                {eachMovie?.imdbID}
                              </p>
                              <p>
                                <span className="font-medium">Type:</span>{" "}
                                {eachMovie?.Type}
                              </p>
                            </div>
                          </div>

                          {/* CTA */}
                          <button className="mt-6 w-fit rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white transition-all hover:bg-blue-700">
                            View More Details →
                          </button>
                        </div>
                      </div>
                    </>
                  );
                })}
              </>
            ) : (
              <>
              
              <div className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
  <img className="size-12 shrink-0" src="/img/logo.svg" alt="ChitChat Logo" />
  <div>
    <div className="text-xl font-medium text-black dark:text-white">ChitChat</div>
    <p className="text-gray-500 dark:text-gray-400">You have a new message!</p>
  </div>
</div>
              </>
            )}
          </div>
        </div>
        <ul className="flex justify-center gap-1 text-gray-900">
          <li>
            <a
              href="#"
              className="grid size-8 place-content-center rounded border border-gray-200 transition-colors hover:bg-gray-50 rtl:rotate-180"
              aria-label="Previous page"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </li>

          <li>
            <a
              href="#"
              className="block size-8 rounded border border-gray-200 text-center text-sm/8 font-medium transition-colors hover:bg-gray-50"
            >
              1
            </a>
          </li>

          <li className="block size-8 rounded border border-indigo-600 bg-indigo-600 text-center text-sm/8 font-medium text-white">
            2
          </li>

          <li>
            <a
              href="#"
              className="block size-8 rounded border border-gray-200 text-center text-sm/8 font-medium transition-colors hover:bg-gray-50"
            >
              3
            </a>
          </li>

          <li>
            <a
              href="#"
              className="block size-8 rounded border border-gray-200 text-center text-sm/8 font-medium transition-colors hover:bg-gray-50"
            >
              4
            </a>
          </li>

          <li>
            <a
              href="#"
              className="grid size-8 place-content-center rounded border border-gray-200 transition-colors hover:bg-gray-50 rtl:rotate-180"
              aria-label="Next page"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </li>
        </ul>
      </section>
    </>
  );
};

export default MovieList;
