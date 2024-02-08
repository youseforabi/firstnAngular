import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { homeComponent } from './home/home.component';
import { aboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { TeamComponent } from './team/team.component';
import { LeaderComponent } from './leader/leader.component';
import { ManagerComponent } from './manager/manager.component';

const routes: Routes = [
  {path : "" , redirectTo : "home" , pathMatch : "full"},
  {path : "home" , component : homeComponent},
  {path : "about" , component : aboutComponent},
  {path : "gallery" , component : GalleryComponent},
  {path : "contact" , component : ContactComponent},
  {path : "team" , component : TeamComponent , children : [ 
    
    {path : "leader" , component : LeaderComponent} ,
    {path : "manager" , component : ManagerComponent} 

  ]},
  {path : "**" , component : NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
