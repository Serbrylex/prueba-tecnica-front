type TProd = {
  pk: number,
  item_name: string, 
  short_description: string, 
  stock: number, 
  price_without_tax: number,
  shipping_fee: number,
  image: string
}

type TProdCart = {
  pk: number,
  item_name: string, 
  short_description: string, 
  stock: number, 
  price_without_tax: number,
  shipping_fee: number,
  image: string,
  amount: number
}

declare module "*.json" {
  const dataValue: any;
  export default dataValue;
}

interface Blob {
  readonly size: number;
  readonly type: string;
  slice(start?: number, end?: number, contentType?: string): Blob;
}

declare var Blob: {
  prototype: Blob;
  new(blobParts?: BlobPart[], options?: BlobPropertyBag): Blob;
};

type TAction = {
	type: string,
	payload: any
}