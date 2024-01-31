import React from "react";
import useFetch from "../../hooks/useFetch";
import BASE_URL from "../../utils/config";
import AdminBookingCard from "../../shared/AdminBookings";

const Bookings = () => {
  const { apiData: bookings } = useFetch(`${BASE_URL}/booking`);

  return (
    <div className="py-8 px-8">
      <div className="flex flex-col gap-5">
        <table className=" table-auto gap-4 border-collapse border">
          <thead className="w-full py-2">
            <tr>
              <th className="hidden md:table-cell tableData">TourName</th>
              <th className="tableData">UserName</th>
              <th className="hidden md:table-cell tableData">User ID</th>
              <th className="hidden md:table-cell tableData">Persons</th>
              <th className="hidden md:table-cell tableData">Phone</th>
              <th className="tableData">Booked for</th>
              <th className="hidden md:table-cell tableData">Booked on</th>
              <th className="tableData">Price</th>
              <th className="hidden md:table-cell tableData">Status</th>
            </tr>
          </thead>
          {bookings?.map((booking) => (
            <AdminBookingCard booking={booking} key={booking._id} />
          ))}
        </table>
      </div>
    </div>
  );
};

export default Bookings;
