
import {
    FaFacebookF,
    FaLinkedinIn,
    FaInstagram,
    FaTwitter,
} from "react-icons/fa";

export const FooterSections = [
    {
        title: "Company",
        links: ["About Us", "Careers", "Blog", "Press"],
    },
    {
        title: "Cources",
        links: ["Web Development", "Data Science", "Cloud Computing", "Cyber Security", "UI/UX Design"],
    },
    {
        title: "Resources",
        links: ["Community", "Learning Path", "Documentation", "Help Center"],
    },
    {
        title: "Legal",
        links: ["Terms of Service", "Privacy Policy", "Cookie Settings"],
    }
];

export const SocialLinks = [
    {
        icon: <FaTwitter />,
        label: "Twitter",
        href: "#",
    },
    {
        icon: <FaInstagram />,
        label: "Instagram",
        href: "#",
    },
    {
        icon: <FaLinkedinIn />,
        label: "LinkedIn",
        href: "#",
    },
    {
        icon: <FaFacebookF />,
        label: "Facebook",
        href: "#",
    },
];
