"use client";

import { useState } from "react";
import { UserContext } from "~/supports/context/useUserContext";
import type { User } from "../../types/userType";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [userData, setUserData] = useState<User | null>(null);
  return (
    <>
      <UserContext.Provider value={{ userData, setUserData }}>
        {children}
      </UserContext.Provider>
    </>
  );
}
