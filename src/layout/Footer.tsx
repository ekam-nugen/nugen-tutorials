import { FooterSections, SocialLinks } from "../json";

export default function Footer() {
    return (
        <footer className="flex flex-col justify-center bg-white text-zinc-800 py-10 px-6 md:px-10">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-14 px-3">
                <div className="flex gap-1/2 flex-col">
                    <div className="flex items-center">
                        <span className="font-bold text-2xl text-orange-500">Nu<span className="text-black">Gen</span></span>
                    </div>
                    <div className="text-md min-w-auto text-balance ">
                        Empowering the next generation of tech professionals with expert-led training and hands-on learning experiences.
                    </div>
                </div>

                {FooterSections?.map((section, index: number) => (
                    <div key={section.title + index} className="">
                        <h3 className="font-semibold mb-2">{section?.title}</h3>
                        <div className="space-y-1 text-sm text-gray-600">
                            {section?.links.map((link, idx: number) => (
                                <p
                                    key={link[0] + idx}
                                    className="hover:text-zinc-900 cursor-pointer transition"
                                >
                                    {link}
                                </p>
                            ))}
                        </div>
                    </div>
                ))}

                <div>
                    <h3 className="font-semibold mb-2">Stay Connected</h3>
                    <div className="flex space-x-4 text-xl text-zinc-700">
                        {SocialLinks?.map((social, index: number) => (
                            <a
                                key={social.label + index}
                                href={social?.href}
                                aria-label={social?.label}
                                className="hover:text-pink-600 transition"
                            >
                                {social?.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className="text-center text-sm text-gray-500 px-10 mt-10 ">
                © Copyright 2025 All Rights Reserved.
            </div>
        </footer>
    );
}
