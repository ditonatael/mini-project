import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { useState, useEffect } from "react";

export default function FooterAcordion({
  footerItem,
}: {
  footerItem: { title: string; children: string[] }[];
}) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    footerItem.push({
      title: "Site Information",
      children: ["Sitemaps", "Term and Conditions", "Privacy", "Cookies"],
    });

    setIsClient(true);
  }, []);
  return (
    <>
      {isClient && (
        <div className="w-full block lg:hidden">
          <Accordion type="single" collapsible className="w-full">
            {footerItem.map((item, index) => {
              return (
                <AccordionItem
                  value={item.title}
                  key={index}
                  className="w-full"
                >
                  <AccordionTrigger>{item.title}</AccordionTrigger>
                  {item.children.map((child: string, index: number) => {
                    return (
                      <AccordionContent key={index}>{child}</AccordionContent>
                    );
                  })}
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      )}
    </>
  );
}
