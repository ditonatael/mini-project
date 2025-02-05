export interface Products {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string[];
    condition: string
    brand: string;
    sex: ("mens" | "womens")[];
}