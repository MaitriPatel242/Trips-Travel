import React, { useEffect, useState } from "react";
import FeaturedTourList from "../components/featruredTour/FeaturedTourList";
import useFetch from "../hooks/useFetch";
import BASE_URL from "../utils/config";
import TourCard from "../shared/TourCard";
import SearchTours from "../components/Search/SearchTours";
import CommonSection from "./CommonSection";
import Sidebar from "../components/Sidebar";

const Tours = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const { apiData: tours, error } = useFetch(`${BASE_URL}/tour?page=${page}`);
  const { apiData: tourCount } = useFetch(`${BASE_URL}/tour/count`);

  useEffect(() => {
    const pages = Math.ceil(tourCount / 12);
    setPageCount(pages);
    window.scrollTo(0, 0);
  }, [page, tourCount, tours]);

  return (
    <div>
      <CommonSection title={'All Tours'} />
      <SearchTours />
      <section className="min-h-screen py-8 px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8"> {/* Main grid with increased gap */}
          {/* Sidebar on the left with increased width */}
          <div className="md:col-span-1 lg:col-span-1">
            <Sidebar />
          </div>

          {/* TourCards on the right */}
          <div className="md:col-span-3 lg:col-span-3">
            {/* Grid for Tour Cards with increased vertical gap */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-11 gap-x-5"> {/* Increased vertical gap */}
              {tours?.slice(0, 9).map((tour) => (
                <div key={tour._id} className="flex justify-center">
                  <TourCard tour={tour} className="w-full max-w-[300px]" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex pagination items-center justify-center mt-8 gap-3">
          {pageCount &&
            [...Array(pageCount).keys()].map((number) => (
              <span
                key={number}
                onClick={() => setPage(number)}
                className={page === number ? "active_page" : "spn"}
              >
                {number + 1}
              </span>
            ))}
        </div>
      </section>
    </div>
  );
};

export default Tours;
