"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import NugenLogo from "../../public/logo.png"
import { HeaderContent, THeaderContent } from "../json/header";
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
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center">
                            <Image src={NugenLogo} alt="Logo" width={350} height={150} className="h-16 w-auto" />
                        </Link>
                    </div>

                    <nav className="hidden lg:flex lg:items-center space-x-6">
                        {HeaderContent?.map((item: THeaderContent) => (
                            <div key={item.label} className="relative" ref={dropdownRef}>
                                {item.children ? (
                                    <>
                                        <button
                                            onClick={() => toggleDropdown(item.label)}
                                            className="text-black hover:text-[#ff6b3d] font-medium flex items-center cursor-pointer"
                                        >
                                            {item.label}
                                            <ChevronDown
                                                className={`w-4 h-4 ml-1 transition-transform duration-200 ${activeDropdown === item.label ? "rotate-180" : ""
                                                    }`}
                                            />
                                        </button>
                                        {activeDropdown === item?.label && (
                                            <div ref={dropdownRef} onClick={closeDropdownAndNavigate} className="absolute bg-white shadow-lg rounded-md mt-4 w-64 left-0 z-50">
                                                <div className="divide-y divide-gray-200 divide-dashed">
                                                    {item?.children?.map((subItem) => (
                                                        <Link
                                                            key={subItem.label}
                                                            href={subItem.href}
                                                            className="px-4 py-2 text-black hover:bg-gray-100 block"
                                                        >
                                                            {subItem.label}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <Link href={item.href!} className="text-black hover:text-[#ff6b3d] font-medium">
                                        {item.label}
                                    </Link>
                                )}
                            </div>
                        ))}
                        <Link
                            href="/contact-us"
                            className="px-4 py-2 bg-gradient-to-r border border-gray-300 from-orange-400 to-purple-400 text-white rounded-lg duration-200"
                        >
                            Contact Us
                        </Link>
                    </nav>

                    <div className="lg:hidden flex items-center">
                        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-black">
                            {isMobileMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden bg-white shadow-md z-50">
                    <div className="space-y-4 py-4 px-4">
                        {HeaderContent?.map((item: THeaderContent) => (
                            <div key={item.label}>
                                {item.children ? (
                                    <div ref={dropdownRef}>
                                        <button
                                            onClick={() => toggleDropdown(item.label)}
                                            className="text-black font-medium flex items-center justify-between w-full"
                                        >
                                            <span>{item.label}</span>
                                            <ChevronDown
                                                className={`w-4 h-4 ml-2 transform transition-transform duration-300 ${activeDropdown === item.label ? "rotate-180" : ""
                                                    }`}
                                            />
                                        </button>
                                        <div
                                            ref={dropdownRef}
                                            className={`overflow-hidden transition-all duration-300 ease-in-out ${activeDropdown === item.label ? "max-h-96" : "max-h-0"
                                                }`}
                                            onClick={closeDropdownAndNavigate}
                                        >
                                            <div className="flex flex-col mt-2 space-y-1 text-sm">
                                                {item?.children?.map((subItem) => (
                                                    <Link
                                                        key={subItem.label}
                                                        href={subItem?.href}

                                                        className="px-4 py-2 text-black hover:bg-gray-100"
                                                    >
                                                        {subItem.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <Link href={item.href!} className="text-black block py-2">
                                        {item.label}
                                    </Link>
                                )}
                            </div>
                        ))}
                        <Link href="/contact-us" className="text-black block py-2">
                            Contact Us
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}