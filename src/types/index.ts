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
  cart_quantity: number;
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
  images: ProductImages[];
  createdAt: string;
  updatedAt: string;
}
export interface ProductImages {
  image_url: string;
  isThumbnail: boolean;
}

export interface Orders {
  id: number;
  user_id: number;
  voucher_id: number;
  receipt_name: string;
  total_price: number;
  recipient_name: string;
  recipient_phone: string;
  recipient_address: string;
  note: string;
  status: string;
  order_items: OrderItems[];
  createdAt: string;
  updatedAt: string;
}
export interface OrderItems {
  id: number;
  product_id: number;
  quantity: number;
  price: number;
  createdAt: string;
  updatedAt: string;
}
export interface ProductLines {
  id: number; 
  name: string;
  description: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}
