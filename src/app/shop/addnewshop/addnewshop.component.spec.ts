import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewshopComponent } from './addnewshop.component';

describe('AddnewshopComponent', () => {
  let component: AddnewshopComponent;
  let fixture: ComponentFixture<AddnewshopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnewshopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
