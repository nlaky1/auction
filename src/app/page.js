"use client"
import { useEffect, useState } from 'react';

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
