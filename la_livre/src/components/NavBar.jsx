import React, { useContext, useEffect, useState } from "react";
import { Link, useResolvedPath } from "react-router-dom";
import { FaBlog, FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { AuthContext } from "../contacts/AuthProvider";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [scrollDirection, setScrollDirection] = useState(null);

  const { user } = useContext(AuthContext);
  console.log(user);

  // Toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Detect scroll direction
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Set sticky if scrollY is greater than 100
      setIsSticky(currentScrollY > 100);

      // Check scroll direction
      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup event listener
    };
  }, []);

  // navItems
  const navItems = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "Shop", path: "/shop" },
    { link: "Sell Your Book", path: "/admin/dashboard" },
    { link: "Blog", path: "/blog" },
  ];

  return (
    <header
      className={`w-full fixed top-0 left-0 right-0 transition-all ease-in duration-300 ${
        isSticky
          ? scrollDirection === "up"
            ? "bg-blue-500 shadow-md"
            : "bg-white"
          : "bg-transparent"
      }`}
    >
      <nav className="py-4">
        {/* Logo */}
        <div className=" flex items-center justify-between text-base gap-8">
          <Link
            to="/"
            className="text-2xl font-bold text-blue-700 flex items-center gap-2"
          >
            <FaBlog className="inline-block" aria-label="Logo" />
            Books
          </Link>

          {/* Navigation for large devices */}
          <ul className="hidden md:flex space-x-12">
            {navItems.map(({ link, path }) => (
              <li key={path}>
                <Link
                  to={path}
                  className="block text-base text-black uppercase cursor-pointer hover:text-blue-400"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>

          {/* Button for large devices */}
          <div className="hidden lg:flex items-center">
            <button aria-label="Menu">
              <FaBarsStaggered className="w-5 hover:text-blue-400" />
            </button>
            {user ? user.email : ""}
          </div>

          {/* Menu button for mobile devices */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="h-5 w-5 text-black focus:outline-none"
              aria-label="Mobile Menu Toggle"
            >
              {isMenuOpen ? (
                <FaXmark
                  className="h-5 w-5 text-black"
                  aria-label="Close Menu"
                />
              ) : (
                <FaBarsStaggered
                  className="h-5 w-5 text-black"
                  aria-label="Open Menu"
                />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu (Show/Hide based on isMenuOpen) */}
        {isMenuOpen && (
          <ul className="md:hidden space-y-4 mt-4 bg-blue-400 px-4 py-6">
            {navItems.map(({ link, path }) => (
              <li key={path}>
                <Link
                  to={path}
                  className="block text-base text-white uppercase cursor-pointer"
                  onClick={() => setIsMenuOpen(false)} // Close menu on item click
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
