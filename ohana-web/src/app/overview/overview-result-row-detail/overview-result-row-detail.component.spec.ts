import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewResultRowDetailComponent } from './overview-result-row-detail.component';

describe('OverviewResultRowDetailComponent', () => {
  let component: OverviewResultRowDetailComponent;
  let fixture: ComponentFixture<OverviewResultRowDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewResultRowDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewResultRowDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
