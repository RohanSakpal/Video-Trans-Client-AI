import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlayerComponent } from './player/player.component';
import {HttpClientModule} from '@angular/common/http'
import { GcpDataService } from './gcp-data.service';
import { FormsModule } from '@angular/forms';
import { TimeFormatPipe } from './time-format.pipe';
import { NewPlayerComponent } from './new-player/new-player.component';
import { NewDashboardComponent } from './new-dashboard/new-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PlayerComponent,
    TimeFormatPipe,
    NewPlayerComponent,
    NewDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GcpDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
