import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bindingfromcomponent',
  templateUrl: './bindingfromcomponent.component.html',
  styleUrls: ['./bindingfromcomponent.component.css']
})
export class BindingfromcomponentComponent {


  @Input() bindingFromComponent : string = ""

}
