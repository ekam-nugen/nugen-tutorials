"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
// import Image from "next/image";
import { ChevronDown, Menu, X, ChevronRight } from "lucide-react";
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
    const closeDropdownAndNavigate = () => {
        setActiveDropdown(null);
    };
    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center">
                            <div className="flex items-center">
                                <span className="font-bold text-2xl text-orange-400">Nu<span className="text-black">Gen</span></span>
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
                        {/* About Us Dropdown  */}
                        <div className="relative" ref={dropdownRef}>
                            <button
                                className="text-black hover:text-[#ff6b3d] font-medium flex items-center"
                                onClick={() => toggleDropdown("courses")}
                            >
                              Courses
                                <ChevronDown className="w-4 h-4 ml-1" />
                            </button>
                            {activeDropdown === "courses" && (
                                <div className="absolute bg-white shadow-lg rounded-md mt-2 w-64 left-0 z-50">
                                    <div className="divide-y divide-gray-200 divide-dashed">
                                        <div className="relative group/sub">
                                            {/* <h4 className="font-semibold px-4 py-2 text-black hover:bg-gray-100 cursor-pointer flex items-center justify-between">
                                                Company Profile
                                                <ChevronRight className="w-4 h-4 text-[#ff6b3d]" />
                                            </h4> */}
                                            <div className="absolute hidden group-hover/sub:block bg-white shadow-lg rounded-md w-64 top-0 left-full z-50">
                                                <Link
                                                    href="/about"
                                                    className="block px-4 py-2 text-black hover:bg-gray-100"
                                                    onClick={closeDropdownAndNavigate}
                                                >
                                                    Profile
                                                </Link>
                                                <Link
                                                    href="/about/blog"
                                                    className="block px-4 py-2 text-black hover:bg-gray-100"
                                                    onClick={closeDropdownAndNavigate}
                                                >
                                                    Blog
                                                </Link>
                                                <Link
                                                    href="/about/csr"
                                                    className="block px-4 py-2 text-black hover:bg-gray-100"
                                                    onClick={closeDropdownAndNavigate}
                                                >
                                                    CSR
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="relative group/sub">
                                            <h4 className="font-semibold px-4 py-2 text-black hover:bg-gray-100 cursor-pointer flex items-center justify-between">
                                                Why Us
                                                <ChevronRight className="w-4 h-4 text-[#ff6b3d]" />
                                            </h4>
                                            <div className="absolute hidden group-hover/sub:block bg-white shadow-lg rounded-md w-64 top-0 left-full z-50">
                                                <Link
                                                    href="/about/free-trial"
                                                    className="block px-4 py-2 text-black hover:bg-gray-100"
                                                    onClick={closeDropdownAndNavigate}
                                                >
                                                    Free Trial
                                                </Link>
                                                <Link
                                                    href="/about/how-we-work"
                                                    className="block px-4 py-2 text-black hover:bg-gray-100"
                                                    onClick={closeDropdownAndNavigate}
                                                >
                                                    How We Work
                                                </Link>
                                                <Link
                                                    href="/about/top-talent"
                                                    className="block px-4 py-2 text-black hover:bg-gray-100"
                                                    onClick={closeDropdownAndNavigate}
                                                >
                                                    Work With Top 1%
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="relative group/sub">
                                            <h4 className="font-semibold px-4 py-2 text-black hover:bg-gray-100 cursor-pointer flex items-center justify-between">
                                                How We Collaborate
                                                <ChevronRight className="w-4 h-4 text-[#ff6b3d]" />
                                            </h4>
                                            <div className="absolute hidden group-hover/sub:block bg-white shadow-lg rounded-md w-64 top-0 left-full z-50">
                                                <Link
                                                    href="/about/staff-augmentation"
                                                    className="block px-4 py-2 text-black hover:bg-gray-100"
                                                    onClick={closeDropdownAndNavigate}
                                                >
                                                    Staff Augmentation
                                                </Link>
                                                <Link
                                                    href="/about/fixed-cost"
                                                    className="block px-4 py-2 text-black hover:bg-gray-100"
                                                    onClick={closeDropdownAndNavigate}
                                                >
                                                    Fixed Cost
                                                </Link>
                                                <Link
                                                    href="/about/agile-pods"
                                                    className="block px-4 py-2 text-black hover:bg-gray-100"
                                                    onClick={closeDropdownAndNavigate}
                                                >
                                                    Agile Pods
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        {/* Services Dropdown  */}
                        <div className="relative" ref={dropdownRef}>
                            <button
                                className="text-black hover:text-[#ff6b3d] font-medium flex items-center"
                                onClick={() => toggleDropdown("services")}
                            >
                                Services
                                <ChevronDown className="w-4 h-4 ml-1" />
                            </button>
                            {activeDropdown === "services" && (
                                <div className="absolute bg-white shadow-lg rounded-md mt-2 w-64 right-0 z-50">
                                    <div className="divide-y divide-gray-200 divide-dashed">
                                        <Link
                                            href="/services/ai-ml"
                                            className="block px-4 py-2 text-black hover:bg-gray-100 font-medium"
                                            onClick={closeDropdownAndNavigate}
                                        >
                                            AI/ML/GenAI
                                        </Link>
                                        <Link
                                            href="/services/data-engineering"
                                            className="block px-4 py-2 text-black hover:bg-gray-100 font-medium"
                                            onClick={closeDropdownAndNavigate}
                                        >
                                            Data Engineering and Analytics
                                        </Link>
                                        <Link
                                            href="/services/cloud-engineering"
                                            className="block px-4 py-2 text-black hover:bg-gray-100 font-medium"
                                            onClick={closeDropdownAndNavigate}
                                        >
                                            Cloud Engineering
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                        {/* Technologies */}
                        <Link
                            href="/technologies"
                            className="text-black hover:text-[#ff6b3d] font-medium"
                        >
                            Technologies
                        </Link>
                        {/* Investors Dropdown */}
                        <div className="relative" ref={dropdownRef}>
                            <button
                                className="text-black hover:text-[#ff6b3d] font-medium flex items-center"
                                onClick={() => toggleDropdown("investors")}
                            >
                                Investors
                                <ChevronDown className="w-4 h-4 ml-1" />
                            </button>
                            {activeDropdown === "investors" && (
                                <div className="absolute bg-white shadow-lg rounded-md mt-2 w-64 right-0 z-50">
                                    <div className="divide-y divide-gray-200 divide-dashed">
                                        <div>
                                            <h4 className="font-semibold px-4 py-2">
                                                Financial Information
                                            </h4>
                                            <Link
                                                href="/investors/annual-accounts"
                                                className="block px-4 py-2 text-black hover:bg-gray-100"
                                                onClick={closeDropdownAndNavigate}
                                            >
                                                Annual Accounts
                                            </Link>
                                            <Link
                                                href="/investors/financial-reports"
                                                className="block px-4 py-2 text-black hover:bg-gray-100"
                                                onClick={closeDropdownAndNavigate}
                                            >
                                                Financial Reports
                                            </Link>
                                            <Link
                                                href="/investors/shareholder-info"
                                                className="block px-4 py-2 text-black hover:bg-gray-100"
                                                onClick={closeDropdownAndNavigate}
                                            >
                                                Shareholder Information
                                            </Link>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold px-4 py-2">
                                                Shareholder info
                                            </h4>
                                            <Link
                                                href="/investors/annual-reports"
                                                className="block px-4 py-2 text-black hover:bg-gray-100"
                                                onClick={closeDropdownAndNavigate}
                                            >
                                                Annual Reports
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        {/* Resources  */}
                        <Link
                            href="/resources"
                            className="text-black hover:text-[#ff6b3d] font-medium"
                        >
                            Resources
                        </Link>
                        <div className="hidden lg:block">
                            <Link
                                href="/contact"
                                className="bg-[#ff6b3d] text-white px-4 py-2 rounded-md font-medium"
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
                        <Link href="/about" className="text-black block py-2">
                            About Us
                        </Link>
                        <Link href="/services" className="text-black block py-2">
                            Services
                        </Link>
                        <Link href="/technologies" className="text-black block py-2">
                            Technologies
                        </Link>
                        <Link href="/investors" className="text-black block py-2">
                            Investors
                        </Link>
                        <Link href="/resources" className="text-black block py-2">
                            Resources
                        </Link>
                        <Link href="/contact" className="text-black block py-2">
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}