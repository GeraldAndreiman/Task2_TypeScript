import type { Supplier } from "./Supplier";
import type { Category } from "./Category";

export interface Product {
    id: number;
    name: string;
    price: number;
    Quantity: number;
    category: Category; 
    supplier: Supplier;
    Rating: number;
    specifications?: Record<string, string | number>; // Optional field
}