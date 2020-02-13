export interface IGoodsData {
  goodId: string;
  goodName: string;
  isSale: boolean;
  id?: string;
  parametrs: {
    color: string;
    internalMem: string;
    ram: string;
    sizeScreen: string;
    weight: string;
  };
  pictureUrl: string;
  price: string;
}

export interface IOrderElement {
  count: number;
  goodsData: IGoodsData;
}

export interface IOrdersReducers {
  orders: IOrderElement[];
}

export interface IProfile {
  email: string;
  displayName: string;
  uid: string;
  phoneNumber: string;
}

export interface IProfileReducers {
  profile: IProfile;
}

export interface IGoodsReducers {
  goods: IGoodsData[];
}

export interface ISuccessOrders {
  orders: IOrderElement[];
  status: string;
  userName: string;
  summaryOrder: number;
  date: any;
  id: string;
}

export interface IAdminOrdersReducers {
  adminOrders: ISuccessOrders[];
}
