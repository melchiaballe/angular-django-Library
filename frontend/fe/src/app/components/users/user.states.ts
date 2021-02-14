import { ContentOnly, NavContent } from '../../commons/utils/layout.utils';
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'

export const USER_STATES : Object[] = [
  {
    name    : 'login',
    url     : '/login/',
    views   : NavContent(LoginComponent),
  },
  {
    name    : 'register',
    url     : '/register/',
    views   : NavContent(RegisterComponent),
  },
]