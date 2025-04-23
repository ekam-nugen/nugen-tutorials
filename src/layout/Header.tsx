"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
// import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
// import NugenLogo from "../../public/logo.png"
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
                            <div className="flex items-center">
                                <span className="font-bold text-2xl text-orange-500">Nu<span className="text-black">Gen</span></span>
                            </div>
                            {/* <Image
                                src={NugenLogo} // Replace with your logo image path
                                alt="Logo"
                                width={350}
                                height={150}
                                className="h-20 w-auto"
                            /> */}
                        </Link>
                    </div>
                    {/* Navigation  */}
                    <nav className="hidden lg:flex space-x-6">
                        <Link
                            href="/aboutUs"
                            className="text-black hover:text-[#ff6b3d] font-medium"
                        >
                            About Us
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
                            href="/coporate-training"
                            className="text-black hover:text-[#ff6b3d] font-medium"
                        >
                            Corporate Training
                        </Link>
                        <Link
                            href="/placement"
                            className="text-black hover:text-[#ff6b3d] font-medium"
                        >
                            Placement
                        </Link>
                        <Link
                            href="/blog"
                            className="text-black hover:text-[#ff6b3d] font-medium"
                        >
                            Blog
                        </Link>
                        <Link
                            href="/contactUs"
                            className="text-black hover:text-[#ff6b3d] font-medium"
                        >
                            Contact
                        </Link>
                        <div className="hidden lg:block">
                            <Link
                                href="/enroll"
                                className="bg-[#ff6b3d] text-white px-4 py-2 rounded-md font-medium"
                            >
                                Enroll Now
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
                        <Link href="/about" className="text-black block py-2">
                            About Us
                        </Link>
                        <Link href="/courses" className="text-black block py-2">
                            Courses
                        </Link>
                        <Link href="/corporate-training" className="text-black block py-2">
                            Corporate Training
                        </Link>
                        <Link href="/placement" className="text-black block py-2">
                            Placement
                        </Link>
                        <Link href="/blog" className="text-black block py-2">
                            Blog
                        </Link>
                        <Link href="/contact" className="text-black block py-2">
                            Contact
                        </Link>
                        <Link href="/enroll" className="text-center text-orange-500 hover:text-gray-900 block py-2 font-bold">
                            Enroll Now
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}