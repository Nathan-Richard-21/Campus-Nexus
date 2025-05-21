export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: string;
  description?: string;
  image?: string;
  icon?: string;
  tags?: string[];
  prepTime?: string;
  campus?: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface OrderModalProps {
  cart: CartItem[];
  total: number;
  pickupTime: string;
  onClose: () => void;
  onConfirm: () => void;
}

export interface PaymentModalProps {
  total: number;
  onClose: () => void;
  onPaymentComplete: (paymentMethod: string) => void;
}
