export interface Brands {
  id: number;
  name: string;
  description: string;
  image: string;
}
export interface Banners {
  id: number;
  name: string;
  description: string;
  image: string;
}
export interface Users {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  role: string;
  password: string;
  confirmPassword: string;
}
export interface Posts {
  id: number;
  title: string;
  content: string;
  thumbnail: string;
  author: string;
  hot: boolean;
  created_at: Date;
  updated_at: string;
}
export interface Products {
  id: number;
  code: string;
  name: string;
  description: string;
  detail: string;
  price: number;
  stock_quanlity: number;
  isDiscount: boolean;
  hot: boolean;
  brand_id: number;
  product_line_id: number;
  image: ProductImages[];
  createdAt: string;
  updatedAt: string;
}
export interface ProductImages {
  image_url: string;
  isThumbnail: boolean;
}