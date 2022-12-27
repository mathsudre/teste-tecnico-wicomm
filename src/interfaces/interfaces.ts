export interface IDataMainCarousel {
	itemName?: string;
	srcImgOne?: string;
	srcImgTwo?: string;
}

interface IDataShowcase {
	nameItem: string;
	srcImg: string;
	rating: number;
	price: number;
	promoPrice: number;
	promoDiscount: string;
	isPromo: boolean;
}

export interface IDataDoubleSlide {
	nameItem: string;
	srcImg: string;
	price: number;
	parcelPrice: number;
	ratingStar: number;
}

export interface IDataItem {
	item: IDataMainCarousel;
}

export interface IDataShowcaseItem {
	item: IDataShowcase;
}

export interface IPropSlide {
	title?: string;
	data: IDataShowcase[];
	bgColor?: boolean;
}
