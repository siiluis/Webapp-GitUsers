import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowersGraficComponent } from './followers-grafic.component';

describe('FollowersGraficComponent', () => {
  let component: FollowersGraficComponent;
  let fixture: ComponentFixture<FollowersGraficComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FollowersGraficComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowersGraficComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
