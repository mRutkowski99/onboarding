import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedUiErrorComponent } from './shared-ui-error.component';

describe('SharedUiErrorComponent', () => {
  let component: SharedUiErrorComponent;
  let fixture: ComponentFixture<SharedUiErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedUiErrorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedUiErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
