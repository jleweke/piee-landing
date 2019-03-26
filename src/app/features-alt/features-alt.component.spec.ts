import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesAltComponent } from './features-alt.component';

describe('FeaturesComponent', () => {
  let component: FeaturesAltComponent;
  let fixture: ComponentFixture<FeaturesAltComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturesAltComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturesAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
