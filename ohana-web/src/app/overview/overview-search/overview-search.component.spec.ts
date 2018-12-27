import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewSearchComponent } from './overview-search.component';

describe('OverviewSearchComponent', () => {
  let component: OverviewSearchComponent;
  let fixture: ComponentFixture<OverviewSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
