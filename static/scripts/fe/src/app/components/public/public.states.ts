import { ContentOnly } from "src/app/commons/utils/layout.utils";
import { LoginComponent } from "./login/login.component";
import { Disconnect, Deactivate } from "src/app/commons/utils/security.utils";
import { RegisterComponent } from "./register/register.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";
import { ActivateAccountComponent } from "./activate-account/activate-account.component";


export const PUBLIC_STATES: Object[] = [
    {
        name: 'login',
        url : '/login/',
        views: ContentOnly(LoginComponent),
        params: { next: window.location.pathname }
    },
    {
        name    : 'register-login',
        url     : '/login/:new',
        views: ContentOnly(LoginComponent),
        params: { next: window.location.pathname }
    },
    {
        name    : 'logout',
        url     : '/logout/',
        onEnter : Disconnect
    },
    {
        name    : 'log-out',
        url     : '/logout/',
        onEnter : Deactivate
    },
    {
        name    : 'log-in',
        url     : '/login/:deactivate',
        views: ContentOnly(LoginComponent),
        params: { next: window.location.pathname }
    },
    {
        name    : 'register',
        url     : '/register/',
        views: ContentOnly(RegisterComponent),
        params: { next: window.location.pathname }
    },
    {
        name    : 'forgot-password',
        url     : '/forgot-password/',
        views: ContentOnly(ForgotPasswordComponent),
    },
    {
        name    : 'reset-password',
        url     : '/reset-password/:token',
        views: ContentOnly(ResetPasswordComponent),
    },
    {
        name    : 'activate-account',
        url     : '/activate-account/:token',
        views : ContentOnly(ActivateAccountComponent)
    },
]