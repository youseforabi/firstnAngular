import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { homeComponent } from './home/home.component';
import { aboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TeamComponent } from './team/team.component';
import { LeaderComponent } from './leader/leader.component';
import { ManagerComponent } from './manager/manager.component';
import { BindingfromcomponentComponent } from './bindingfromcomponent/bindingfromcomponent.component';
@NgModule({
  declarations: [
    AppComponent,
    homeComponent,
    aboutComponent,
    GalleryComponent,
    ContactComponent,
    NotfoundComponent,
    NavbarComponent,
    TeamComponent,
    LeaderComponent,
    ManagerComponent,
    BindingfromcomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
