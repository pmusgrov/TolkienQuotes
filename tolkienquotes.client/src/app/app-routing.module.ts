import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  { path: 'home/gandalf', redirectTo: '/gandalf' },
  { path: 'home/aragorn', redirectTo: '/aragorn' },
  { path: 'home/arwen', redirectTo: '/arwen' },
  { path: 'home/bilbo', redirectTo: '/bilbo' },
  { path: 'home/elrond', redirectTo: '/elrond' },
  { path: 'home/frodo', redirectTo: '/frodo' },
  { path: 'home/gimili', redirectTo: '/gimili' },
  { path: 'home/gollum', redirectTo: '/gollum' },
  { path: 'home/legolas', redirectTo: '/legolas' },
  { path: 'home/samwise', redirectTo: '/samwise' },
  { path: 'aragorn', component:AragornComponent},
  { path: 'gandalf', component: GandalfComponent },
  { path: 'arwen', component: ArwenComponent },
  { path: 'bilbo', component: BilboComponent },
  { path: 'elrond', component: ElrondComponent },
  { path: 'frodo', component: FrodoComponent },
  { path: 'gimili', component: GimiliComponent },
  { path: 'gollum', component: GollumComponent },
  { path: 'legolas', component: LegolasComponent },
  { path: 'samwise', component: SamwiseComponent },
  { path: 'home', component:HomeComponent },
  { path: '**', redirectTo:'home' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
