import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { UtilityService } from './utility.service'
import { HomeComponent } from './home/home.component'
@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [UtilityService],
  bootstrap: [AppComponent],
})
export class AppModule {}
