export type DeliveryMethods = 'Dine In' | 'Delivery' | 'To Go';
export type RequestStatusType = 'completed' | 'pending' | 'error' | null;
export type NotificationType = 'success' | 'error' | 'warn' | null;
export type PaymentMethod = 'card' | 'cash' | 'paypal';
export type ProductRequest =
	| 'hot'
	| 'cold'
	| 'soup'
	| 'dessert'
	| 'grill'
	| 'appetizer';
export interface ICartProduct {
	id: string;
	type: string;
	name: string;
	quantity: number;
	price: number;
	img_src: string;
	totalPrice: number;
	maxQuantity: number;
}
export interface IProduct {
	id: string;
	type: string;
	name: string;
	art: number;
	price: number;
	quantity: number;
	img_src: string;
}

export interface IOrder {
	avatar_url: string;
	id: string;
	menu: string;
	name: string;
	status: 'completed' | 'pending';
	total: number;
}
