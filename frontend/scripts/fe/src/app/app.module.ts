import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UIRouterModule } from '@uirouter/angular';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UsersModule } from './components/users/users.module';
import { APP_STATES } from './commons/utils/app.states';
import { PartialsModule } from './components/partials/partials.module';
import { DatePipe, DecimalPipe } from '@angular/common';
import { PublicModule } from './components/public/public.module';
import { CookieService } from 'ngx-cookie-service';
import { TokenService } from './commons/services/interceptors/token.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UIRouterModule.forRoot(APP_STATES),
    NgbModule.forRoot(),

    PublicModule,
    PartialsModule,
    UsersModule,
  ],
  exports : [],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: TokenService, multi: true },
    DatePipe, DecimalPipe, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
