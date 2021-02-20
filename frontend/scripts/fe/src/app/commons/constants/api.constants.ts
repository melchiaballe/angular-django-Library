import { urlsafe } from '../utils/http.utils';

/* USERS ENDPOINTS
 */
export const USERS = '/api/users/';

/* AUTH ENDPOINTS
 */
export const AUTH_USER = urlsafe(USERS, 'auth');
export const AUTH_USER_ID = urlsafe(USERS, 'auth-user');
export const CHANGE_PASSWORD = urlsafe(AUTH_USER, 'password');
export const CHANGE_EMAIL = urlsafe(AUTH_USER, 'email');
export const AUTH_LOGIN = urlsafe(AUTH_USER, 'login');
export const AUTH_REGISTER = urlsafe(AUTH_USER, 'register');
export const NEW_USER = urlsafe(AUTH_USER, 'new-user');
export const FORGOT_PASSWORD = urlsafe(AUTH_USER, 'forgot-password');
export const RESET_PASSWORD = urlsafe(AUTH_USER, 'reset-password');

/* CURRENCY ENDPOINTS */
export const CURRENCIES = '/api/currencies/'

/* STRATEGIES ENDPOINTS */
export const STRATEGIES = '/api/strategies/'


/* BOOKS ENDPOINTS */
export const BOOKS = '/api/books/'
export const OWNED_BOOKS = urlsafe(BOOKS, 'owned-books');
export const ADD_BOOK = urlsafe(BOOKS, 'add-book');
export const CHECKOUT_BOOK = urlsafe(BOOKS, 'checkout-book');