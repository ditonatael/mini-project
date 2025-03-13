import { createContext } from "react";
import type { UserContextType } from "../../../types/userType";

export const UserContext = createContext<UserContextType>({} as UserContextType)