import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaYoutube, FaSteam } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Anou26" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/anoushkamergoju/" },
  { icon: <SiLeetcode />, path:"https://leetcode.com/u/AnouMer/"},
  { icon: <FaMedium />, path: "https://medium.com/@anoushkamergoju" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link key={index} href={item.path} passHref legacyBehavior>
          <a target="_blank" rel="noopener noreferrer" className={iconStyles}>
            {item.icon}
          </a>
        </Link>
      ))}
    </div>
  );
};
export default Social;
