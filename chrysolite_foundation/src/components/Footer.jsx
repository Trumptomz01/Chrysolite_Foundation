import Image from "next/image";
import Link from "next/link";
import { FiInstagram, FiFacebook, FiLinkedin} from "react-icons/fi";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import {FaMedium  } from "react-icons/fa";
import Reveal from "@/components/Reveal";
import { RevealGroup, RevealItem } from "@/components/RevealGroup"

const Footer = () => {
  const footerLinks = [    
    {
      heading: "Explore",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Our Projects", href: "/projects" },
        { name: "Impact", href: "/impact" },
        { name: "Blog", href: "/blog" },
      ],
    },
    {
      heading: "Get Involved",
      links: [
        { name: "Donate", href: "/donate" },
        { name: "Volunteer", href: "/volunteer" },
        { name: "Merchandise", href: "/merchandise" },
        { name: "Contact Us", href: "/contact" },
      ],
    },
  ];

  const socials = [
    {
      name: "Instagram",
      icon: <FiInstagram />,
      href: "https://www.instagram.com/_chrysoliteng",
    },
    {
      name: "X",
      icon: <FaXTwitter />,
      href: "https://x.com/_chrysoliteng",
    },
    {
      name: "LinkedIn",
      icon: <FiLinkedin />,
      href: "https://www.linkedin.com/company/chrysolite-foundation/posts/?feedView=all",
    },
    {
      name: "Facebook",
      icon: <FiFacebook />,
      href: "https://web.facebook.com/profile.php?id=100090781453931&_rdc=1&_rdr",
    },
    {
      name: "Medium",
      icon: <FaMedium/>,
      href: "https://medium.com/@thechrysolitefoundation",
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#0B2B4C] py-19 px-6 pt-12 text-[#DDE6F2]">
      {/* Decorative glow */}
      <div className="absolute -left-[100px] -top-[160px] h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,#D4A72C,transparent_70%)] opacity-10" />
       

        <div className="relative mx-auto grid max-w-[1200px] gap-8 border-b border-transparent pb-8 sm:grid-cols-2 lg:grid-cols-4">
        
        <div>
          <Reveal className="flex items-center gap-1.5 text-[17px] font-bold text-[#C9D6E8]">
            <div className={"w-[30px] h-[30px] relative"}>
              <Image src={'/images/logo-blue.png'}  sizes="100vw" fill style={{objectFit: "contain"}} alt={"logo"}/>
            </div>
            <span>Chrysolite Foundation</span>
          </Reveal>

          <Reveal>
            <p className="mt-3.5 max-w-[280px] text-[13px] leading-relaxed text-[#C9D6E8]">
              Advancing the welfare of future generations through empowerment and
              education.
            </p>
          </Reveal>

          {/* Social links */}
          <RevealGroup className="mt-4 flex gap-2.5">
            {socials.map((social) => (
              <RevealItem key={social.name} >

                <Link
                  href={social.href}
                  aria-label={social.name}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                >
                  {social.icon}
                </Link>

              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        {/* Explore & Get Involved */}
        {footerLinks.map(({ heading, links }) => (
          <RevealGroup key={heading}>
            <RevealItem>
              <h4 className="mb-3.5 text-[14px] font-semibold text-white">
                {heading}
              </h4>
            </RevealItem>

            <div className= "flex flex-col gap-2.5"> 
              {links.map((link) => (
                <RevealItem key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-[#C9D6E8] no-underline transition hover:text-white"
                  >
                    {link.name}
                  </Link>
                </RevealItem>
              ))}
            </div>
          </RevealGroup>
        ))}

        <RevealGroup>
          <RevealItem>
            <h4 className="mb-3.5 text-[14px] font-semibold text-white">
              Contact
            </h4>
          </RevealItem>

          <div className="flex flex-col gap-2.5 text-[14px] text-[#C9D6E8]">
            <RevealItem>
              <Link
                href="thechrysolitefoundation@gmail.com"
                className="flex items-center gap-2 text-[#C9D6E8] no-underline transition hover:text-white"
              >
                <Mail className="text-blue-400 size-4" />
                thechrysolitefoundation@gmail.com
              </Link>
            </RevealItem>

            <RevealItem>
              <Link
                href="https://api.whatsapp.com/send/?phone=2349127480531&text&type=phone_number&app_absent=0"
                className="flex items-center gap-2 text-[#C9D6E8] no-underline transition hover:text-white"
              >
                <Phone className="text-blue-400 size-4" />
                WhatsApp Us
              </Link>
            </RevealItem>

            <RevealItem>   
              <span className="flex items-center gap-2">
                <MapPin className="text-blue-400 size-3.5" />
                Ibadan, Oyo State, Nigeria.
              </span>
            </RevealItem>
          </div>
        </RevealGroup>
      </div>

      {/* Bottom bar */}
      <div className="mb-4 relative mx-auto flex max-w-[1200px] flex-col gap-3.5 border-t border-white/10 py-5 pb-8 text-[12px] text-[#9FB1CC] sm:flex-row sm:items-center sm:justify-between">
        <span>
            &copy; {new Date().getFullYear()} Chrysolite Foundation. All rights reserved.
        </span>

        <Link href="/donate" >
        <button className="w-ft rounded-full bg-blue-500 px-10 py-2.5 text-[13px] font-semibold text-[#fff] transition hover:bg-blue-600">
           Donate
          </button>
        </Link>
      </div>
    </footer>
  );
};

export default Footer