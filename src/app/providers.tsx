"use client";

import { useState } from "react";
import { userContext } from "~/supports/context/useUserContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [userData, setUserData] = useState<any | null>(null);
  return (
    <>
      <userContext.Provider value={{ userData, setUserData }}>
        {children}
      </userContext.Provider>
    </>
  );
}
