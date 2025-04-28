import React from "react";

const InstagramCollection = () => {
    const videos = [
        "https://youtube.com/shorts/re1uIe9AmnE?si=O5LNWVFdzivVozA6",
        "https://www.youtube.com/shorts/re1uIe9AmnE?feature=share",
        "https://www.youtube.com/shorts/re1uIe9AmnE?feature=share",
    ];

    return (
        <div className="max-w-8xl mx-auto mt-10 p-8" id='instagram-collection'>
            {/* Title Section */}
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
                Follow Us on Youtube ✨
            </h1>
           
            {/* Video Gallery - 3 elements in a row */}
            <div className="grid grid-cols-1 md:grid-cols-4 grid-cols-2 gap-6">
            <div className="rounded-lg overflow-hidden shadow-lg h-40 w-45 md:h-160 md:w-85">
            <iframe className="h-40 w-50 md:h-160 md:w-100" src="https://www.youtube.com/embed/WEd48glMbSw" title="Best Bridal collection at RamyaNagendra imitations" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg h-40 w-45 md:h-160 md:w-85">
            <iframe  className="h-40 w-50 md:h-160 md:w-100"  src="https://www.youtube.com/embed/V02_j_8jH_8" title="COST-390/- BOOK your order through website. WWW.RAMYANAGENDRA.COM #imitationjewellery #blackbeads" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div> <div className="rounded-lg overflow-hidden shadow-lg h-40 w-45 md:h-160 md:w-85">
            <iframe  className="h-40 w-50 md:h-160 md:w-100" src="https://www.youtube.com/embed/lOLa8ng62SA" title="Every piece is as special as you are|| RamyaNagendra Imitations are specialists in Handmade" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div> <div className="rounded-lg overflow-hidden shadow-lg h-40 w-45 md:h-160 md:w-85">
            <iframe  className="h-40 w-50 md:h-160 md:w-100" src="https://www.youtube.com/embed/LRfOB321Pgo" title="A situation should make us more stronger @SumantvMoneyWallet #ramyanagendraimitations" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            </div>
        </div>
    );
};

export default InstagramCollection;