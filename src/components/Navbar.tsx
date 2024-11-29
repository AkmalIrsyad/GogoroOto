import Link from "next/link";
import React, { useState } from "react";

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="fixed top-0 left-0 w-full bg-white border-b-2 border-black z-50">
            <div className="container mx-auto px-4 flex items-center justify-between py-4">
                <Link href="/" className="text-xl font-bold italic">GogoroOto</Link>
                {/* Menu Hamburger Icon */}
                <div className="md:hidden" onClick={toggleMenu}>
                    <button className="text-black">
                        {isMenuOpen ? (
                            <i className="fas fa-times"></i> // Icon close
                        ) : (
                            <i className="fas fa-bars"></i> // Icon hamburger
                        )}
                    </button>
                </div>
                {/* Navbar Links */}
                <nav
                    className={`md:flex space-x-6 font-semibold transition-all ease-in-out duration-300 ${isMenuOpen ? "flex" : "hidden"
                        } md:block`}
                >
                    <Link
                        href="/"
                        className="italic hover:text-red-500 transition ease-in-out"
                    >
                        HOME
                    </Link>
                    <Link
                        href="/about"
                        className="italic hover:text-red-500 transition ease-in-out"
                    >
                        ABOUT
                    </Link>
                    <Link
                        href="https://wa.me/6285883311259"
                        className="italic hover:text-red-500 transition ease-in-out"
                    >
                        CONTACT
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
