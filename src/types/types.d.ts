type DeliveryMethods = 'Dine In' | 'Delivery' | 'To Go';
type RequestStatusType = 'completed' | 'pending' | 'error' | null;
type NotificationType = 'success' | 'error' | 'warn' | null;

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
