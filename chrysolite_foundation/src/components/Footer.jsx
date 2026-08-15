import Image from "next/image";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const footerLinks = [
      {
      heading: "Explore",
      links: ["About Us", "Our Projects", "Impact", "Blog"],
      },
      {
      heading: "Get Involved",
      links: ["Donate", "Volunteer", "Merchandise", "Contact Us"],
      },
  ];

  const socials = [
    {
      name: "Instagram",
      icon: <FaInstagram />,
      href: "#",
    },
    {
      name: "X",
      icon: <FaXTwitter />,
      href: "#",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
      href: "#",
    },
    {
      name: "Facebook",
      icon: <FaFacebookF />,
      href: "#",
    },
  ];

  return (
    <footer className="relative mt-10 overflow-hidden bg-[#0B2B4C] px-6 pt-12 text-[#DDE6F2]">
      {/* Decorative glow */}
      <div className="absolute -left-[100px] -top-[160px] h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,#D4A72C,transparent_70%)] opacity-10" />
       

      {/* Main footer content */}
        <div className="relative mx-auto grid max-w-[1200px] gap-8 border-b border-transparent pb-8 sm:grid-cols-2 lg:grid-cols-4">
        
        {/* Brand */}
        <div>
          <div className="flex items-center gap-1.5 text-[17px] font-bold text-[#C9D6E8]">
            <div className={"w-[30px] h-[30px] relative"}>
              <Image src={'/images/logo-blue.png'} fill style={{objectFit: "contain"}} alt={"logo"}/>
            </div>
            <span>Chrysolite Foundation</span>
          </div>

          <p className="mt-3.5 max-w-[280px] text-[13px] leading-relaxed text-[#C9D6E8]">
            Advancing the welfare of future generations through empowerment and
            education.
          </p>

          {/* Social links */}
          <div className="mt-4 flex gap-2.5">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                aria-label={social.name}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Explore + Get Involved */}
        {footerLinks.map(({ heading, links }) => (
          <div key={heading}>
            <h4 className="mb-3.5 text-[14px] font-semibold text-white">
              {heading}
            </h4>

            <div className="flex flex-col gap-2.5">
              {links.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-[14px] text-[#C9D6E8] no-underline transition hover:text-white"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        ))}

        {/* Contact */}
        <div>
          <h4 className="mb-3.5 text-[14px] font-semibold text-white">
            Contact
          </h4>

          <div className="flex flex-col gap-2.5 text-[14px] text-[#C9D6E8]">
            <a
              href="mailto:hello@chrysolitefoundation.org"
              className="text-[#C9D6E8] no-underline transition hover:text-white"
            >
              hello@chrysolitefoundation.org
            </a>

            <a
              href="#"
              className="text-[#C9D6E8] no-underline transition hover:text-white"
            >
              WhatsApp Us
            </a>

            <span>Ibadan, Nigeria</span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative mx-auto flex max-w-[1200px] flex-col gap-3.5 border-t border-white/10 py-5 text-[12px] text-[#9FB1CC] sm:flex-row sm:items-center sm:justify-between">
        <span>
          © 2026 Chrysolite Foundation. All rights reserved.
        </span>

        <button className="w-fit rounded-lg bg-[#D4A72C] px-5 py-2.5 text-[13px] font-semibold text-[#0B2B4C] transition hover:bg-[#E2B83F]">
          Donate
        </button>
      </div>
    </footer>
  );
};

export default Footer