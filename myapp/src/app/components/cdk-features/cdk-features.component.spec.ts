import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CDKFeaturesComponent } from './cdk-features.component';

describe('CDKFeaturesComponent', () => {
  let component: CDKFeaturesComponent;
  let fixture: ComponentFixture<CDKFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CDKFeaturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CDKFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
