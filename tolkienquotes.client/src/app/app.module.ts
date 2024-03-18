import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from '@auth0/auth0-angular';
import { HomeComponent } from './home/home.component';
import { GandalfComponent } from './gandalf/gandalf.component';
import { AragornComponent } from './aragorn/aragorn.component';
import { ArwenComponent } from './arwen/arwen.component';
import { BilboComponent } from './bilbo/bilbo.component';
import { ElrondComponent } from './elrond/elrond.component';
import { FrodoComponent } from './frodo/frodo.component';
import { GimiliComponent } from './gimili/gimili.component';
import { GollumComponent } from './gollum/gollum.component';
import { LegolasComponent } from './legolas/legolas.component';
import { SamwiseComponent } from './samwise/samwise.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GandalfComponent,
    AragornComponent,
    ArwenComponent,
    BilboComponent,
    ElrondComponent,
    FrodoComponent,
    GimiliComponent,
    GollumComponent,
    LegolasComponent,
    SamwiseComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'dev-ekrbauslpvf2xmh1.us.auth0.com',
      clientId: '4ulCpIjqO4ptKCimqIcVnyglLt2u2xR9',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
