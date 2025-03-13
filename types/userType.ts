export interface User {
    id: string
    firstname?: string
    lastname?: string
    email?: string
    password?: string
    username: string
    country?: string
}


export interface UserContextType {
    userData: User | null
    setUserData: React.Dispatch<React.SetStateAction<User | null>>
}