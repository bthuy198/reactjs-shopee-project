const SERVER_API = process.env.REACT_APP_API_URL;

export const HTTP_STATUS = Object.freeze({
  IDLE: "IDLE",
  PENDING: "PENDING",
  FULFILLED: "FULFILLED",
  REJECTED: "REJECTED",
});

export const BILL_URL = SERVER_API + "/bills";

export const USER_URL = {
  USER_URL: `${SERVER_API}/users`,
  USER_INFO_URL: `${SERVER_API}/users/info`,
  USER_ADDRESS_URL: `${SERVER_API}/users/address`,
};

export const ADMIN_URL = {
  USER_URL: `${SERVER_API}/admin/users`,
  USER_INFO_URL: `${SERVER_API}/admin/users/info`,
  USER_ADDRESS_URL: `${SERVER_API}/admin/users/address`,
};

export const CATEGORY_URL = {
  CATEGORY_API_URL: `${SERVER_API}/categories`,
};

export const PRODUCT_URL = {
  PRODUCT_API_URL: `${SERVER_API}/products`,
  ALL_PRODUCT_URL: `${SERVER_API}/products/get-all`,
  PRODUCT_DETAIL_API_URL: `${SERVER_API}/details`,
};

export const AUTH_URL = {
  LOGIN_API_URL: `${SERVER_API}/auth/signin`,
  SIGNUP_API_URL: `${SERVER_API}/auth/signup`,
  LOGOUT_API_URL: `${SERVER_API}/auth/signout`,
};

export const CART_URL = {
  CART_API_URL: `${SERVER_API}/cart`,
  CHANGE_CART_URL: `${SERVER_API}/cart/update-cart`,
};

export const ORDER_URL = {
  ORDER_API_URL: `${SERVER_API}/users/orders`,
  ALL_ORDER_URL: `${SERVER_API}/users/orders/get-all`,
};
