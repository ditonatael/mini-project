"use client";

import Image from "next/image";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { Heart, ShoppingBag, Search } from "lucide-react";
import AppSidebar from "../AppSidebar";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useEffect } from "react";
import { UserContext } from "~/supports/context/useUserContext";
import UserAvatar from "~/components/ui/userAvatar";
import {
  db,
  getDocs,
  collection,
  query,
  where,
} from "../../../../utils/firebase";
import { User } from "../../../../types/userType";

export default function Navbar() {
  const categoryItems = [
    "Menswear",
    "Womenswear",
    "Kids",
    "Sports",
    "Brands",
    "Sale",
  ];

  const router = useRouter();
  const pathname = usePathname();
  const { userData, setUserData } = useContext(UserContext);

  const handleKeepLogin = async () => {
    try {
      const userId = localStorage.getItem("user");

      if (userId) {
        const findUserQuery = query(
          collection(db, "users"),
          where("id", "==", userId)
        );
        const findUser = await getDocs(findUserQuery);
        const existingUser = findUser.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        const user = existingUser[0] as User;

        setUserData({
          id: user.id,
          username: user.username,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleKeepLogin();
  }, []);
  return (
    <div
      className={
        pathname.includes("signup") ? "hidden" : "fixed z-10 bg-white w-full"
      }
    >
      <div className="h-16 border-b">
        <div className="mx-2 lg:mx-8 h-full flex items-center justify-between">
          <span className="flex items-center gap-4">
            <AppSidebar categoryItems={categoryItems} />
            <Image
              src={"/assets/depop-logo.png"}
              alt="logo"
              width={90}
              height={24}
              quality={100}
              style={{ width: 90, height: 24, cursor: "pointer" }}
              onClick={() => router.push("/")}
              priority
            />
          </span>
          <div className="w-[600px] h-10 rounded-full border-2 border-black bg-[#f3f3f3] hidden lg:flex items-center justify-start px-3 gap-1">
            <Search color="#545454" strokeWidth={1.75} size={20} />
            <Input
              className="h-1/2 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 px-0 rounded-none placeholder:text-zinc-950 placeholder:font-medium"
              placeholder="Search for items, brands, or styles..."
            />
          </div>
          <span className="lg:w-[406px] h-10 flex items-center xl:justify-between gap-4 xl:gap-0">
            <span className="flex items-center gap-2 lg:gap-6">
              <Heart
                color="#000000"
                strokeWidth={1.75}
                size={25}
                className="hidden lg:block hover:cursor-pointer"
              />
              {/* Small Screen Search Button */}
              <Search
                color="#000000"
                strokeWidth={1.75}
                size={25}
                className="block lg:hidden hover:cursor-pointer"
              />
              <span className="relative">
                <ShoppingBag
                  color="#000000"
                  strokeWidth={1.75}
                  size={25}
                  className="hover:cursor-pointer"
                />
                <span className="absolute size-5 bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold -top-1.5 -right-1.5">
                  1
                </span>
              </span>
            </span>
            {/* Small Screen Button */}
            <div className="flex lg:hidden items-center justify-center">
              {!userData && (
                <Link href={"/signup"}>
                  <Button className="w-[116px] h-8 rounded-none font-bold text-lg">
                    Sign Up
                  </Button>
                </Link>
              )}
              {userData && (
                <UserAvatar name={userData.username} className="ml-2" />
              )}
            </div>
            {/* Large Screen Button */}
            <span
              className={`hidden lg:flex items-center ${
                userData ? "justify-end gap-6" : "gap-2"
              }`}
            >
              <Button className="w-[116px] h-8 rounded-none font-bold text-lg">
                Sell Now
              </Button>
              {!userData && (
                <>
                  <Link href={"/signup"} className="flex">
                    <Button
                      className="w-[108px] h-8 rounded-none font-bold text-lg border-2 border-black"
                      variant="outline"
                    >
                      Sign Up
                    </Button>
                  </Link>
                  <Link href={"/signin"} className="flex">
                    <Button
                      className="w-[74px] h-7 no-underline font-bold text-lg"
                      variant="link"
                    >
                      Log in
                    </Button>
                  </Link>
                </>
              )}
              {userData && (
                <UserAvatar name={userData.username} className="ml-2" />
              )}
            </span>
          </span>
        </div>
      </div>
      <div className="w-full border-b">
        <div className="h-[53px] mx-8 hidden lg:flex items-center">
          {categoryItems.map((item, index) => {
            return (
              <span
                key={index}
                className={`p-4 hover:cursor-pointer font-bold ${
                  item.toLowerCase() === "sale"
                    ? "text-red-600 hover:bg-red-600 hover:text-white"
                    : "hover:bg-black hover:text-white"
                }`}
              >
                {item}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
