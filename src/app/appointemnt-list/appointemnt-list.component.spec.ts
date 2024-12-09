import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointemntListComponent } from './appointemnt-list.component';

describe('AppointemntListComponent', () => {
  let component: AppointemntListComponent;
  let fixture: ComponentFixture<AppointemntListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointemntListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointemntListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
