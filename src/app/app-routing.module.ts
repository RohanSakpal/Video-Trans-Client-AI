import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlayerComponent } from './player/player.component';
import { NewPlayerComponent } from './new-player/new-player.component';
import { NewDashboardComponent } from './new-dashboard/new-dashboard.component';


const routes: Routes = [
  {path:'',component:NewDashboardComponent},
  // {path:'videoplayer/:id',component:PlayerComponent},
  {path:'videoplayer/:id',component:NewPlayerComponent},
  // {path:'new',component:NewDashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
