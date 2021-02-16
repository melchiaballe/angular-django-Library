import { urlsafe } from '../utils/http.utils';

/* USERS ENDPOINTS
 */
export const USERS = '/api/users/';

/* SUBSCRIPTION ENDPOINTS */
export const SUBSCRIPTIONS = urlsafe(USERS, 'subscriptions');
export const TRANSACTIONS = urlsafe(USERS, 'transactions');
export const CARDS = urlsafe(USERS, 'cards');
export const DELETE_CARD = urlsafe(USERS, 'card/delete');
export const EDIT_CARD = urlsafe(USERS, 'card/edit');
export const ADD_CARD = urlsafe(USERS, 'card/add');
export const SET_DEFAULT_CARD = urlsafe(USERS, 'card/set-default');
export const USER_SUBSCRIPTIONS = urlsafe(SUBSCRIPTIONS, 'user');
export const ADD_SUBSCRIPTIONS = urlsafe(SUBSCRIPTIONS, 'add');
export const CHANGE_SUBSCRIPTIONS = urlsafe(SUBSCRIPTIONS, 'change');
export const EDIT_BILLING = urlsafe(SUBSCRIPTIONS, 'edit-billing');

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
export const ACTIVATE_ACCOUNT = urlsafe(AUTH_USER, 'activate-account');
export const AUTH_DEACTIVATE = urlsafe(AUTH_USER, 'deactivate');

/* CURRENCY ENDPOINTS */
export const CURRENCIES = '/api/currencies/'

/* STRATEGIES ENDPOINTS */
export const STRATEGIES = '/api/strategies/'
export const ARCHIVE_STRATEGY = urlsafe(STRATEGIES, 'archive');
export const PUBLIC_STRATEGY = urlsafe(STRATEGIES, 'make-public');
export const PRIVATE_STRATEGY = urlsafe(STRATEGIES, 'make-private');
export const DEPLOY_STRATEGY = urlsafe(STRATEGIES, 'deploy');
export const STOP_LIVE_STRATEGY = urlsafe(STRATEGIES, 'stop-live');
export const COPY_SELECTED_STRATEGY = urlsafe(STRATEGIES, 'copy');
export const VISIT_SELECTED_STRATEGY = urlsafe(STRATEGIES, 'visit');
export const ALLOW_NOTIFICATIONS = urlsafe(STRATEGIES, 'allow_notification');
export const DISABLE_NOTIFICATIONS = urlsafe(STRATEGIES, 'disable_notification');
export const GET_SPECIFIC_STRATEGY = urlsafe(STRATEGIES, 'get-specific-strategy');


export const USER_STRATEGIES = urlsafe(STRATEGIES, 'user-strategies');
export const LIVE_USER_STRATEGIES = urlsafe(STRATEGIES, 'live/user-strategies');
export const LIST_STRATEGIES = urlsafe(STRATEGIES, 'list');
export const SPECIFIC_STRATEGY = urlsafe(STRATEGIES, 'specific-strategy');
export const MARKETPLACE = urlsafe(STRATEGIES, 'marketplace');
export const SIGNALS = urlsafe(STRATEGIES, 'user-signals');
// export const LIVE_SIGNALS = urlsafe(STRATEGIES, 'live/signals');

/* STATISTICS ENDPOINTS */
export const STATISTICS = '/api/backtest/statistics/'
export const SPECIFIC_STATISTICS = '/api/backtest/statistic/'
export const TOTAL_STATISTICS = '/api/backtest/total/statistic/'
export const BACKTEST_LOG = '/api/backtest/backtest-log/'


/* TRADES ENDPOINTS */
export const TRADES = '/api/backtest/trades/'
export const SPECIFIC_TRADES = '/api/backtest/trade/'
export const SPECIFIC_TRADES_WAP = '/api/backtest/trade/asset/'
export const TOTAL_TRADES = '/api/backtest/total/trade/'

export const SPECIFIC_SIGNALS = '/api/backtest/specific-signal/';


/* LIVE ENDPOINTS */
export const LIVE_SPECIFIC_STATISTICS = '/api/live/statistic/'
export const LIVE_TOTAL_STATISTICS = '/api/live/total/statistic/'
export const LIVE_SPECIFIC_TRADES = '/api/live/trade/'
export const LIVE_SPECIFIC_TRADES_WAP = '/api/live/trade/asset/'
export const LIVE_TOTAL_TRADES = '/api/live/total/trade/'
export const LIVE_USER_TRADES = '/api/live/user-trades/'