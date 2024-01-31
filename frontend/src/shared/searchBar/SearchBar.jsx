import React, { useRef } from "react";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoIosPricetags } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { toast } from "react-toastify";
import BASE_URL from "../../utils/config";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const minPriceRef = useRef(0);
  const maxPriceRef = useRef(0);
  const cityRef = useRef(0);
  const navigate = useNavigate();

  const SubmitHandler = async () => {
    const minPrice = minPriceRef.current.value;
    const maxPrice = maxPriceRef.current.value;
    const searchTerm = cityRef.current.value;

    if (minPrice === "" || maxPrice === "" || searchTerm === "") {
      toast.error("Please fill all the fields");
    } else {
      const response = await fetch(
        `${BASE_URL}/tour/search?search=${searchTerm}&minPrice=${minPrice}&maxPrice=${maxPrice}`
      );
      if (!response.ok) {
        toast.error("No Record Found!");
        navigate(
          `/tours/search?search=${searchTerm}&minPrice=${minPrice}&maxPrice=${maxPrice}`,
          { state: result.data }
        );
      }

      const result = await response.json();

      navigate(
        `/tours/search?search=${searchTerm}&minPrice=${minPrice}&maxPrice=${maxPrice}`,
        { state: result.data }
      );
    }
  };

  return (
    <form className="mt-2 md:mt-8 px-6 flex items-center lg:justify-start justify-center md:flex-row flex-col gap-2">
      <div className="overflow-hidden">
        <div className="flex gap-2 items-center">
          <FaPeopleGroup className="h-3 w-3 lg:h-6 lg:w-6" />
          <h1 className="font-semibold ">Location</h1>
        </div>
        <input
          type="text"
          ref={cityRef}
          className="py-2 my-2 px-4 bg-gray-200 focus:outline-none rounded-full "
          placeholder="where?"
        />
      </div>
      <div className="overflow-hidden ">
        <div className="flex gap-2 items-center">
          <IoIosPricetags className="h-3 w-3 lg:h-6 lg:w-6" />
          <h1 className="font-semibold ">Min. Price</h1>
        </div>
        <input
          type="number"
          ref={minPriceRef}
          className="py-2 my-2 px-4 bg-gray-200 focus:outline-none rounded-full "
          placeholder="min. Amount"
        />
      </div>
      <div className="overflow-hidden">
        <div className="flex gap-2 items-center">
          <IoIosPricetags className="h-3 w-3 lg:h-6 lg:w-6" />
          <h1 className="font-semibold ">Max. Price</h1>
        </div>
        <input
          type="number"
          ref={maxPriceRef}
          className="py-2 my-2 px-4 bg-gray-200 focus:outline-none rounded-full "
          placeholder="max. Amount"
        />
      </div>
      <div className="">
        <IoIosSearch
          onClick={SubmitHandler}
          className="h-10 w-10 cursor-pointer text-BaseColor hover:text-BHoverColor hover:h-12 hover:w-12 duration-300"
        />
      </div>
    </form>
  );
};

export default SearchBar;
