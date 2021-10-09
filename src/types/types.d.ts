type DeliveryMethods = 'Dine In' | 'Delivery' | 'To Go';
type RequestStatusType = 'completed' | 'pending' | 'error' | null;
type NotificationType = 'success' | 'error' | 'warn' | null;
type PaymentMethod = 'card' | 'cash' | 'paypal';
type ProductRequest =
	| 'hot'
	| 'cold'
	| 'soup'
	| 'dessert'
	| 'grill'
	| 'appetizer';
interface ICartProduct {
	id: string;
	type: string;
	name: string;
	quantity: number;
	price: number;
	img_src: string;
	totalPrice: number;
	maxQuantity: number;
}
interface IProduct {
	id: string;
	type: string;
	name: string;
	art: number;
	price: number;
	quantity: number;
	img_src: string;
}

interface IOrder {
	avatar_url: string;
	id: string;
	menu: string;
	name: string;
	status: 'completed' | 'pending';
	total: number;
}
