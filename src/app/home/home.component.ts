import { Component } from '@angular/core';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class homeComponent {

  _UserDataService : UserDataService = new UserDataService();
  constructor(){
  console.log(this._UserDataService.userName);

  }
  
}
