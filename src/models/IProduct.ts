export interface Product {
  url: string;
  name: string;
  type: string;
  typeValue: number;
  uid: number;
  category: number[];
  productedBy: string;
  brand: string;
  desc: string;
  price: number;
  count?: number;
}
