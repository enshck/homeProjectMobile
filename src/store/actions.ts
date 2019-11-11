import types from "./types";

export const setSortGoods = (sortType: string) => ({
  type: types.SET_SORT_GOODS,
  sortType
});

export const setGoodsList = (goodsList: any) => ({
  type: types.SET_GOODS_LIST,
  goodsList
});

export const setOrders = (orders: any) => ({
  type: types.SET_ORDERS,
  orders
});

export const setOpenBasketModal = (isOpen: boolean) => ({
  type: types.SET_OPEN_MODAL_STATUS,
  isOpen
});

export const setAdminOrders = (adminOrders: any) => ({
  type: types.SET_ADMIN_ORDERS,
  adminOrders
});

export const setProfileData = (profile: any | {}) => ({
  type: types.SET_PROFILE,
  profile
});

export const setIsAuthStatus = (isAuth: boolean) => ({
  type: types.SET_IS_AUTH,
  isAuth
});

export const setIsAdminStatus = (isAdmin: boolean) => ({
  type: types.SET_IS_ADMIN,
  isAdmin
});
