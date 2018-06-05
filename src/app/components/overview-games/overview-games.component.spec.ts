import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewGamesComponent } from './overview-games.component';

describe('OverviewGamesComponent', () => {
  let component: OverviewGamesComponent;
  let fixture: ComponentFixture<OverviewGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
