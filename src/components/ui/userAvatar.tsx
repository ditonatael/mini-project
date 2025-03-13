"use client";

import { ChevronDown, LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { useContext } from "react";
import { UserContext } from "~/supports/context/useUserContext";

export default function UserAvatar({
  name,
  className,
}: {
  name: string;
  className: string;
}) {
  const { setUserData } = useContext(UserContext);

  const handleLogout = () => {
    setUserData(null);
    localStorage.clear();
  };
  return (
    <div
      className={`h-8 bg-red-600 flex items-center justify-start gap-2 rounded-full min-w-24 w-fit px-3 ${className}`}
    >
      <div className="size-6 rounded-full bg-white flex items-center justify-center text-sm font-semibold">
        {name.charAt(0)}
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="text-white line-clamp-1 text-sm flex items-center gap-4">
            {name} <ChevronDown size={15} />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="flex items-center text-red-600"
            onClick={() => handleLogout()}
          >
            <LogOut /> Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
