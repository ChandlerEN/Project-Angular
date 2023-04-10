export interface SizePrice {
    size: string;
    price: number;
}

export class Product {
    constructor(
        public id: number,
        public title: string,
        public description: string,
        public imageUrl: string,
        public date: Date,
        public price: Array<SizePrice>,
        public likes: number,
        public isLiked: boolean
    ){}
}