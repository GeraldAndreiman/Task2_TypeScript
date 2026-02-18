export function getStockStatus(quantity:number) { 
    if (quantity >= 3) {
        return "In stock";
    } else if (quantity > 0) {
        return "Low stock";
    } else {
        return "Out of stock";
    }
}
    