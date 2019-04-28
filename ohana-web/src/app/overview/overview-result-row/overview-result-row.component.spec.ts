import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewResultRowComponent } from './overview-result-row.component';

describe('OverviewResultRowComponent', () => {
  let component: OverviewResultRowComponent;
  let fixture: ComponentFixture<OverviewResultRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewResultRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewResultRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
