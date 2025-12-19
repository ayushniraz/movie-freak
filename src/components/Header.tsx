import Search from "./Search";

const Header = ({setMovies}:any) => {
  return (
    <>
      <header>
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <div className="grid items-center gap-8 sm:gap-16 md:grid-cols-2">
            <div>
              <h1 className="mb-4 text-4xl font-bold md:text-6xl md:leading-tight">
                Discover Movies, Shows, and Everything You Love
              </h1>
              <p className="mb-6 max-w-lg text-sm text-gray-500 sm:text-xl md:mb-8">
                Explore trending films, top-rated TV shows, cast details,
                trailers, and more—all in one fast and intuitive movie app.
              </p>

              <div className="mb-6 flex w-full max-w-xs items-center md:mb-10 lg:mb-12">
                <img
                  src="/me.jpg"
                  alt="User"
                  className="mr-2 inline-block h-10 w-10 rounded-full object-cover"
                />
                <p className="text-sm font-bold">Ayush Niraula</p>
                <div className="border-color:[#636262] ml-4 mr-4 h-full border border-r py-3"></div>
                <p className="mr-2 text-sm font-bold">4.9</p>
                <img
                  src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a947e84e6cf91_Vector.svg"
                  alt=""
                  className="mr-1 w-3.5"
                />
                <img
                  src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a947e84e6cf91_Vector.svg"
                  alt=""
                  className="mr-1 w-3.5"
                />
                <img
                  src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a947e84e6cf91_Vector.svg"
                  alt=""
                  className="mr-1 w-3.5"
                />
                <img
                  src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a947e84e6cf91_Vector.svg"
                  alt=""
                  className="mr-1 w-3.5"
                />
                <img
                  src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a947e84e6cf91_Vector.svg"
                  alt=""
                  className="mr-1 w-3.5"
                />
              </div>

        <Search setMovies={setMovies}/>


             <div className="mt-4 flex flex-wrap gap-3">
  <span className="flex items-center gap-2 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
    ⭐ Top Rated Movies
  </span>

  <span className="flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
    🎬 New Releases
  </span>

  <span className="flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
    🔍 Advanced Search
  </span>

  <span className="flex items-center gap-2 bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
    📺 4K Streaming
  </span>
</div>

            </div>

            <img
              src="/movie-banner.jpg"
              alt="Movie App Banner"
              className="inline-block w-full max-w-2xl"
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
