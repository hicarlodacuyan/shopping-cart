import { useRef } from "react";
import { Link } from "react-router-dom";
import { MdOutlineShoppingCart, MdOutlineAccountCircle, MdMenu, MdClose } from "react-icons/md";

const Nav = () => {
  const mobileNavRef = useRef();
  const showMobileNav = () => mobileNavRef.current.classList.toggle("hidden");

  return (
    <nav className="py-4">
      <div className="max-w-6xl mx-auto px-4 mb-4">
        <div className="flex justify-between items-center">
          
          <div className="flex items-center md:gap-4 gap-2 text-slate-700 md:text-2xl text-xl">
            {/* Mobile Menu button */}
            <button className="md:hidden flex items-center">
              <MdMenu className="hover:text-black" onClick={showMobileNav} />
            </button>

            {/* Logo */}
            <Link to="/shopping-cart">
              <h1 className="font-bold hover:text-black">Shopping Cart</h1>
            </Link>
          </div>

          {/* Primary Nav */}
          <div className="hidden md:flex gap-4 text-slate-400">
            <Link to="/shop" className="hover:text-slate-700">Shop</Link>
            <Link to="/contact" className="hover:text-slate-700">Contact</Link>
            <Link to="/about" className="hover:text-slate-700">About</Link>
          </div>
          
          {/* Secondary Nav */}
          <div className="flex md:gap-4 gap-2 text-slate-700 md:text-2xl text-xl">
            <Link to="/cart">
              <MdOutlineShoppingCart className="hover:text-amber-400 transition duration-300" />
            </Link>
            <MdOutlineAccountCircle />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div ref={mobileNavRef} className="hidden md:hidden md:gap-4 flex flex-col gap-2 p-4 text-md text-slate-400 bg-slate-200">
        <Link to="/shop" className="hover:text-slate-700">Shop</Link>
        <Link to="/contact" className="hover:text-slate-700">Contact</Link>
        <Link to="/about" className="hover:text-slate-700">About</Link>
      </div>

    </nav>
  );
};

export default Nav;