import React from "react";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { FiArrowRight } from "react-icons/fi";
import productImg1 from "../assets/images/product-1-bg.png";
import productImg2 from "../assets/images/product-2-bg.png";
import productImg3 from "../assets/images/product-3.jpg";
import productImg4 from "../assets/images/product-4.jpg";
import productImg5 from "../assets/images/product-5.jpg";
import productImg6 from "../assets/images/product-6.jpg";
import productImg7 from "../assets/images/product-7.jpg";
import productImg8 from "../assets/images/product-8.jpg";
import productImg9 from "../assets/images/product-9.jpg";

const products = [
    { id: 1, name: "Sample Name Gold plated", price: 1050.0, oldPrice: 1150.0, discount: "-50%", image: productImg1 },
    { id: 2, name: "Sample Name Zircon Gold Plated Ring", price: 800.75, oldPrice: 900.54, image: productImg2 },
    { id: 3, name: "Sample Name Chain Necklace Gold", price: 900.00, oldPrice: 1000.00, image: productImg3 },
    { id: 4, name: "Sample Name Diamond Brooch", price: 750.00, oldPrice: 800.002, image: productImg4 },
    { id: 5, name: "Sample Name Emerald Ring", price: 1100.00, oldPrice: 1300.00, discount: "-20%", image: productImg5 },
    { id: 6, name: "Sample Name Silver Chain", price: 950.50, oldPrice: 1000.00, image: productImg6 },
    { id: 7, name: "Sample Name Sapphire Brooch", price: 1250.00, oldPrice: 1350.00, discount: "-15%", image: productImg7 },
    { id: 8, name: "Sample Name Gold Hoops", price: 600.00, oldPrice: 750.00, image: productImg8 },
    { id: 9, name: "Sample Name Rose Gold Bracelet", price: 1500.00, oldPrice: 1600.00, image: productImg9 },
    { id: 10, name: "Sample Name Platinum Studs", price: 2000.00, oldPrice: 2200.00, discount: "-10%", image: productImg1 },
    { id: 11, name: "Sample Name Amethyst Pendant", price: 1300.00, oldPrice: 1450.00, discount: "-10%", image: productImg2 },
    { id: 12, name: "Sample Name Pearl Earrings", price: 850.00, oldPrice: 950.00, image: productImg4 },
];

const ProductYouMayLike = () => {
    return (
        <div className="container min-w-full p-5 px-10 mt-20 bg-green-100 rounded-md " style={{
            background: "linear-gradient(352.75deg, rgb(194 166 117) -5.77%, rgb(252, 255, 248) 102.02%, rgb(252, 255, 248) 102.02%)"
        }}>

            <div className="">
                <h3 className="flex-12 sm:text-3xl text-2xl font-lato font-semibold text-center">
                    Product you May Like
                </h3>

                <hr className="my-6 border-slate-300" />
                <div className="flex group block gap-10 overflow-x-auto pb-10">
                    {products.map((product) => {
                        return (

                            <div className="min-w-[30%] border-green-100 bg-white rounded-lg">
                                <img src={product.image}
                                    className="w-full object-contain rounded-t-lg" />
                                <div>
                                    <h4 className="relative font-lato p-2 rounded-b-lg text-green  sm:text-base text-[14px]  tracking-wider font-normal"
                                    >
                                        Necklace
                                        <span className="flex items-center">
                                            <MdOutlineCurrencyRupee className="text-md" /> 780</span>
                                        <div
                                            className="absolute bottom-4 right-4 text-gray-500 group-hover:text-green-800"
                                        >
                                            <FiArrowRight size={20} />
                                        </div>
                                    </h4>

                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ProductYouMayLike;