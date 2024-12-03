import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedComponentsModule } from './shared-components/shared-components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MainUrlInterceptor } from './interceptors/main-url.interceptor';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedComponentsModule,
    HttpClientModule,
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: MainUrlInterceptor,
    multi: true, // Allows multiple interceptors if needed
  },
],

  bootstrap: [AppComponent]
})
export class AppModule { }
