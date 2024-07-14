"use client"
import { useEffect, useState } from 'react';
import Link from "next/link";
import { Button, GradientText, Table } from 'aceternity-ui';

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
                <GradientText 
                    className="text-4xl pb-5 md:text-7xl px-6 text-center" 
                    gradientFrom="from-neutral-50" 
                    gradientTo="to-neutral-400"
                >
                    We are ABC Organisation, and <br />We provide you latest upcoming auctions
                </GradientText>
                <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4">
                    Get the latest auction details
                </p>
                <Button 
                    href="/book" 
                    className="flex items-center justify-center w-48 mx-auto my-6"
                >
                    Want to connect with us
                </Button>
            </div>
            <h1 className="text-2xl font-bold mb-4 text-black">ICICI Bank Properties for Sale</h1>
            <div className="overflow-x-auto">
                <Table>
                    <thead>
                        <tr>
                            <th>S. No</th>
                            <th>Borrower Name</th>
                            <th>Property Address</th>
                            <th>Property Area</th>
                            <th>Property Type</th>
                            <th>Reserve Price</th>
                            <th>Auction Date</th>
                            <th>Property City</th>
                            <th>State</th>
                        </tr>
                    </thead>
                    <tbody>
                        {properties.map((property, index) => (
                            <tr key={index}>
                                <td>{property.sno}</td>
                                <td>{property.borrowerName}</td>
                                <td>{property.propertyAddress}</td>
                                <td>{property.propertyArea}</td>
                                <td>{property.propertyType}</td>
                                <td>{property.reservePrice}</td>
                                <td>{property.auctionDate}</td>
                                <td>{property.propertyCity}</td>
                                <td>{property.state}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default Properties;
