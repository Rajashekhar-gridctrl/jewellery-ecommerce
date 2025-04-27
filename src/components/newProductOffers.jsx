const NewProductOffers = () => {
    return (

        <div className="flex md:flex-row flex-col items-center cards gap-4 my-20">

            <div data-section="card" class="card flex-4  rounded-lg p-5"
                style={{
                    backgroundColor: " hsla(23, 78%, 80%, 1)",
                    backgroundImage: "linear-gradient(259deg, #89FED9 -27.5%, #1E5443 101.96%, #B7DDCE 108.06%)"
                }}>
                <div class="flex items-center  justify-between text-white">
                    <div class="">
                        <p class="">The Grand Sale</p>
                        <p class="font-bold">Flat 30% Off on 2 or more Jewellery Designs</p>
                        <button class="bg-white rounded-lg px-2 py-1 my-2">
                            <a className="text-black" href="/"> Shop Now </a>
                        </button>
                        <p class="text-xs">Terms &amp; Condition Apply</p>
                    </div>
                    <div class="css-19hhiof ef7m5f7">
                        <img className="rounded-lg " src="https://ramyanagendra.com/cdn/shop/files/IMG_20241011_192253.jpg?v=1741863914&width=160"
                            alt="Services" title="Services" />
                    </div>
                </div>
            </div>
            <div data-section="card" class="card flex-4  rounded-lg p-5"
                style={{
                    backgroundColor: "hsla(274,100%,11%,1)",
                    backgroundImage: "radial-gradient(at 71% 23%,hsla(274,100%,11%,1) 0px,transparent 50%),radial-gradient(at 42% 65%,hsla(274,100%,11%,1) 0px,transparent 50%),radial-gradient(at 31% 44%,hsla(274,100%,11%,1) 0px,transparent 50%),radial-gradient(at 90% 45%,hsla(305,67%,25%,1) 0px,transparent 50%),radial-gradient(at 3% 2%,hsla(305,67%,25%,1) 0px,transparent 50%),radial-gradient(at 4% 82%,hsla(247,76%,25%,1) 0px,transparent 50%),radial-gradient(at 0% 100%,hsla(242,100%,70%,1) 0px,transparent 50%)"
                }}>
                <div class="flex items-center  justify-between text-white">
                    <div class="">
                        <p class="">The Grand Sale</p>
                        <p class="font-bold">Flat 30% Off on 2 or more Jewellery Designs</p>
                        <button class="bg-white rounded-lg px-2 py-1 my-2">
                            <a className="text-black" href="/"> Shop Now </a>
                        </button>
                        <p class="text-xs">Terms &amp; Condition Apply</p>
                    </div>
                    <div className="rounded-lg " >
                        <img src="https://ramyanagendra.com/cdn/shop/files/IMG_20241011_192253.jpg?v=1741863914&width=160" alt="Services" title="Services" />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default NewProductOffers;