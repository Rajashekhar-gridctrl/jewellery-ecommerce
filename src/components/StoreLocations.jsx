const StoreLocations = () => {
    return (
        <div class="flex flex-col md:flex-row gap-6 pt-10 pb-0">
            {/* <!-- Left: Map --> */}
            <div class="w-full hidden md:block md:w-1/2 h-[300px] bg-[#c2a675] rounded-lg" id="map">
                {/* <!-- Map will be loaded here --> */}
            </div>

            {/* <!-- Right: Store Locations --> */}
            <div class="w-full md:w-1/2 space-y-4">
                <h2 class="text-xl font-bold">Find in Store near you!</h2>
                <p class="text-sm text-[#c2a675]">
                    Have to see it to believe it? Check here if the design is available in the store or not.
                </p>

                {/* <!-- Store Pincode Input --> */}

                {/* <!-- Store Address List --> */}
                <p className="text-md  text-black">Stores list</p>
                <ul class="text-sm space-y-2 text-[#c2a675]">

                    <li>📍 RamyaNagendra Imitations, 1-2-161/A/1, Krishna nagar, 505327 Jagtial TS, Bharat</li>
                    <li>📍 Hyderabad - Pearl Market, Secunderabad, Bharat</li>
                </ul>
            </div>
        </div>
    )
}

export default StoreLocations;