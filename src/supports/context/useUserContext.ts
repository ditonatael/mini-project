import { createContext } from "react";
import { User } from "../../../types/userType";

interface UserContextType {
    userData: User | null;
    setUserData: React.Dispatch<React.SetStateAction<User | null>>;
}
export const userContext = createContext<UserContextType | null>(null)