import { useState } from "react";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import ProductYouMayLike from "../components/ProductYouMayLike";
import NewProductOffers from "../components/newProductOffers";
import StoreLocations from "../components/StoreLocations";

const images = ["http://localhost:5173/src/assets/images/product-1.jpg",
    "http://localhost:5173/src/assets/images/product-2.jpg",
    "http://localhost:5173/src/assets/images/product-3.jpg",
    "http://localhost:5173/src/assets/images/product-4.jpg"
]

const ProductDetailsPage = () => {

    const [productImage, setProductImaege] = useState('http://localhost:5173/src/assets/images/product-1.jpg')

    const productImageHandler = (img) => {
        return () => setProductImaege(img)
    }

    return (
        <div className="p-10  font-lato">
            <div className="lg:max-w-6xl max-w-xl mx-auto">
                <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-8 max-lg:gap-12 max-sm:gap-8">
                    <div className="w-full lg:sticky top-0">
                        <div className="flex flex-row gap-2">
                            <div className="flex flex-col gap-2 w-16 max-sm:w-14 shrink-0">
                                {images.map((img) => (
                                    <img key={img} onClick={productImageHandler(img)} src={img} alt="Product1"
                                        className="aspect-[64/85] object-cover object-top w-full cursor-pointer rounded-lg border-b-2 border-black" />

                                ))}
                            </div>
                            <div className="flex-1">
                                <img src={productImage} alt="Product"
                                    className="w-full  rounded-lg  aspect-[548/712] object-cover" />
                            </div>
                        </div>
                    </div>

                    <div className="w-full">
                        <div>
                            <h3 className="text-lg sm:text-xl font-semibold text-slate-900">Divine 1grm Gold Bangles NKNGS5231</h3>
                            <p className="text-slate-500 mt-2 text-sm">Product Code: NKNGS5231</p>
                            <div className="flex items-center flex-wrap gap-4 mt-6">
                                <h4 className="text-slate-900 text-2xl sm:text-3xl font-semibold">
                                    <span className="flex items-center font-lato text-green-900"><MdOutlineCurrencyRupee className="text-md" /> 490</span>
                                </h4>
                                <p className="flex items-center font-lato text-slate-500 text-sm">MRP <strike className="flex items-center font-lato "><MdOutlineCurrencyRupee className="text-md" />590</strike> <span className="text-xs ml-1.5">
                                    Incl. of all taxes</span></p>
                            </div>

                            <div className="flex items-center gap-4 mt-4">
                                <div className="flex items-center gap-1 text-lg px-2.5 bg-green-600 text-white rounded-full">
                                    <p>4</p>
                                    <svg className="w-[13px] h-[13px] fill-white" viewBox="0 0 14 13" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                </div>
                                <p className="text-slate-500 text-sm">253 ratings and 27 reviews</p>
                            </div>
                        </div>

                        <hr className="my-6 border-slate-300" />

                        <div>
                            <h3 className="text-lg sm:text-xl font-semibold text-slate-900">Sizes</h3>
                            <div className="flex flex-wrap gap-4 mt-4">
                                <button type="button"
                                    className="w-10 h-9 rounded-lg border border-slate-300 hover:border-green-600 text-sm  flex items-center justify-center shrink-0">SM</button>
                                <button type="button"
                                    className="w-10 h-9 rounded-lg border border-green-600 hover:border-green-600 text-sm  flex items-center justify-center shrink-0">MD</button>
                                <button type="button"
                                    className="w-10 h-9 rounded-lg border border-slate-300 hover:border-green-600 text-sm  flex items-center justify-center shrink-0">LG</button>
                                <button type="button"
                                    className="w-10 h-9 rounded-lg border border-slate-300 hover:border-green-600 text-sm  flex items-center justify-center shrink-0">XL</button>
                            </div>
                            <div className="flex justify-left mt-5 w-full">
                                <button
                                    className="group py-4 px-6 border border-gray-400 rounded-l-full shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-300 hover:bg-gray-50">
                                    <svg className="stroke-gray-700 transition-all duration-500 group-hover:stroke-black"
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
                                    className="font-semibold text-gray-900 text-lg py-[13px] px-6 w-full lg:max-w-[118px] border-y border-gray-400 bg-transparent placeholder:text-gray-900 text-center hover:bg-gray-50 focus-within:bg-gray-50 outline-0"
                                    placeholder="1" />
                                <button
                                    className="group py-4 px-6 border border-gray-400 rounded-r-full shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-300 hover:bg-gray-50">
                                    <svg className="stroke-gray-700 transition-all duration-500 group-hover:stroke-black"
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
                            <div className="mt-6 flex flex-wrap gap-4">
                                <button type="button"
                                    className="px-4 py-3 w-[45%] border rounded-lg border-green-600 bg-green-600 hover:bg-green-700 text-white text-sm font-medium">Add
                                    to cart</button>
                                <button type="button"
                                    className="px-4 py-3 w-[45%] border rounded-lg border-slate-300 bg-slate-100 hover:bg-slate-200 text-slate-900 text-sm font-medium">Add
                                    to wishlist</button>
                            </div>
                        </div>
                        <hr className="my-6 border-slate-300" />
                        <div>
                            <h3 className="text-lg sm:text-xl font-semibold text-green-900">Select Delivery Option</h3>
                            <p className="text-slate-500 text-sm my-2">You can now purchase this item online or at a nearby store for added convenience.</p>
                            <div>
                                <ul className="text-sm list-disc pl-5 mt-1 mb-3 text-slate-600">
                                    <li>RamyaNagendra Imitations, 1-2-161/A/1, Krishna nagar, 505327 Jagtial TS, Bharat</li>
                                    <li>RamyaNagendra Imitations, Hyderabad TS, Bharat</li>
                                </ul>
                            </div>

                            <hr className="my-6 border-slate-300" />

                            <h3 className="text-lg sm:text-xl font-semibold text-green-900">Select Delivery Location</h3>
                            <p className="text-slate-500 text-sm mt-2">Enter the pincode of your area to check product availability.</p>
                            <div className="flex items-center gap-2 mt-6 max-w-sm">
                                <input type='number' placeholder='Enter pincode'
                                    className="bg-slate-100 px-4 py-2.5 text-sm w-full  border-0 outline-0" />
                                <button type='button'
                                    className="border-0 outline-0 bg-green-600 hover:bg-green-700 text-white  px-4 py-2.5 text-sm">Apply</button>
                            </div>

                        </div>

                        <hr className="my-6 border-slate-300" />

                        <div>
                            <h3 className="text-lg sm:text-xl font-semibold text-green-900">Product Information</h3>
                            <div className="mt-4" role="accordion">
                                <div className="hover:bg-green-100 transition-all">
                                    <button type="button"
                                        className="w-full text-sm font-semibold text-left px-4 py-2.5 text-slate-900 flex items-center">
                                        <span className="mr-4">Product details</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 fill-current ml-auto shrink-0 -rotate-180"
                                            viewBox="0 0 24 24">
                                            <path fill-rule="evenodd"
                                                d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                                                clip-rule="evenodd" data-original="#000000"></path>
                                        </svg>
                                    </button>
                                    <div className="pb-4 px-4">
                                        <p className="text-sm text-slate-500 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing
                                            elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </div>

                                <div className="hover:bg-slate-100 transition-all">
                                    <button type="button"
                                        className="w-full text-sm font-semibold text-left px-4 py-2.5 text-slate-900 flex items-center">
                                        <span className="mr-4">Vendor details</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 fill-current ml-auto shrink-0 -rotate-90"
                                            viewBox="0 0 24 24">
                                            <path fill-rule="evenodd"
                                                d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                                                clip-rule="evenodd" data-original="#000000"></path>
                                        </svg>
                                    </button>
                                    <div className="pb-4 px-4 hidden">
                                        <p className="text-sm text-slate-500 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing
                                            elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </div>

                                <div className="hover:bg-green-100 transition-all">
                                    <button type="button"
                                        className="w-full text-sm font-semibold text-left px-4 py-2.5 text-green-900 flex items-center">
                                        <span className="mr-4">Return and exchange policy</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 fill-current ml-auto shrink-0 -rotate-90"
                                            viewBox="0 0 24 24">
                                            <path fill-rule="evenodd"
                                                d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                                                clip-rule="evenodd" data-original="#000000"></path>
                                        </svg>
                                    </button>
                                    <div className="pb-4 px-4 hidden">
                                        <p className="text-sm text-slate-500 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing
                                            elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr className="my-6 border-slate-300" />

                        <div>
                            <h3 className="text-lg sm:text-xl font-semibold text-slate-900">Customer Reviews</h3>
                            <div className="flex items-center gap-1.5 mt-6">
                                <svg className="w-5 h-5 fill-green-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <svg className="w-5 h-5 fill-green-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <svg className="w-5 h-5 fill-green-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <svg className="w-5 h-5 fill-green-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <svg className="w-5 h-5 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                            </div>

                            <div className="flex items-center flex-wrap gap-4 mt-4">
                                <h4 className="text-2xl sm:text-3xl text-slate-900 font-semibold">4.0 / 5</h4>
                                <p className="text-sm text-slate-500">Based on 253 ratings</p>
                            </div>
                        </div>

                        <div className="mt-6">
                            <div className="flex items-start">
                                <div>
                                    <img src="https://ramyanagendra.com/cdn/shop/files/IMG_20240909_225927.jpg?v=1725903431&width=100" className="w-12 h-12 rounded-full border-2 border-white" />
                                    <div className="ml-3">
                                        <h4 className="text-slate-900 text-sm font-semibold">Nagendra</h4>
                                        <div className="flex space-x-1 mt-1">
                                            <svg className="w-[14px] h-[14px] fill-green-600" viewBox="0 0 14 13" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                            </svg>
                                            <svg className="w-[14px] h-[14px] fill-green-600" viewBox="0 0 14 13" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                            </svg>
                                            <svg className="w-[14px] h-[14px] fill-green-600" viewBox="0 0 14 13" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                            </svg>
                                            <svg className="w-[14px] h-[14px] fill-green-600" viewBox="0 0 14 13" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                            </svg>
                                            <svg className="w-[14px] h-[14px] fill-green-600" viewBox="0 0 14 13" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                            </svg>
                                            <p className="text-xs text-slate-500 !ml-2">1 months ago</p>
                                        </div>
                                        <p className="text-sm text-slate-500 mt-4">I bought a 1-gram gold bangle online and loved it! The price was good, the size was perfect, and the gold stayed shiny. Delivery was quick, and the seller was helpful. A great buy!
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <img src="https://ramyanagendra.com/cdn/shop/files/IMG-20250110-WA0258.jpg?v=1736517436&width=100" className="w-12 h-12 rounded-full border-2 border-white" />
                                    <div className="ml-3">
                                        <h4 className="text-slate-900 text-sm font-semibold">Ramya</h4>
                                        <div className="flex space-x-1 mt-1">
                                            <svg className="w-[14px] h-[14px] fill-green-600" viewBox="0 0 14 13" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                            </svg>
                                            <svg className="w-[14px] h-[14px] fill-green-600" viewBox="0 0 14 13" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                            </svg>
                                            <svg className="w-[14px] h-[14px] fill-green-600" viewBox="0 0 14 13" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                            </svg>
                                            <svg className="w-[14px] h-[14px] fill-green-600" viewBox="0 0 14 13" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                            </svg>
                                            <svg className="w-[14px] h-[14px] fill-green-600" viewBox="0 0 14 13" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                            </svg>
                                            <p className="text-xs text-slate-500 !ml-2">2 months ago</p>
                                        </div>
                                        <p className="text-sm text-slate-500 mt-4">I bought a 1-gram gold bangle online. It was affordable, fit perfectly, and kept its shine. The delivery was fast, and the seller was friendly. Great experience!

                                        </p>
                                    </div>
                                </div>
                            </div>
                            <a href="javascript:void(0)" className="block text-green-600 hover:underline text-sm mt-6 font-semibold">Read all
                                reviews</a>
                        </div>
                    </div>
                </div>
            </div>
            <NewProductOffers />
            <ProductYouMayLike />
            <StoreLocations />

        </div>
    )
}


export default ProductDetailsPage;