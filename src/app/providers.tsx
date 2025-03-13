"use client";

import { useState } from "react";
import { userContext } from "~/supports/context/useUserContext";
import { User } from "../../types/userType";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [userData, setUserData] = useState<User | null>(null);
  return (
    <>
      <userContext.Provider value={{ userData, setUserData }}>
        {children}
      </userContext.Provider>
    </>
  );
}
