export class Product {
    ID: number;
    productName: string;
    quantity: number;
    available: boolean;
    imageUrl: string;
  
    constructor(
      ID: number,
      productName: string,
      quantity: number,
      available: boolean,
      imageUrl: string
    ) {
      this.ID = ID;
      this.productName = productName;
      this.quantity = quantity;
      this.available = available;
      this.imageUrl = imageUrl;
    }
  }
  