"use client"
import { useEffect, useState } from 'react';
import Link from "next/link";
const Properties = () => {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/api/properties');
            const data = await res.json();
            setProperties(data);
        };
        fetchData();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
        <div className="text-4xl pb-5 md:text-7xl px-6 text-center  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
          We are ABC Organisation, and <br />We provide you latest upcoming auctions
        </div>
        <p className="mt-4 text-lg font-normal  text-neutral-300 max-w-lg text-center mx-auto px-4">
         Get the latest auction details 
        </p>
   

        <Link
          href={"/book"}
          className="cursor-pointer flex items-center justify-center border rounded-full w-48 p-2  mx-auto my-6 text-white "
        >
          Want to connect with us
        </Link>
                   </div>
            <h1 className="text-2xl font-bold mb-4 text-black">ICICI Bank Properties for Sale</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr className="bg-gray-100 text-black text-left">
                            <th className="py-2 px-4 border-b">S. No</th>
                            <th className="py-2 px-4 border-b">Borrower Name</th>
                            <th className="py-2 px-4 border-b">Property Address</th>
                            <th className="py-2 px-4 border-b">Property Area</th>
                            <th className="py-2 px-4 border-b">Property Type</th>
                            <th className="py-2 px-4 border-b">Reserve Price</th>
                            <th className="py-2 px-4 border-b">Auction Date</th>
                            <th className="py-2 px-4 border-b">Property City</th>
                            <th className="py-2 px-4 border-b">State</th>
                        </tr>
                    </thead>
                    <tbody>
                        {properties.map((property, index) => (
                            <tr key={index} className="hover:bg-gray-50 text-black">
                                <td className="py-2 px-4 border-b">{property.sno}</td>
                                <td className="py-2 px-4 border-b">{property.borrowerName}</td>
                                <td className="py-2 px-4 border-b">{property.propertyAddress}</td>
                                <td className="py-2 px-4 border-b">{property.propertyArea}</td>
                                <td className="py-2 px-4 border-b">{property.propertyType}</td>
                                <td className="py-2 px-4 border-b">{property.reservePrice}</td>
                                <td className="py-2 px-4 border-b">{property.auctionDate}</td>
                                <td className="py-2 px-4 border-b">{property.propertyCity}</td>
                                <td className="py-2 px-4 border-b">{property.state}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Properties;
