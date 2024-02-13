import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GandalfComponent } from './gandalf/gandalf.component';
import { AragornComponent } from './aragorn/aragorn.component';

const routes: Routes = [
  { path: 'home/gandalf', redirectTo: '/gandalf' },
  { path: 'home/aragorn', redirectTo: '/aragorn' },
  { path: 'aragorn', component:AragornComponent},
  { path: 'gandalf', component:GandalfComponent },
  { path: 'home', component:HomeComponent },
  { path: '**', redirectTo:'home' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
