import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TictactoegameComponent } from './tictactoegame.component';

describe('TictactoegameComponent', () => {
  let component: TictactoegameComponent;
  let fixture: ComponentFixture<TictactoegameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TictactoegameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TictactoegameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
