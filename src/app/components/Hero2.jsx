export default function Hero2() {
    return (
        <div className="bg-gradient-to-b from-gray-900 to-gray-100 text-white py-8">
          <div className="container mx-auto px-4">
            <header className="flex flex-col md:flex-row justify-between items-center mb-8">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <img src="https://soluqube.vercel.app/logo/logo1.svg" alt="Housing logo" className="h-10"/>
                <span className="text-2xl font-bold">ACME </span>
              </div>
              <div className="flex flex-wrap justify-center md:justify-end space-x-2 md:space-x-4">
                <button className="bg-zinc-200 text-zinc-800 px-4 py-2 rounded-lg mb-2 md:mb-0">Home</button>
                <button className="bg-zinc-200 text-zinc-800 px-4 py-2 rounded-lg mb-2 md:mb-0">How It Works?</button>
                <button className="bg-zinc-200 text-zinc-800 px-4 py-2 rounded-lg mb-2 md:mb-0">Auctions</button>
                <button className="bg-zinc-200 text-zinc-800 px-4 py-2 rounded-lg mb-2 md:mb-0">About Us</button>
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg mb-2 md:mb-0">Check latest Properties</button>
              </div>
            </header>
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold">Looking for a new Property?</h1>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4 mb-4">
              <div className="flex flex-wrap justify-center md:justify-start items-center space-x-2 md:space-x-4 mb-4">
                <button className="bg-zinc-200 text-zinc-800 px-4 py-2 rounded-lg mb-2 md:mb-0">BUY</button>
                <button className="bg-zinc-200 text-zinc-800 px-4 py-2 rounded-lg mb-2 md:mb-0">RESIDENTIAL</button>
                <button className="bg-zinc-200 text-zinc-800 px-4 py-2 rounded-lg mb-2 md:mb-0">COMMERCIAL <span className="bg-red-500 text-white px-2 py-1 rounded-lg text-xs ml-1">NEW</span></button>
                <button className="bg-zinc-200 text-zinc-800 px-4 py-2 rounded-lg mb-2 md:mb-0">PG/CO-LIVING</button>
                <button className="bg-zinc-200 text-zinc-800 px-4 py-2 rounded-lg mb-2 md:mb-0">PLOTS</button>
              </div>
              <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0">
                <select className="bg-zinc-200 text-zinc-800 px-4 py-2 rounded-lg w-full md:w-auto">
                  <option>Mumbai</option>
                  <option>Indore</option>
                  <option>Delhi</option>
                  <option>Bhopal</option>
                </select>
                <input type="text"
                 placeholder="Search for locality, landmark, project" 
                 className="flex-grow bg-zinc-200 text-zinc-800 px-4 py-2 rounded-lg w-full md:w-auto md:ml-4"/>
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg w-full md:w-auto md:ml-4">Search</button>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-start space-x-2 mb-4">
              <span className="text-zinc-500">Popular Localities</span>
              <button className="bg-zinc-200 text-zinc-800 px-4 py-2 rounded-lg mb-2 md:mb-0">Mira Road East</button>
              <button className="bg-zinc-200 text-zinc-800 px-4 py-2 rounded-lg mb-2 md:mb-0">Andheri West</button>
              <button className="bg-zinc-200 text-zinc-800 px-4 py-2 rounded-lg mb-2 md:mb-0">Chembur</button>
              <button className="bg-zinc-200 text-zinc-800 px-4 py-2 rounded-lg mb-2 md:mb-0">Malad West</button>
              <button className="bg-zinc-200 text-zinc-800 px-4 py-2 rounded-lg mb-2 md:mb-0">Borivali</button>
            </div>
            
          </div>
        </div>
        
        
    )
}