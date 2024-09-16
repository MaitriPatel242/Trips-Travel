import { MdOutlineParagliding, MdSearch } from "react-icons/md";
import { FaPeopleCarry, FaUsers } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";
import { useState } from "react";
import ReactSlider from 'react-slider';
import Rating from './Rating';

export default function Sidebar() {
    const [value, setValue] = useState([109, 619]);

    return (
        <div className="flex flex-col gap-10 max-w-full"> {/* Adjust width here */}
            <div className="p-4 w-full bg-white shadow-lg rounded-lg">
                <div className="mb-4 flex items-start border-b py-4">
                    <MdOutlineParagliding className="text-red-500 text-5xl mr-2" />
                    <div className="w-full">
                        <h3 className="font-semibold mb-2">Destinations</h3>
                        <select className="w-full rounded outline-none">
                            <option value="">Locations</option>
                            <option value="">Location 1</option>
                            <option value="">Location 2</option>
                        </select>
                    </div>
                </div>

                <div className="mb-4 flex items-start border-b py-4">
                    <FaPeopleCarry className="text-red-500 text-5xl mr-2" />
                    <div className="w-full">
                        <h3 className="font-semibold mb-2">Activity</h3>
                        <select className="w-full rounded outline-none">
                            <option value="">Booking Type</option>
                            <option value="">Type 1</option>
                            <option value="">Type 2</option>
                        </select>
                    </div>
                </div>

                <div className="mb-4 flex items-start border-b py-4">
                    <AiOutlineCalendar className="text-red-500 text-5xl mr-2" />
                    <div className="w-full">
                        <h3 className="font-semibold mb-2">Date From</h3>
                        <input type="date" className="w-full rounded" />
                    </div>
                </div>

                <div className="mb-4 flex items-start border-b py-4">
                    <FaUsers className="text-red-500 text-5xl mr-2" />
                    <div className="w-full">
                        <h3 className="font-semibold mb-2">Guests</h3>
                        <input type="number" className="w-full rounded" defaultValue="0" />
                    </div>
                </div>

                <div className="mb-4 flex items-start border-b py-4">
                    <div className="w-full">
                        <h3 className="font-semibold mb-2">Price</h3>
                        <div className="flex justify-between mb-3">
                            <div className="bg-red-500 text-white px-2 rounded">${value[0]}</div>
                            <div className="bg-red-500 text-white px-2 rounded">${value[1]}</div>
                        </div>
                        <ReactSlider
                            className="horizontal-slider"
                            thumbClassName="thumb"
                            trackClassName="track"
                            min={109}
                            max={619}
                            value={value}
                            onChange={(value) => setValue(value)}
                            ariaLabel={["Lower thumb", "Upper thumb"]}
                            ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
                            renderTrack={(props, state) => {
                                const { index } = state;
                                const { key, ...restProps } = props;
                                const trackStyle = index === 1 ? { backgroundColor: '#c53030' } : { backgroundColor: '#999' };
                                return (
                                    <div key={key} {...restProps} style={{ ...restProps.style, ...trackStyle }} />
                                );
                            }}
                            renderThumb={(props, state) => {
                                const { key, ...restProps } = props;
                                return (
                                    <div key={key} {...restProps} style={{ ...restProps.style, backgroundColor: '#c53030', borderRadius: '50%', width: '20px', height: '20px' }} />
                                )
                            }}
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <h3 className="font-semibold mb-2 text-lg">Languages</h3>
                    <div className="flex flex-col">
                        {["English", "French", "German", "Japanese", "Thailand"].map((language) => (
                            <label key={language} className="inline-flex items-center mt-2">
                                <input type="checkbox" className="form-checkbox h-4 w-4 text-red-500" />
                                <span className="ml-2">{language}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <div className="mb-4">
                    <h3 className="font-semibold mb-2 text-lg">Amenities</h3>
                    <div className="flex flex-col">
                        {[
                            "Accepts Credit Cards",
                            "Car Parking",
                            "Free Coupons",
                            "Laundry Service",
                            "Outdoor Seating",
                            "Reservations",
                            "Restaurant",
                            "Smoking Allowed",
                            "Wireless Internet",
                        ].map((amenity) => (
                            <label key={amenity} className="inline-flex items-center mt-2">
                                <input type="checkbox" className="form-checkbox h-4 w-4 text-red-500" />
                                <span className="ml-2">{amenity}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <button className="w-full bg-red-500 text-white rounded-lg h-12 my-4 flex justify-center items-center font-bold gap-2 text-center">
                    <MdSearch />
                    Search
                </button>
            </div>
        </div>
    );
}
