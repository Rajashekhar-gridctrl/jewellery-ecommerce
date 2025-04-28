import { useState } from "react";
import { Helmet } from "react-helmet";
import { MdOutlineCurrencyRupee, MdOutlineArrowForwardIos, MdShare } from "react-icons/md";
import ProductYouMayLike from "../components/ProductYouMayLike";
import NewProductOffers from "../components/newProductOffers";
import StoreLocations from "../components/StoreLocations";

import featuredImg from "../assets/images/woman-2.jpg";
import productImg1 from "../assets/images/product-1.jpg";
import productImg2 from "../assets/images/product-2.jpg";
import productImg3 from "../assets/images/product-3.jpg";
import productImg4 from "../assets/images/product-4.jpg";

const images = [featuredImg,
    productImg1,
    productImg2,
    productImg3,
    productImg4
]


const ProductDetailsPage = () => {

    const [productImage, setProductImaege] = useState(images[0])
    const [productSize, setProductSize] = useState('SM')
    const [productInfo, setProductInfo] = useState('product details')
    const [orderCount, setOrderCount] = useState(1)

    const productImageHandler = (img) => {
        return () => setProductImaege(img)
    }

    const sizeHandler = (size) => {
        setOrderCount(1);
        setProductSize(size);
    }

    const shareHandler = async () => {
        await navigator?.share({
            url: 'https://jewellery-ecommerce-five.vercel.app/product',
            title: 'Divine 1grm Gold Bangles - Buy Now.',
            text: 'Divine 1grm Gold Bangles - Buy Now',
        });
    }


    return (
        <>
            <Helmet>
                <title>Divine 1grm Gold Bangles - Buy Now</title>
                <meta name="title" content="Divine 1grm Gold Bangles - Buy Now" />
                <meta name="description" content='Discover our exquisite collection of handmade and readymade imitation jewelry, crafted with care and quality. From elegant necklaces to timeless bangles, explore unique designs perfect for every special occasion. Shop now for affordable luxury and experience exceptional service' />
                <meta name="description" content="Elegant 1-gram gold bangles, perfect for every occasion." />
                <meta property="og:title" content="Divine 1grm Gold Bangles - Buy Now" />
                <meta property="og:description" content="Elegant 1-gram gold bangles, perfect for every occasion." />
                <meta property="og:image" content="https://jewellery-ecommerce-five.vercel.app/assets/product-1-jAlF4z-T.jpg" />
                <meta property="og:url" content="https://jewellery-ecommerce-five.vercel.app/product" />
                <meta property="og:type" content="product" />
                <meta property="og:image:width" content="720" />
                <meta property="og:image:height" content="683" />
                <meta property="og:price:amount" content="599.00" />
                <meta property="og:price:currency" content="INR" />
            </Helmet>

            <div className="p-10 pb-0 font-lato">
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
                                        <span className="flex items-center font-lato text-[#c2a675]">
                                            <MdOutlineCurrencyRupee className="text-md" /> 490</span>
                                    </h4>
                                    <p className="flex items-center font-lato text-slate-500 text-sm">MRP <strike className="flex items-center font-lato "><MdOutlineCurrencyRupee className="text-md" />590</strike> <span className="text-xs ml-1.5">
                                        Incl. of all taxes</span></p>
                                </div>

                                <div className="flex items-center gap-4 mt-4">
                                    <div className="flex items-center gap-1 text-lg px-2.5 bg-[#c2a675] text-white rounded-full">
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
                                <h3 className="text-sm font-semibold text-slate-900">Sizes</h3>
                                <div className="flex flex-wrap gap-4 mt-3">
                                    {['SM', 'MD', 'LG', 'XL'].map((size) => (
                                        <button key={size} type="button"
                                            onClick={sizeHandler.bind(this, size)}
                                            className={`${productSize === size && 'bg-gray-600'} w-10 h-9 rounded-lg border text-[#c2a675] border-[#c2a675] hover:border-black text-sm  flex items-center justify-center shrink-0`}>
                                            {size}</button>
                                    ))} </div>
                                <div className="flex justify-left mt-5 w-full">
                                    <button
                                        onClick={setOrderCount.bind(this, (orderCount - 1) || 1)}
                                        className="group py-4 px-6 border border-[#c2a675] rounded-l-full shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-300 hover:bg-gray-50">
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
                                        className="font-semibold text-gray-900 text-lg py-[13px] px-6 w-full lg:max-w-[118px] border-y border-[#c2a675] bg-transparent text-center hover:bg-gray-50 focus-within:bg-gray-50 outline-0"
                                        value={orderCount} />
                                    <button
                                        onClick={setOrderCount.bind(this, orderCount + 1)}
                                        className="group py-4 px-6 border border-[#c2a675] rounded-r-full shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-300 hover:bg-gray-50">
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

                                    <button
                                        onClick={shareHandler}
                                        className="py-4 px-6 border border-[#c2a675] rounded-full shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-300 hover:bg-gray-50 ml-4 flex items-center gap-2">
                                        <MdShare size={24} /> Share
                                    </button>

                                </div>
                                <div className="mt-6 flex flex-wrap gap-4">
                                    <button type="button"
                                        onClick={() => alert('Added to cart')}
                                        className="px-4 py-3 w-[45%] border rounded-lg border-[#c2a675]  bg-[#c2a675] hover:bg-[#CFB484] text-white text-sm font-medium">Add
                                        to cart</button>
                                    <button type="button"
                                        onClick={() => alert('Added to wishlist')}
                                        className="px-4 py-3 w-[45%] border rounded-lg border-slate-300 bg-slate-100 hover:bg-slate-200 text-slate-900 text-sm font-medium">Add
                                        to wishlist</button>
                                </div>
                            </div>
                            <hr className="my-6 border-slate-300" />
                            <div>
                                <h3 className="text-lg sm:text-xl font-semibold text-[#c2a675]">Select Delivery Option</h3>
                                <p className="text-slate-500 text-sm my-2">You can now purchase this item online or at a nearby store for added convenience.</p>
                                <div>
                                    <ul className="text-sm list-disc pl-5 mt-1 mb-3 text-slate-600">
                                        <li>Ramya nagendra Imitations, 1-2-161/A/1, Krishna nagar, 505327 Jagtial TS, Bharat</li>
                                        <li>Ramya nagendra Imitations, Hyderabad TS, Bharat</li>
                                    </ul>
                                </div>

                                <hr className="my-6 border-slate-300" />

                                <h3 className="text-lg sm:text-xl font-semibold text-[#c2a675]">Select Delivery Location</h3>
                                <p className="text-slate-500 text-sm mt-2">Enter the pincode of your area to check product availability.</p>
                                <div className="flex items-center gap-2 mt-6 max-w-sm">
                                    <input type='tel' placeholder='Enter pincode'
                                        className="bg-slate-100 px-4 py-2.5 text-sm w-full  border-0 outline-0" />
                                    <button type='button' onClick={() => alert('Fetching location')}
                                        className="border-0 outline-0 bg-[#c2a675] hover:bg-gray-600 text-white  px-4 py-2.5 text-sm">Apply</button>
                                </div>

                            </div>

                            <hr className="my-6 border-slate-300" />

                            <div>
                                <h3 className="text-lg sm:text-xl font-semibold text-[#c2a675]">Product Information</h3>
                                <div className="mt-4" role="accordion">
                                    <div className="hover:bg-[#c2a675] transition-all">
                                        <button type="button"
                                            onClick={setProductInfo.bind(this, 'product details')}
                                            className="w-full text-sm font-semibold text-left px-4 py-2.5 text-slate-900 flex items-center">
                                            <span className="mr-4">Product details</span>
                                            {productInfo === 'product details' ? <MdOutlineArrowForwardIos className="w-3 h-3 fill-current ml-auto shrink-0 -rotate-90" /> : <MdOutlineArrowForwardIos className="w-3 h-3 fill-current ml-auto shrink-0 -rotate-0" />}
                                        </button>
                                        {productInfo === 'product details' && <div className="pb-4 px-4">
                                            <p className="text-sm text-slate-500 leading-relaxed">Azuna 1grm Gold Chain</p>
                                        </div>}

                                    </div>

                                    <div className="hover:bg-slate-100 transition-all">
                                        <button type="button"
                                            onClick={setProductInfo.bind(this, 'vendor details')}
                                            className="w-full text-sm font-semibold text-left px-4 py-2.5 text-slate-900 flex items-center">
                                            <span className="mr-4">Vendor details</span>
                                            {productInfo === 'vendor details' ? <MdOutlineArrowForwardIos className="w-3 h-3 fill-current ml-auto shrink-0 -rotate-90" /> : <MdOutlineArrowForwardIos className="w-3 h-3 fill-current ml-auto shrink-0 -rotate-0" />}
                                        </button>
                                        {productInfo === 'vendor details' && <div className="pb-4 px-4">
                                            <p className="text-sm text-slate-600 leading-relaxed">Ramya Nagendra Imitations</p>
                                        </div>}
                                    </div>

                                    <div className="hover:bg-[#c2a675] transition-all">
                                        <button type="button"
                                            onClick={setProductInfo.bind(this, 'policy')}
                                            className="w-full text-sm font-semibold text-left px-4 py-2.5 text-black flex items-center">
                                            <span className="mr-4">Return and exchange policy</span>
                                            {productInfo === 'policy' ? <MdOutlineArrowForwardIos className="w-3 h-3 fill-current ml-auto shrink-0 -rotate-90" /> : <MdOutlineArrowForwardIos className="w-3 h-3 fill-current ml-auto shrink-0 -rotate-0" />}
                                        </button>
                                        {productInfo === 'policy' && <div className="pb-4 px-4">
                                            <p className="text-sm text-slate-500 leading-relaxed">Azuna 1grm Gold Chain</p>
                                        </div>}
                                    </div>
                                </div>
                            </div>

                            <hr className="my-6 border-slate-300" />

                            <div>
                                <h3 className="text-lg sm:text-xl font-semibold text-slate-900">Customer Reviews</h3>
                                <div className="flex items-center gap-1.5 mt-6">
                                    <svg className="w-5 h-5 fill-[#c2a675]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <svg className="w-5 h-5 fill-[#c2a675]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <svg className="w-5 h-5 fill-[#c2a675]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <svg className="w-5 h-5 fill-[#c2a675]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                                <svg className="w-[14px] h-[14px] fill-[#c2a675]" viewBox="0 0 14 13" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                                </svg>
                                                <svg className="w-[14px] h-[14px] fill-[#c2a675]" viewBox="0 0 14 13" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                                </svg>
                                                <svg className="w-[14px] h-[14px] fill-[#c2a675]" viewBox="0 0 14 13" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                                </svg>
                                                <svg className="w-[14px] h-[14px] fill-[#c2a675]" viewBox="0 0 14 13" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                                </svg>
                                                <svg className="w-[14px] h-[14px] fill-[#c2a675]" viewBox="0 0 14 13" fill="none"
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
                                                <svg className="w-[14px] h-[14px] fill-[#c2a675]" viewBox="0 0 14 13" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                                </svg>
                                                <svg className="w-[14px] h-[14px] fill-[#c2a675]" viewBox="0 0 14 13" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                                </svg>
                                                <svg className="w-[14px] h-[14px] fill-[#c2a675]" viewBox="0 0 14 13" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                                </svg>
                                                <svg className="w-[14px] h-[14px] fill-[#c2a675]" viewBox="0 0 14 13" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                                </svg>
                                                <svg className="w-[14px] h-[14px] fill-[#c2a675]" viewBox="0 0 14 13" fill="none"
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
                                <a href="javascript:void(0)" className="block text-[#c2a675] hover:underline text-sm mt-6 font-semibold">Read all
                                    reviews</a>
                            </div>
                        </div>
                    </div>
                </div>
                <NewProductOffers />
                <ProductYouMayLike />
                <StoreLocations />

            </div>
        </>
    )
}


export default ProductDetailsPage;