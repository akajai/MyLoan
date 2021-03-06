import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ApiAuthorizationModule } from 'src/api-authorization/api-authorization.module';
import { AuthorizeGuard } from 'src/api-authorization/authorize.guard';
import { AuthorizeInterceptor } from 'src/api-authorization/authorize.interceptor';
import { PloanComponent } from './ploan/ploan.component';
import { BloanComponent } from './bloan/bloan.component';
import { HowitworksComponent } from './howitworks/howitworks.component';
import { LaonService } from './laon.service';



@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    PloanComponent,
    BloanComponent,
    HowitworksComponent

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ApiAuthorizationModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'ploan', component: PloanComponent },
      { path: 'bloan', component: BloanComponent },
      { path: 'itworks', component: HowitworksComponent },
            { path: 'fetch-data', component: FetchDataComponent },
      //{ path: 'fetch-data', component: FetchDataComponent, canActivate: [AuthorizeGuard] },
      { path: '**', redirectTo:'' },
    ])
  ],
  providers: [LaonService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
