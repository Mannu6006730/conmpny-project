// API Types based on Woohoo API responses

export interface Currency {
  code: string;
  symbol: string;
  numericCode: string;
}

export interface ProductImages {
  thumbnail: string;
  mobile: string;
  base: string;
  small: string;
}

export interface PriceStructure {
  type: string;
  min: string;
  max: string;
  denominations: string[];
}

export interface Product {
  id:number,
  sku: string;
  name: string;
  // currency: Currency;
  // url: string;
  // minPrice: string;
  // maxPrice: string;
  productType:string;
  stores:[number];
  websites:[number]
  // price: {
  //   cpg: {
  //     "": PriceStructure;
  //   };
  // };
  image: ProductImages;
  // brandLogo: string;
  // createdAt: string;
  // updatedAt: string;
  description?: string;
  shortDescription?: string;
  themes?: Theme[];
  expiry?: string;
}

export interface ProductListResponse {
  id: number;
  name: string;
  url: string;
  productsCount: number;
  products: Product[];
}

export interface Theme {
  sku: string;
  price: string;
  image: string;
  pdfImage: string;
  emailImage: string;
  title: string;
  optionTypeId: number;
}

export interface Address {
  firstname: string;
  lastname: string;
  email: string;
  telephone: string;
  line1: string;
  line2: string;
  city: string;
  region: string;
  country: string;
  postcode: string;
  company: string;
  billToThis?: boolean;
}

export interface OrderProduct {
  sku: string;
  price: number;
  qty: number;
  currency: string;
  theme?: string;
}

export interface Payment {
  code: string;
  amount: number;
}

export interface OrderRequest {
  address: Address;
  billing: Address;
  payments: Payment[];
  refno: string;
  syncOnly: boolean;
  deliveryMode: string;
  products: OrderProduct[];
}

export interface Card {
  sku: string;
  productName: string;
  labels: {
    cardNumber: string;
    cardPin: string;
    activationCode: string;
    samsungWalletLabel: string;
    sequenceNumber: string;
    validity: string;
  };
  cardNumber: string;
  cardPin: string;
  senderName: string;
  activationCode: string | null;
  barcode: string;
  activationUrl: string | null;
  redemptionUrl: {
    label: string;
    url: string;
  };
  addToSamsungWallet: string;
  formats: Array<{
    key: string;
    value: string;
  }>;
  amount: string;
  redemptionStartDate: string;
  validity: string;
  issuanceDate: string;
  sequenceNumber: string;
  cardId: number;
  recipientDetails: {
    salutation: string | null;
    name: string;
    firstname: string;
    lastname: string;
    email: string;
    mobileNumber: string;
    status: string;
    failureReason: string;
    delivery: {
      mode: string;
      status: {
        sms: {
          status: string;
          reason: string;
        };
        email: {
          status: string;
          reason: string;
        };
      };
    };
  };
  theme: string;
}

export interface OrderResponse {
  status: string;
  orderId: string;
  refno: string;
  cancel: {
    allowed: boolean;
    allowedWithIn: number;
  };
  currency: Currency;
  payments: Payment[];
  cards: Card[];
  products: Record<string, {
    sku: string;
    name: string;
    balanceEnquiryInstruction: string | null;
    specialInstruction: string;
    images: ProductImages;
    cardBehaviour: string;
  }>;
  additionalTxnFields: any[];
}

export interface OrderStatus {
  status: string;
  statusLabel: string;
  statusImage: string | null;
  statusLevel: string | null;
  orderId: string;
  refno: string;
  cancel: {
    allowed: boolean;
    allowedWithIn: number;
  };
}

export interface AuthResponse {
  token: string;
}

export interface Category {
  id: string;
  name: string;
  count?: number;
}