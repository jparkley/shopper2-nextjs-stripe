export interface IProduct {
  id: string;
  category: string;
  name: string;
  subtitle: string;
  sku: string;
  price: number;  
  currency: string;
  description: string;
  description_long:string;
  image: string;
}

export interface ICartProduct {
  id: string;
  name: string;
  price: number;
  quantity: number;
}