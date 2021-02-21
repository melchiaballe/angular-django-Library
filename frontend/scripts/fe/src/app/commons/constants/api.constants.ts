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

/* BOOKS ENDPOINTS */
export const BOOKS = '/api/books/';
export const OWNED_BOOKS = urlsafe(BOOKS, 'owned-books');
export const ADD_BOOK = urlsafe(BOOKS, 'add-book');
export const UPDATE_BOOK = urlsafe(BOOKS, 'update-book');
export const CHECKOUT_BOOK = urlsafe(BOOKS, 'checkout-book');
export const IS_CHECKED_OUT = urlsafe(BOOKS, 'is-checked-out');
export const RETURN_BOOK = urlsafe(BOOKS, 'return-book');
export const BORROWED_BOOKS = urlsafe(BOOKS, 'borrowed-books');

/** COMMENTS ENDPOINTS */
export const COMMENTS = urlsafe(BOOKS, 'comments');
export const ADD_COMMENT = urlsafe(BOOKS, 'add-comment');
export const DELETE_COMMENT = urlsafe(BOOKS, 'delete-comment');
