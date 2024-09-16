import React, { useRef } from "react";
import BASE_URL from "../../utils/config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SearchTours = () => {
  const cityRef = useRef(0);
  const navigate = useNavigate();

  const SubmitHandler = async () => {
    const searchTerm = cityRef.current.value;

    if (searchTerm === "") {
      toast.error("Please fill all the fields");
    } else {
      const response = await fetch(
        `${BASE_URL}/tour/search?search=${searchTerm}`
      );
      if (!response.ok) {
        toast.error("No Record Found!");
      } else {
        const result = await response.json();
        navigate(`/tours/search?search=${searchTerm}`, { state: result.data });
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      SubmitHandler();
    }
  };

  return (
    <div>
      <section className="py-4 px-6 md:px-12">
        <div className="container flex flex-col md:flex-row items-center justify-between">
          <h2 className="flex-grow mt-[15px] max-w-[570px] mx-auto rounded-md flex items-center">
            Find a <span className="text-BaseColor">Tour</span>
          </h2>
          <div className="flex-grow mt-[15px] max-w-[570px] mx-auto bg-gray-100 rounded-md flex items-center">
            <input
              type="search"
              ref={cityRef}
              onKeyPress={handleKeyPress}
              className="py-4 pl-4 bg-transparent w-full focus:outline-none placeholder:text-TextColor"
              placeholder="Search Tour"
            />
            <button
              onClick={SubmitHandler}
              className="Searchbtn rounded-r-md mx-2 py-4 px-6 bg-green-500 text-white font-semibold"
            >
              Search
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SearchTours;
