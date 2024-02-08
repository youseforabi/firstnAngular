import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingfromcomponentComponent } from './bindingfromcomponent.component';

describe('BindingfromcomponentComponent', () => {
  let component: BindingfromcomponentComponent;
  let fixture: ComponentFixture<BindingfromcomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BindingfromcomponentComponent]
    });
    fixture = TestBed.createComponent(BindingfromcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
