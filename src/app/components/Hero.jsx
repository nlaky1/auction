export default function Hero() {
    return (
        <div className="bg-gradient-to-b from-gray-900 to-gray-100 text-white py-8">
            <div className="container mx-auto px-4">
                <header className="flex justify-between items-center mb-8 flex-wrap">
                    <div className="flex items-center space-x-2">
                        <img src="https://placehold.co/40x40?text=🏠" alt="Housing logo" className="h-10"/>
                        <span className="text-2xl font-bold">HOUSING.COM</span>
                    </div>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <button className="bg-zinc-200 text-zinc-800 px-4 py-2 rounded-lg">Home</button>
                        <button className="bg-zinc-200 text-zinc-800 px-4 py-2 rounded-lg">How It Works</button>
                        <button className="bg-zinc-200 text-zinc-800 px-4 py-2 rounded-lg">Auctions</button>
                        <button className="bg-zinc-200 text-zinc-800 px-4 py-2 rounded-lg">About Us</button>
                        <button className="bg-red-500 text-white px-4 py-2 rounded-lg">Check latest Properties</button>
                    </div>
                </header>
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold">Looking for a new Property?</h1>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-4 mb-4">
                    <div className="flex flex-wrap space-x-4 mb-4">
                        <button className="bg-zinc-200 text-zinc-800 px-4 py-2 rounded-lg mb-2">BUY</button>
                        <button className="bg-zinc-200 text-zinc-800 px-4 py-2 rounded-lg mb-2">RESIDENTIAL</button>
                        <button className="bg-zinc-200 text-zinc-800 px-4 py-2 rounded-lg mb-2">COMMERCIAL <span className="bg-red-500 text-white px-2 py-1 rounded-lg text-xs ml-1">NEW</span></button>
                        <button className="bg-zinc-200 text-zinc-800 px-4 py-2 rounded-lg mb-2">PG/CO-LIVING</button>
                        <button className="bg-zinc-200 text-zinc-800 px-4 py-2 rounded-lg mb-2">PLOTS</button>
                    </div>
                    <div className="flex flex-wrap items-center mt-4">
                        <select className="bg-zinc-200 text-zinc-800 px-4 py-2 rounded-lg mb-2 w-full md:w-auto">
                            <option>Mumbai</option>
                        </select>
                        <input type="text" placeholder="Search for locality, landmark, or project" className="flex-grow bg-zinc-200 text-zinc-800 px-4 py-2 rounded-lg ml-4 mb-2 w-full md:w-auto"/>
                        <button className="bg-green-500 text-white px-4 py-2 rounded-lg ml-4 mb-2 w-full md:w-auto">Search</button>
                    </div>
                </div>
                <div className="flex flex-wrap space-x-2 mb-4">
                    <span className="text-zinc-200 mb-2">Popular Localities</span>
                    <button className="bg-zinc-200 text-zinc-800 px-4 py-2 rounded-lg mb-2">Mira Road East</button>
                    <button className="bg-zinc-200 text-zinc-800 px-4 py-2 rounded-lg mb-2">Andheri West</button>
                    <button className="bg-zinc-200 text-zinc-800 px-4 py-2 rounded-lg mb-2">Chembur</button>
                    <button className="bg-zinc-200 text-zinc-800 px-4 py-2 rounded-lg mb-2">Malad West</button>
                    <button className="bg-zinc-200 text-zinc-800 px-4 py-2 rounded-lg mb-2">Borivali</button>
                </div>
            </div>
        </div>
    );
}
