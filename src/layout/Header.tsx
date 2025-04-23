"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import NugenLogo from "../../public/logo.png"
export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const toggleDropdown = (dropdown: string) => {
        // Toggle the dropdown when clicked
        setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    };
    // Close dropdown if clicked outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setActiveDropdown(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    // const closeDropdownAndNavigate = () => {
    //     setActiveDropdown(null);
    // };
    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center">
                            <Image
                                src={NugenLogo}
                                alt="Logo"
                                width={350}
                                height={150}
                                className="h-16 w-auto"
                            />
                        </Link>
                    </div>
                    {/* Navigation  */}
                    <nav className="hidden lg:flex space-x-6">
                        <Link
                            href="/"
                            className="text-black hover:text-[#ff6b3d] font-medium"
                        >
                            Home
                        </Link>
                        <div className="relative " ref={dropdownRef}>
                            <button
                                className="text-black hover:text-[#ff6b3d] font-medium flex items-center cursor-pointer "
                                onClick={() => toggleDropdown("courses")}
                            >
                                Courses

                                <ChevronDown
                                    className={`w-4 h-4 ml-1 transition-transform duration-200 ${activeDropdown === "courses" ? "rotate-180" : "rotate-360"
                                        }`}
                                />

                            </button>
                            {activeDropdown === "courses" && (
                                <div className="absolute bg-white shadow-lg rounded-md mt-4 w-64 left-0 z-50">
                                    <div className="divide-y divide-gray-200 divide-dashed">
                                        <Link href="/about" className="px-4 py-2 text-black hover:bg-gray-100 cursor-pointer flex items-center justify-between">
                                            Web Development
                                        </Link>
                                        <Link href="/about" className="px-4 py-2 text-black hover:bg-gray-100 cursor-pointer flex items-center justify-between">
                                            Data Science
                                        </Link>
                                        <Link href="/about" className="px-4 py-2 text-black hover:bg-gray-100 cursor-pointer flex items-center justify-between">
                                            Cyber Security
                                        </Link>
                                        <Link href="/about" className="px-4 py-2 text-black hover:bg-gray-100 cursor-pointer flex items-center justify-between">
                                            Cloud Computing
                                        </Link>
                                        <Link href="/about" className="px-4 py-2 text-black hover:bg-gray-100 cursor-pointer flex items-center justify-between">
                                            AI and Machine Learning
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                        <Link
                            href="/blog"
                            className="text-black hover:text-[#ff6b3d] font-medium"
                        >
                            Blog
                        </Link>
                        <Link
                            href="/aboutUs"
                            className="text-black hover:text-[#ff6b3d] font-medium"
                        >
                            About Us
                        </Link>
                        <div className="hidden lg:block">
                            <Link
                                href="/contactUs"
                                className="px-4 py-2 bg-gradient-to-r border border-gray-300 from-orange-400 to-purple-400 text-white  rounded-lg  duration-200"
 
                            >
                                Contact Us
                            </Link>
                        </div>
                    </nav>
                    {/* Mobile Menu Button  */}
                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-black focus:outline-none"
                        >
                            {isMobileMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden bg-white shadow-md z-50">
                    <div className="space-y-4 py-4 px-4">
                        <Link href="/" className="text-black block py-2">
                            Home
                        </Link>
                        <div className="text-black" ref={dropdownRef}>
                            <button
                                className="hover:text-[#ff6b3d] font-medium flex items-center justify-between w-full cursor-pointer"
                                onClick={() => toggleDropdown("courses")}
                            >
                                <span>Courses</span>
                                <ChevronDown
                                    className={`w-4 h-4 ml-2 transform transition-transform duration-300 ${activeDropdown === "courses" ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${activeDropdown === "courses" ? "max-h-96" : "max-h-0"
                                    }`}
                            >
                                <div className="flex flex-col mt-2 space-y-1 text-sm">
                                    <Link href="/about" className="px-4 py-2 text-black hover:bg-gray-100">
                                        Web Development
                                    </Link>
                                    <Link href="/about" className="px-4 py-2 text-black hover:bg-gray-100">
                                        Data Science
                                    </Link>
                                    <Link href="/about" className="px-4 py-2 text-black hover:bg-gray-100">
                                        Cyber Security
                                    </Link>
                                    <Link href="/about" className="px-4 py-2 text-black hover:bg-gray-100">
                                        Cloud Computing
                                    </Link>
                                    <Link href="/about" className="px-4 py-2 text-black hover:bg-gray-100">
                                        AI and Machine Learning
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <Link href="/blog" className="text-black block py-2">
                            Blog
                        </Link>
                        <Link href="/aboutUs" className="text-black block py-2">
                            About Us
                        </Link>
                        <Link href="/contactUs" className="text-black block py-2">
                            Contact Us
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}