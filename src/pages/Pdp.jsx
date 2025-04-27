import { MdOutlineCurrencyRupee } from "react-icons/md";

const ProductDetailsPage = () => {
    return (
        <div class="p-10">
            <div class="lg:max-w-6xl max-w-xl mx-auto">
                <div class="grid items-start grid-cols-1 lg:grid-cols-2 gap-8 max-lg:gap-12 max-sm:gap-8">
                    <div class="w-full lg:sticky top-0">
                        <div class="flex flex-row gap-2">
                            <div class="flex flex-col gap-2 w-16 max-sm:w-14 shrink-0">
                                <img src="http://localhost:5173/src/assets/images/product-1.jpg" alt="Product1"
                                    class="aspect-[64/85] object-cover object-top w-full cursor-pointer rounded-lg border-b-2 border-black" />
                                <img src="http://localhost:5173/src/assets/images/product-2.jpg" alt="Product2"
                                    class="aspect-[64/85] object-cover object-top w-full cursor-pointer  rounded-lg  border-b-2 border-transparent" />
                                <img src="http://localhost:5173/src/assets/images/product-3.jpg" alt="Product3"
                                    class="aspect-[64/85] object-cover object-top w-full cursor-pointer  rounded-lg  border-b-2 border-transparent" />
                                <img src="http://localhost:5173/src/assets/images/product-4.jpg" alt="Product4"
                                    class="aspect-[64/85] object-cover object-top w-full cursor-pointer  rounded-lg  border-b-2 border-transparent" />
                            </div>
                            <div class="flex-1">
                                <img src="http://localhost:5173/src/assets/images/product-1.jpg" alt="Product"
                                    class="w-full  rounded-lg  aspect-[548/712] object-cover" />
                            </div>
                        </div>
                    </div>

                    <div class="w-full">
                        <div>
                            <h3 class="text-lg sm:text-xl font-semibold text-slate-900">Divine 1grm Gold Bangles NKNGS5231</h3>
                            <p class="text-slate-500 mt-2 text-sm">Product Code: NKNGS5231</p>
                            <div class="flex items-center flex-wrap gap-4 mt-6">
                                <h4 class="text-slate-900 text-2xl sm:text-3xl font-semibold">
                                    <span className="flex items-center font-lato text-green-900"><MdOutlineCurrencyRupee className="text-md" /> 490</span>
                                </h4>
                                <p class="flex items-center font-lato text-slate-500 text-sm">MRP <strike className="flex items-center font-lato "><MdOutlineCurrencyRupee className="text-md" />590</strike> <span class="text-xs ml-1.5">
                                    Incl. of all taxes</span></p>
                            </div>

                            <div class="flex items-center gap-4 mt-4">
                                <div class="flex items-center gap-1 text-lg px-2.5 bg-green-600 text-white rounded-full">
                                    <p>4</p>
                                    <svg class="w-[13px] h-[13px] fill-white" viewBox="0 0 14 13" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                </div>
                                <p class="text-slate-500 text-sm">253 ratings and 27 reviews</p>
                            </div>
                        </div>

                        <hr class="my-6 border-slate-300" />

                        <div>
                            <h3 class="text-lg sm:text-xl font-semibold text-slate-900">Sizes</h3>
                            <div class="flex flex-wrap gap-4 mt-4">
                                <button type="button"
                                    class="w-10 h-9 rounded-lg border border-slate-300 hover:border-green-600 text-sm  flex items-center justify-center shrink-0">SM</button>
                                <button type="button"
                                    class="w-10 h-9 rounded-lg border border-green-600 hover:border-green-600 text-sm  flex items-center justify-center shrink-0">MD</button>
                                <button type="button"
                                    class="w-10 h-9 rounded-lg border border-slate-300 hover:border-green-600 text-sm  flex items-center justify-center shrink-0">LG</button>
                                <button type="button"
                                    class="w-10 h-9 rounded-lg border border-slate-300 hover:border-green-600 text-sm  flex items-center justify-center shrink-0">XL</button>
                            </div>
                            <div class="flex justify-left mt-5 w-full">
                                        <button
                                            class="group py-4 px-6 border border-gray-400 rounded-l-full shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-300 hover:bg-gray-50">
                                            <svg class="stroke-gray-700 transition-all duration-500 group-hover:stroke-black"
                                                width="22" height="22" viewBox="0 0 22 22" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16.5 11H5.5" stroke="" stroke-width="1.6"
                                                    stroke-linecap="round" />
                                                <path d="M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                                                    stroke-linecap="round" />
                                                <path d="M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                                                    stroke-linecap="round" />
                                            </svg>
                                        </button>
                                        <input type="text"
                                            class="font-semibold text-gray-900 text-lg py-[13px] px-6 w-full lg:max-w-[118px] border-y border-gray-400 bg-transparent placeholder:text-gray-900 text-center hover:bg-gray-50 focus-within:bg-gray-50 outline-0"
                                            placeholder="1" />
                                        <button
                                            class="group py-4 px-6 border border-gray-400 rounded-r-full shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-300 hover:bg-gray-50">
                                            <svg class="stroke-gray-700 transition-all duration-500 group-hover:stroke-black"
                                                width="22" height="22" viewBox="0 0 22 22" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-width="1.6"
                                                    stroke-linecap="round" />
                                                <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-opacity="0.2"
                                                    stroke-width="1.6" stroke-linecap="round" />
                                                <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-opacity="0.2"
                                                    stroke-width="1.6" stroke-linecap="round" />
                                            </svg>
                                        </button>
                                    </div>
                            <div class="mt-6 flex flex-wrap gap-4">
                                <button type="button"
                                    class="px-4 py-3 w-[45%] border rounded-lg border-green-600 bg-green-600 hover:bg-green-700 text-white text-sm font-medium">Add
                                    to cart</button>
                                <button type="button"
                                    class="px-4 py-3 w-[45%] border rounded-lg border-slate-300 bg-slate-100 hover:bg-slate-200 text-slate-900 text-sm font-medium">Add
                                    to wishlist</button>
                            </div>
                        </div>
                        <hr class="my-6 border-slate-300" />

                        <div>
                        <h3 class="text-lg sm:text-xl font-semibold text-green-900">Select Delivery Option</h3>
                        <p class="text-slate-500 text-sm my-2">You can now purchase this item online or at a nearby store for added convenience.</p>
                        
                        <div>
                            <ul className="text-sm list-disc pl-5 mt-1 mb-3 text-slate-600">
                                <li>RamyaNagendra Imitations, 1-2-161/A/1, Krishna nagar, 505327 Jagtial TS, Bharat</li>
                                <li>RamyaNagendra Imitations, Hyderabad TS, Bharat</li>
                            </ul>
                        </div>

                        <hr class="my-6 border-slate-300" />

                        <h3 class="text-lg sm:text-xl font-semibold text-green-900">Select Delivery Location</h3>
                            <p class="text-slate-500 text-sm mt-2">Enter the pincode of your area to check product availability.</p>
                            <div class="flex items-center gap-2 mt-6 max-w-sm">
                                <input type='number' placeholder='Enter pincode'
                                    class="bg-slate-100 px-4 py-2.5 text-sm w-full  border-0 outline-0" />
                                <button type='button'
                                    class="border-0 outline-0 bg-green-600 hover:bg-green-700 text-white  px-4 py-2.5 text-sm">Apply</button>
                            </div>
                            
                        </div>

                        <hr class="my-6 border-slate-300" />

                        <div>
                            <h3 class="text-lg sm:text-xl font-semibold text-green-900">Product Information</h3>
                            <div class="mt-4" role="accordion">
                                <div class="hover:bg-green-100 transition-all">
                                    <button type="button"
                                        class="w-full text-sm font-semibold text-left px-4 py-2.5 text-slate-900 flex items-center">
                                        <span class="mr-4">Product details</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 fill-current ml-auto shrink-0 -rotate-180"
                                            viewBox="0 0 24 24">
                                            <path fill-rule="evenodd"
                                                d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                                                clip-rule="evenodd" data-original="#000000"></path>
                                        </svg>
                                    </button>
                                    <div class="pb-4 px-4">
                                        <p class="text-sm text-slate-500 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing
                                            elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </div>

                                <div class="hover:bg-slate-100 transition-all">
                                    <button type="button"
                                        class="w-full text-sm font-semibold text-left px-4 py-2.5 text-slate-900 flex items-center">
                                        <span class="mr-4">Vendor details</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 fill-current ml-auto shrink-0 -rotate-90"
                                            viewBox="0 0 24 24">
                                            <path fill-rule="evenodd"
                                                d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                                                clip-rule="evenodd" data-original="#000000"></path>
                                        </svg>
                                    </button>
                                    <div class="pb-4 px-4 hidden">
                                        <p class="text-sm text-slate-500 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing
                                            elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </div>

                                <div class="hover:bg-green-100 transition-all">
                                    <button type="button"
                                        class="w-full text-sm font-semibold text-left px-4 py-2.5 text-green-900 flex items-center">
                                        <span class="mr-4">Return and exchange policy</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 fill-current ml-auto shrink-0 -rotate-90"
                                            viewBox="0 0 24 24">
                                            <path fill-rule="evenodd"
                                                d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                                                clip-rule="evenodd" data-original="#000000"></path>
                                        </svg>
                                    </button>
                                    <div class="pb-4 px-4 hidden">
                                        <p class="text-sm text-slate-500 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing
                                            elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr class="my-6 border-slate-300" />

                        <div>
                            <h3 class="text-lg sm:text-xl font-semibold text-slate-900">Customer Reviews</h3>
                            <div class="flex items-center gap-1.5 mt-6">
                                <svg class="w-5 h-5 fill-green-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <svg class="w-5 h-5 fill-green-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <svg class="w-5 h-5 fill-green-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <svg class="w-5 h-5 fill-green-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <svg class="w-5 h-5 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                            </div>

                            <div class="flex items-center flex-wrap gap-4 mt-4">
                                <h4 class="text-2xl sm:text-3xl text-slate-900 font-semibold">4.0 / 5</h4>
                                <p class="text-sm text-slate-500">Based on 253 ratings</p>
                            </div>
                        </div>

                        <div class="mt-6">
                            <div class="flex items-start">
                                <img src="https://readymadeui.com/team-2.webp" class="w-12 h-12 rounded-full border-2 border-white" />
                                <div class="ml-3">
                                    <h4 class="text-slate-900 text-sm font-semibold">John Doe</h4>
                                    <div class="flex space-x-1 mt-1">
                                        <svg class="w-[14px] h-[14px] fill-green-600" viewBox="0 0 14 13" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <svg class="w-[14px] h-[14px] fill-green-600" viewBox="0 0 14 13" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <svg class="w-[14px] h-[14px] fill-green-600" viewBox="0 0 14 13" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <svg class="w-[14px] h-[14px] fill-green-600" viewBox="0 0 14 13" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <svg class="w-[14px] h-[14px] fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <p class="text-xs text-slate-500 !ml-2">2 months ago</p>
                                    </div>
                                    <p class="text-sm text-slate-500 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                            <a href="javascript:void(0)" class="block text-green-600 hover:underline text-sm mt-6 font-semibold">Read all
                                reviews</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    return (
        <section class="py-10 lg:py-24 relative ">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                    <div class="pro-detail w-full flex flex-col justify-center order-last lg:order-none max-lg:max-w-[608px] max-lg:mx-auto">
                        <p class="font-medium text-lg text-green-600 mb-4">Travel &nbsp; / &nbsp; Menswear</p>
                        <h2 class="mb-2 font-manrope font-bold text-3xl leading-10 text-gray-900">Yellow Summer Travel Bag
                        </h2>
                        <div class="flex flex-col sm:flex-row sm:items-center mb-6">
                            <h6
                                class="font-manrope font-semibold text-2xl leading-9 text-gray-900 pr-5 sm:border-r border-gray-200 mr-5">
                                $220</h6>
                            <div class="flex items-center gap-2">
                                <div class="flex items-center gap-1">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_12029_1640)">
                                            <path
                                                d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                                                fill="#FBBF24" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_12029_1640">
                                                <rect width="20" height="20" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_12029_1640)">
                                            <path
                                                d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                                                fill="#FBBF24" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_12029_1640">
                                                <rect width="20" height="20" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_12029_1640)">
                                            <path
                                                d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                                                fill="#FBBF24" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_12029_1640">
                                                <rect width="20" height="20" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_12029_1640)">
                                            <path
                                                d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                                                fill="#FBBF24" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_12029_1640">
                                                <rect width="20" height="20" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_8480_66029)">
                                            <path
                                                d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                                                fill="#F3F4F6" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_8480_66029">
                                                <rect width="20" height="20" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                </div>
                                <span class="pl-2 font-normal leading-7 text-gray-500 text-sm ">1624 review</span>
                            </div>

                        </div>
                        <p class="text-gray-500 text-base font-normal mb-8 ">
                            the perfect companion for your next adventure! Embrace the spirit of sunny escapades with this
                            vibrant and versatile bag designed to cater to your travel needs while adding a pop of color to
                            your journey.
                        </p>
                        <div class="block w-full">
                            <p class="font-medium text-lg leading-8 text-gray-900 mb-4">Bag Color</p>
                            <div class="text">
                                <div class="flex items-center justify-start gap-3 md:gap-6 relative mb-6 ">
                                    <button data-ui="checked active"
                                        class="p-2.5 border border-gray-200 rounded-full transition-all duration-300 hover:border-emerald-500 :border-emerald-500">
                                        <svg width="20" height="20" viewBox="0 0 40 40" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="20" cy="20" r="20" fill="#10B981" />
                                        </svg>
                                    </button>
                                    <button
                                        class="p-2.5 border border-gray-200 rounded-full transition-all duration-300 hover:border-amber-400 focus-within:border-amber-400">
                                        <svg width="20" height="20" viewBox="0 0 40 40" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="20" cy="20" r="20" fill="#FBBF24" />
                                        </svg>

                                    </button>
                                    <button
                                        class="p-2.5 border border-gray-200 rounded-full transition-all duration-300 hover:border-red-500 focus-within:border-red-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 40 40"
                                            fill="none">
                                            <circle cx="20" cy="20" r="20" fill="#F43F5E" />
                                        </svg>
                                    </button>
                                    <button
                                        class="p-2.5 border border-gray-200 rounded-full  transition-all duration-300 hover:border-green-400 focus-within:border-green-400">
                                        <svg width="20" height="20" viewBox="0 0 40 40" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="20" cy="20" r="20" fill="#2563EB" />
                                        </svg>
                                    </button>

                                </div>
                                <div class="block w-full mb-6">
                                    <p class="font-medium text-lg leading-8 text-gray-900 mb-4">Bag size</p>
                                    <div class="grid grid-cols-2 min-[400px]:grid-cols-3 gap-3">
                                        <button
                                            class="border border-gray-200 text-gray-900 text-lg py-2 rounded-full px-1.5 sm:px-6 w-full font-semibold whitespace-nowrap shadow-sm shadow-transparent transition-all duration-300 hover:shadow-gray-300 hover:bg-gray-50 hover:border-gray-300">56
                                            cm (S)</button>
                                        <button
                                            class="border border-gray-200 text-gray-900 text-lg py-2 rounded-full px-1.5 sm:px-6 w-full font-semibold whitespace-nowrap shadow-sm shadow-transparent transition-all duration-300 hover:shadow-gray-300 hover:bg-gray-50 hover:border-gray-300">67
                                            cm (M)</button>
                                        <button
                                            class="border border-gray-200 text-gray-900 text-lg py-2 rounded-full px-1.5 sm:px-6 w-full font-semibold whitespace-nowrap shadow-sm shadow-transparent transition-all duration-300 hover:shadow-gray-300 hover:bg-gray-50 hover:border-gray-300">77
                                            cm (L)</button>
                                    </div>
                                </div>
                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                                    <div class="flex items-center justify-center w-full">
                                        <button
                                            class="group py-4 px-6 border border-gray-400 rounded-l-full shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-300 hover:bg-gray-50">
                                            <svg class="stroke-gray-700 transition-all duration-500 group-hover:stroke-black"
                                                width="22" height="22" viewBox="0 0 22 22" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16.5 11H5.5" stroke="" stroke-width="1.6"
                                                    stroke-linecap="round" />
                                                <path d="M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                                                    stroke-linecap="round" />
                                                <path d="M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                                                    stroke-linecap="round" />
                                            </svg>
                                        </button>
                                        <input type="text"
                                            class="font-semibold text-gray-900 text-lg py-[13px] px-6 w-full lg:max-w-[118px] border-y border-gray-400 bg-transparent placeholder:text-gray-900 text-center hover:bg-gray-50 focus-within:bg-gray-50 outline-0"
                                            placeholder="1" />
                                        <button
                                            class="group py-4 px-6 border border-gray-400 rounded-r-full shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-300 hover:bg-gray-50">
                                            <svg class="stroke-gray-700 transition-all duration-500 group-hover:stroke-black"
                                                width="22" height="22" viewBox="0 0 22 22" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-width="1.6"
                                                    stroke-linecap="round" />
                                                <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-opacity="0.2"
                                                    stroke-width="1.6" stroke-linecap="round" />
                                                <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-opacity="0.2"
                                                    stroke-width="1.6" stroke-linecap="round" />
                                            </svg>
                                        </button>
                                    </div>
                                    <button
                                        class="group py-4 px-5 rounded-full bg-green-50 text-green-600 font-semibold text-lg w-full flex items-center justify-center gap-2 shadow-sm shadow-transparent transition-all duration-500 hover:bg-green-100 hover:shadow-green-200">
                                        <svg class="stroke-green-600 transition-all duration-500" width="22" height="22"
                                            viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M10.7394 17.875C10.7394 18.6344 10.1062 19.25 9.32511 19.25C8.54402 19.25 7.91083 18.6344 7.91083 17.875M16.3965 17.875C16.3965 18.6344 15.7633 19.25 14.9823 19.25C14.2012 19.25 13.568 18.6344 13.568 17.875M4.1394 5.5L5.46568 12.5908C5.73339 14.0221 5.86724 14.7377 6.37649 15.1605C6.88573 15.5833 7.61377 15.5833 9.06984 15.5833H15.2379C16.6941 15.5833 17.4222 15.5833 17.9314 15.1605C18.4407 14.7376 18.5745 14.0219 18.8421 12.5906L19.3564 9.84059C19.7324 7.82973 19.9203 6.8243 19.3705 6.16215C18.8207 5.5 17.7979 5.5 15.7522 5.5H4.1394ZM4.1394 5.5L3.66797 2.75"
                                                stroke="" stroke-width="1.6" stroke-linecap="round" />
                                        </svg>
                                        Add to cart</button>
                                </div>
                                <div class="flex items-center gap-3">
                                    <button
                                        class="group transition-all duration-500 p-4 rounded-full bg-green-50 hover:bg-green-100 hover:shadow-sm hover:shadow-green-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26"
                                            fill="none">
                                            <path
                                                d="M4.47084 14.3196L13.0281 22.7501L21.9599 13.9506M13.0034 5.07888C15.4786 2.64037 19.5008 2.64037 21.976 5.07888C24.4511 7.5254 24.4511 11.4799 21.9841 13.9265M12.9956 5.07888C10.5204 2.64037 6.49824 2.64037 4.02307 5.07888C1.54789 7.51738 1.54789 11.4799 4.02307 13.9184M4.02307 13.9184L4.04407 13.939M4.02307 13.9184L4.46274 14.3115"
                                                stroke="#4F46E5" stroke-width="1.6" stroke-miterlimit="10"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                    </button>
                                    <button
                                        class="text-center w-full px-5 py-4 rounded-[100px] bg-green-600 flex items-center justify-center font-semibold text-lg text-white shadow-sm transition-all duration-500 hover:bg-green-700 hover:shadow-green-400">
                                        Buy Now
                                    </button>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div class="">
                        <div
                            // style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff"
                            class="swiper product-prev mb-6">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <img src="https://pagedone.io/asset/uploads/1700471851.png"
                                        alt="Yellow Travel Bag image" class="mx-auto object-cover" />
                                </div>
                                <div class="swiper-slide">
                                    <img src="https://pagedone.io/asset/uploads/1711514857.png"
                                        alt="Yellow Travel Bag image" class="mx-auto object-cover" />
                                </div>
                                <div class="swiper-slide">
                                    <img src="https://pagedone.io/asset/uploads/1711514875.png"
                                        alt="Yellow Travel Bag image" class="mx-auto object-cover" />
                                </div>
                                <div class="swiper-slide">
                                    <img src="https://pagedone.io/asset/uploads/1711514892.png"
                                        alt="Yellow Travel Bag image" class="mx-auto object-cover" />
                                </div>
                            </div>

                        </div>
                        <div thumbsSlider="" class="swiper product-thumb max-w-[608px] mx-auto">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <img src="https://pagedone.io/asset/uploads/1700471871.png" alt="Travel Bag image"
                                        class=" cursor-pointer border-2 border-gray-50 transition-all duration-500 hover:border-green-600 slide:border-green-600 object-cover" />
                                </div>
                                <div class="swiper-slide">
                                    <img src="https://pagedone.io/asset/uploads/1711514930.png" alt="Travel Bag image"
                                        class=" cursor-pointer border-2 border-gray-50 transition-all duration-500 hover:border-green-600 slide:border-green-600 object-cover" />
                                </div>
                                <div class="swiper-slide">
                                    <img src="https://pagedone.io/asset/uploads/1700471908.png" alt="Travel Bag image"
                                        class=" cursor-pointer border-2 border-gray-50 transition-all duration-500 hover:border-green-600 slide:border-green-600 object-cover" />
                                </div>
                                <div class="swiper-slide">
                                    <img src="https://pagedone.io/asset/uploads/1700471925.png" alt="Travel Bag image"
                                        class=" cursor-pointer border-2 border-gray-50 transition-all duration-500 hover:border-green-600 slide:border-green-600 object-cover" />
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}


export default ProductDetailsPage;