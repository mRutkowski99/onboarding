import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedUiLoadingComponent } from './shared-ui-loading.component';

describe('SharedUiLoadingComponent', () => {
  let component: SharedUiLoadingComponent;
  let fixture: ComponentFixture<SharedUiLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedUiLoadingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedUiLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
