export interface Product {
  id?: number;
  name: string;
  price: number;
  description?: string;
  imageUrl?: string;   // ✔ Required for images on UI
}
