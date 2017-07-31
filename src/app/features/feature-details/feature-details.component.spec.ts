import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureDetailsComponent } from './feature-details.component';

describe('FeatureDetailsComponent', () => {
  let component: FeatureDetailsComponent;
  let fixture: ComponentFixture<FeatureDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
