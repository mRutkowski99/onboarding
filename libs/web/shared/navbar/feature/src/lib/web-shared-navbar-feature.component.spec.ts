import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebSharedNavbarFeatureComponent } from './web-shared-navbar-feature.component';

describe('WebSharedNavbarFeatureComponent', () => {
  let component: WebSharedNavbarFeatureComponent;
  let fixture: ComponentFixture<WebSharedNavbarFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebSharedNavbarFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WebSharedNavbarFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
