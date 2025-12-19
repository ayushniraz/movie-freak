import { useForm } from "react-hook-form";
import axiosClient from "../api/axios";
import { useEffect } from "react";

type SearchInputs = {
  title: string;
  year: string;
  type: string;
  language: string;
  imdb: string;
};

const yearList = [
  "2025",
  "2024",
  "2023",
  "2022",
  "2021",
  "2020",
  "2019",
  "2018",
  "2017",
  "2016",
  "2015",
  "2014",
  "2013",
  "2012",
  "2011",
  "2010",
  "2009",
  "2008",
  "2007",
  "2006",
  "2005",
  "2004",
  "2003",
  "2002",
  "2001",
  "2000",
  "1999",
  "1998",
  "1997",
  "1996",
  "1995",
  "1994",
  "1993",
  "1992",
  "1991",
  "1990",
  "1989",
  "1988",
  "1987",
  "1986",
  "1985",
  "1984",
  "1983",
  "1982",
  "1981",
  "1980",
];

const Search = ({ setMovies }:any) => {
  const { register, handleSubmit } = useForm<SearchInputs>();

  useEffect(() => {
    searchClicked({
      title: "ant",
      year: "",
      type: "",
      language: "",
      imdb: "",
    });
  }, []);

  const searchClicked = async (data: SearchInputs) => {
    try {
      const response = await axiosClient.get(
        `?s=${data.title}&y=${data.year}&type=${data.type}&i=${data.imdb}`
      );
      console.log(response);
      setMovies(response?.data?.Search);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(searchClicked)}
      name="search-form"
      method="get"
      className="w-full max-w-xl md:max-w-md  space-y-5"
    >
      {/* Search Bar */}
      <div
        className="flex items-center gap-2 p-2 rounded-lg border border-gray-400 
                   focus-within:ring-2 focus-within:ring-black"
      >
        <input
          {...register("title")}
          type="text"
          className="flex-1 h-10 px-3 text-sm text-black placeholder:text-gray-500 
                     bg-transparent focus:outline-none"
          placeholder="Search movies, actors, genres..."
        />

        <button
          type="submit"
          className="rounded-md bg-black px-5 py-2 text-sm font-semibold text-white"
        >
          🔎 Search
        </button>
      </div>

      {/* Advanced Filters */}
      <details className="group border border-gray-300 rounded-md p-3">
        <summary
          className="flex cursor-pointer list-none items-center justify-between 
                     text-sm underline font-semibold text-black py-1"
        >
          Advanced Filters
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="block h-5 w-5 group-open:hidden"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="hidden h-5 w-5 group-open:block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 12h-15"
              />
            </svg>
          </div>
        </summary>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
          <select
            className="border rounded-md px-3 py-2 text-sm focus:border-black focus:outline-none"
            {...register("type")}
          >
            <option value="">All</option>
            <option value="movie">Movie</option>
            <option value="series">Series</option>
            <option value="episode">Episode</option>
          </select>

          <select
            className="border rounded-md px-3 py-2 text-sm focus:border-black focus:outline-none"
            {...register("year")}
          >
            <option value="">Year</option>
            {yearList.map((eachYear) => {
              return (
                <>
                  <option value={eachYear}>{eachYear}</option>
                </>
              );
            })}
          </select>

          

          <select
            className="border rounded-md px-3 py-2 text-sm focus:border-black focus:outline-none"
            {...register("language")}
          >
            <option value="english">English</option>
          </select>
        </div>
      </details>
    </form>
  );
};

export default Search;
