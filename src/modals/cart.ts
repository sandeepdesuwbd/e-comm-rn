import { Product } from "./product";

export interface Cart{
    id: string,
    product:Product,
    count: number,
}