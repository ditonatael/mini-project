"use client";
import { Button } from "../../ui/button";
import { Menu, ArrowRight } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import Link from "next/link";
import { UserContext } from "~/supports/context/useUserContext";
import { useContext } from "react";

export default function AppSidebar({
  categoryItems,
}: {
  categoryItems: string[];
}) {
  const { userData } = useContext(UserContext);
  return (
    <div className="flex lg:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu
            color="#000000"
            strokeWidth={1.75}
            size={25}
            className="hover:cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent side={"left"} className="w-80 font-worksans">
          <SheetHeader>
            <SheetTitle>
              <VisuallyHidden>Menu</VisuallyHidden>
            </SheetTitle>
            <div className="flex flex-col gap-2 pt-10 pb-5 border-b-2 border-black">
              <Button className="w-full h-8 rounded-none font-bold text-lg">
                Sell Now
              </Button>
              {!userData && (
                <>
                  <Link href={"/signup"}>
                    <Button
                      className="w-full h-8 rounded-none font-bold text-lg border-2 border-black"
                      variant="outline"
                    >
                      Sign Up
                    </Button>
                  </Link>
                  <Link href={"/signin"}>
                    <Button
                      className="w-full h-8 rounded-none font-bold text-lg border-2 border-black"
                      variant="outline"
                    >
                      Log in
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </SheetHeader>
          <SheetDescription>
            <VisuallyHidden>Description</VisuallyHidden>
          </SheetDescription>
          {categoryItems.map((item: string, index: number) => {
            return (
              <div
                key={index}
                className={`w-full h-14 border-b flex items-center justify-between ${
                  item.toLowerCase() === "sale" ? "text-red-600" : "text-black"
                }`}
              >
                <span className="text-lg font-semibold">{item}</span>
                <ArrowRight color="#000000" strokeWidth={1} />
              </div>
            );
          })}
        </SheetContent>
      </Sheet>
    </div>
  );
}
