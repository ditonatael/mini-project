"use client";
import { usePathname } from "next/navigation";
import { Instagram, Twitter, Youtube } from "lucide-react";
import FooterAcordion from "../ui/footerAcordion";

export default function Footer() {
  const footerContent = [
    {
      title: "Depop",
      children: ["About us", "Careers", "Blog", "News", "Impact"],
    },
    { title: "Sell", children: ["Sell on Depop", "Depop Amplfied"] },
    { title: "Help", children: ["Help Centre", "Safety Centre"] },
  ];

  const pathname = usePathname();

  return (
    <div className={pathname.includes("signup") ? "hidden" : "block"}>
      <div className="bg-stone-100 h-auto lg:h-[350px] w-screen flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-0 px-2 lg:px-0 lg:pl-24 font-worksans">
        {footerContent.map((item, index) => {
          return (
            <div
              key={index}
              className="hidden lg:grid grid-rows-6 gap-7 flex-1 pt-6"
            >
              <span className="text-lg font-bold">{item.title}</span>
              {item.children.map((child, index) => {
                return (
                  <span
                    key={index}
                    className="font-light hover:underline hover:underline-offset-4 hover:cursor-pointer"
                  >
                    {child}
                  </span>
                );
              })}
            </div>
          );
        })}
        <FooterAcordion footerItem={footerContent} />
        <div className="flex items-end justify-center lg:justify-end lg:pr-24 min-h-full h-full flex-auto gap-5 pb-4">
          <span className="hover:cursor-pointer">
            <Instagram size={25} />
          </span>
          <span className="hover:cursor-pointer">
            <Twitter size={25} />
          </span>
          <span className="hover:cursor-pointer">
            <Youtube size={25} />
          </span>
        </div>
      </div>
      <div className="bg-stone-300 px-24 py-4 hidden lg:flex justify-between items-center gap-20 border border-b h-[85px] w-screen font-worksans">
        <div className="flex gap-20">
          <span>United States</span>
          <span>English</span>
        </div>
        <div className="flex gap-11">
          <span className="hover:underline hover:underline-offset-4 hover:cursor-pointer">
            Sitemaps
          </span>
          <span className="hover:underline hover:underline-offset-4 hover:cursor-pointer">
            Terms and Condition
          </span>
          <span className="hover:underline hover:underline-offset-4 hover:cursor-pointer">
            Privacy
          </span>
          <span className="hover:underline hover:underline-offset-4 hover:cursor-pointer">
            Cookies
          </span>
        </div>
      </div>
    </div>
  );
}
