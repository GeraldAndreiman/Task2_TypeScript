import { Product } from "../models/products";
import { Supplier } from "../models/Supplier";
import { Rating } from "../models/Rating";
import { Category } from "../models/Category";

export const products: product[] = {
    id: 1,
    name: "Smartphone",
    price: 699.99,
    quantity: 50,
    category: Category.Electronics
    supplier: {
        id: 1,
        name: "Tech World" }
    specifications: {
        brand: "TechBrand"
        model: "X100"
        color: "Black"
        Weight: "150g"

    }
    }
}

export const reviews: Review[] = [
    {

    }
]