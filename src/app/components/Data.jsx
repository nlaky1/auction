import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
export default function Data() {

    const [properties, setProperties] = useState([]);

    // below is the API call for fetching data
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const res = await fetch('/api/properties');
    //         const data = await res.json();
    //         setProperties(data);
    //     };
    //     fetchData();
    // }, []);
  
    useEffect(() => {
      axios
        .get("/db.json")
        .then((response) => {
          setProperties(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
        });
    }, []);
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200  shadow-md rounded-lg">
        <thead className='rounded-lg'>
          <tr className="bg-gray-500 text-white">
            <th className="py-3 px-5 border-b border-gray-200">S. No</th>
            <th className="py-3 px-5 border-b border-gray-200">Borrower Name</th>
            <th className="py-3 px-5 border-b border-gray-200">Property Address</th>
            <th className="py-3 px-5 border-b border-gray-200">Property Type</th>
            <th className="py-3 px-5 border-b border-gray-200">Reserve Price</th>
            <th className="py-3 px-5 border-b border-gray-200">Auction Date</th>
            <th className="py-3 px-5 border-b border-gray-200">City</th>
            <th className="py-3 px-5 border-b border-gray-200">State</th>
          </tr>
        </thead>
        <tbody>
          {properties.map((property, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="py-3 px-5 border-b border-gray-200">{index + 1}</td>
              <td className="py-3 px-5 border-b border-gray-200">{property["Borrower Name"]}</td>
              <td className="py-3 px-5 border-b border-gray-200">{property["Details"]}</td>
              <td className="py-3 px-5 border-b border-gray-200">{property["Property Type"]}</td>
              <td className="py-3 px-5 border-b border-gray-200">{property["Reserve Price"]}</td>
              <td className="py-3 px-5 border-b border-gray-200">{property["Auction Date"]}</td>
              <td className="py-3 px-5 border-b border-gray-200">{property["City"]}</td>
              <td className="py-3 px-5 border-b border-gray-200">{property["State"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
