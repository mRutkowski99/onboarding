import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebSharedNavbarUiComponent } from './web-shared-navbar-ui.component';

describe('WebSharedNavbarUiComponent', () => {
  let component: WebSharedNavbarUiComponent;
  let fixture: ComponentFixture<WebSharedNavbarUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebSharedNavbarUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WebSharedNavbarUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
