function DesktopMenu() {
  return (
    <div className="hidden md:flex items-center gap-10 mx-auto justify-center mt-4 pb-4">
      <ul className="flex gap-8 text-gray-700">
        <li><a className="hover:text-gray-500" href="#products">All Products</a></li>
        <li><a className="hover:text-gray-500" href="#solutions">Bestsellers</a></li>
        <li><a className="hover:text-gray-500" href="#solutions">Latest Collection</a></li>
        <li><a className="hover:text-gray-500" href="#solutions">Instagram Collection</a></li>
        <li><a className="hover:text-gray-500" href="#solutions">Necklaces</a></li>
        <li><a className="hover:text-gray-500" href="#resources">Earrings</a></li>
        <li><a className="hover:text-gray-500" href="#developers">Bangles</a></li>
        <li><a className="hover:text-gray-500" href="#pricing">Accessories</a></li>
        <li><a className="hover:text-gray-500" href="#pricing">Wedding Store</a></li>
      </ul>
    </div>
  );
}

export default DesktopMenu;